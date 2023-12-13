import { useState } from 'react'
import { Row, Col, Card, Modal, Button, Tooltip, OverlayTrigger, Tab, ButtonGroup, Badge, Nav, TabContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import defaultAvatar from '../../../assets/images/users/avatar-1.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar9 from '../../../assets/images/users/avatar-9.jpg';
import small1 from '../../../assets/images/small/small-1.jpg';
import PageTitle from '../../../components/PageTitle'
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import { TaskTypes, tasks, assignees } from './data'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import TaskItem from './Task'
import { FormInput } from '../../../components'
import CustomDatepicker from '../../../components/Datepicker'

interface StateType {
  todoTasks: TaskTypes[];
  inprogressTasks: TaskTypes[];
  reviewTasks: TaskTypes[];
  doneTasks: TaskTypes[];
}

const KanbanApp = () => {
  const [state, setState] = useState<StateType>({
    todoTasks: tasks.filter((t) => t.status === 'Todo'),
    inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
    reviewTasks: tasks.filter((t) => t.status === 'Review'),
    doneTasks: tasks.filter((t) => t.status === 'Done'),
  });
  const [totalTasks, setTotalTasks] = useState<number>(tasks.length);
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [descriptionModal, setDescriptionModal] = useState<boolean>(false);
  const [newTaskDetails, setNewTaskDetails] = useState<any>(null);

  const BreadcrumbChild = () => {
    return (
      <Link
        to="#"
        role='button'
        onClick={() => {
          toggleNewTaskModal();
          newTask('Todo', 'todoTasks');
        }}
        className="btn btn-success btn-sm ms-3"
      >
        Add New
      </Link>
    )
  }

  /*
   * Form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      category: yup.string().required(),
      title: yup.string().required(),
      priority: yup.string().required(),
      description: yup.string().required(),
      assignTo: yup.string().required(),
    })
  );

  /*
   * Form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = methods;

  /**
   * Toggles the new task modal
   */
  function toggleNewTaskModal() {
    setNewTaskModal((prevState) => !prevState);
  }

  /** 
   * Toggles the description modal
   */
  const toggleDescriptionModal = () => {
    setDescriptionModal((prevState) => !prevState)
  }

  /**
   * Creates new empty task with given status
   * @param status
   * @param queue
   */
  const newTask = (status: string, queue: string) => {
    setNewTaskDetails({
      dueDate: new Date(),
      status: status,
      queue: queue,
    });
    setNewTaskModal(true);
  };

  /**
   * When date changes
   * @param {} date
   */
  const handleDateChange = (date: Date) => {
    if (newTaskDetails) {
      // setState({
      //     ...state,
      //     newTask: { ...state.newTask, dueDate: date },
      // });
      setNewTaskDetails({ ...newTaskDetails, dueDate: date });
    }
  };

  // a little function to help us with reordering the result
  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (
    source: Iterable<unknown> | ArrayLike<unknown>,
    destination: Iterable<unknown> | ArrayLike<unknown>,
    droppableSource: { index: number; droppableId: string | number },
    droppableDestination: { index: number; droppableId: string | number }
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  /**
   * Gets the list
   */
  const getList = (id: string) => {
    const modifiedState: any = { ...state };
    const stateTasks: any = modifiedState[id] && modifiedState[id];
    return stateTasks;
  };

  /**
   * On drag end
   */
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      let localState: any = { ...state };
      localState[source.droppableId] = items;
      setState(localState);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      const localState = { ...state, ...result };
      setState(localState);
    }
  };

  /**
   * Handles the new task form submission
   */
  const handleNewTask = (values: any) => {
    const formData = {
      category: values.category,
      title: values.title,
      priority: values.priority,
      description: values.description,
      userAvatar: [JSON.parse(values.assignTo)],
    };

    const newTask = {
      ...newTaskDetails,
      ...formData,
      id: totalTasks + 1,
      dueDate: newTaskDetails.dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    let modifiedState: any = { ...state };
    let tasks = [...getList(newTaskDetails.queue), newTask];
    modifiedState[newTaskDetails.queue] = [...tasks];
    setState(modifiedState);
    setNewTaskModal(false);
    setTotalTasks(totalTasks + 1);

    // reset the form after submission
    reset();
  };

  return (
    <>
      <PageTitle pageTitle='Kanban Board' />

      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Tasks', path: '/apps/kanban' },
          { label: "Kanban Board", path: "/apps/kanban", active: true },
        ]}
        title={'Kanban Board '}
        children={<BreadcrumbChild />}
      />

      <Row>
        <Col xs={12}>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">

              <Droppable droppableId='todoTasks'>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="tasks">
                    <h5 className="mt-0 task-header">TODO ({state.todoTasks.length})</h5>
                    <div className="task-list-items">
                      {(state.todoTasks || []).map((item, idx) => (
                        <Draggable
                          draggableId={item.id + ''}
                          index={idx}
                          key={item.id}
                        >
                          {(provided, snapshot) => (
                            <Card
                              className="mb-0"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <Droppable droppableId='inprogressTasks'>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="tasks">
                    <h5 className="mt-0 task-header text-uppercase">In Progress ({state.inprogressTasks.length})</h5>
                    <div className="task-list-items">
                      {(state.inprogressTasks || []).map((item, idx) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id + ''}
                          index={idx}
                        >
                          {(provided, snapshot) => (
                            <Card
                              className="mb-0"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <Droppable droppableId='reviewTasks'>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="tasks">
                    <h5 className="mt-0 task-header text-uppercase">Review ({state.reviewTasks.length})</h5>
                    <div className="task-list-items">
                      {(state.reviewTasks || []).map((item, idx) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id + ''}
                          index={idx}
                        >
                          {(provided, snapshot) => (
                            <Card
                              className="mb-0"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <Droppable droppableId='doneTasks'>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="tasks">
                    <h5 className="mt-0 task-header text-uppercase">Done ({state.doneTasks.length})</h5>
                    <div className="task-list-items">
                      {(state.doneTasks || []).map((item, idx) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id + ''}
                          index={idx}
                        >
                          {(provided, snapshot) => (
                            <Card
                              className="mb-0"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>

          </DragDropContext>
        </Col>
      </Row>

      {/* Add New Task Modal */}
      {newTaskDetails && (
        <Modal
          show={newTaskModal}
          onHide={toggleNewTaskModal}
          size='lg'
          centered
          className="task-modal-content"
          role="dialog"
          aria-labelledby="NewTaskModalLabel"
          aria-hidden="true"
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(handleNewTask)} className="p-2">

              <FormInput
                name='category'
                label='Project'
                type='select'
                containerClass='mb-3'
                className='form-select'
                register={register}
                key='category'
                errors={errors}
                control={control}
              >
                <option>Attex</option>
                <option>CRM</option>
                <option>Design</option>
                <option>iOS</option>
              </FormInput>

              <Row>
                <Col md={8}>
                  <FormInput
                    name='title'
                    label='Title'
                    placeholder='Enter Title'
                    type='text'
                    containerClass='mb-3'
                    className='form-control'
                    register={register}
                    key='title'
                    errors={errors}
                    control={control}
                  />
                </Col>

                <Col md={4}>
                  <FormInput
                    name='priority'
                    label='Priority'
                    type='select'
                    containerClass='mb-3'
                    className='form-select'
                    register={register}
                    key='priority'
                    errors={errors}
                    control={control}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </FormInput>
                </Col>
              </Row>

              <FormInput
                name='description'
                label='Description'
                type='textarea'
                containerClass='mb-3'
                className='form-control'
                rows={3}
                register={register}
                key='description'
                errors={errors}
                control={control}
              />

              <Row>
                <Col md={6}>
                  <FormInput
                    name='assignTo'
                    label='Assign To'
                    type='select'
                    containerClass='mb-3'
                    className='form-select'
                    register={register}
                    key='assignTo'
                    errors={errors}
                    control={control}
                  >
                    {(assignees || []).map((assignee, idx) => (
                      <option key={idx} value={JSON.stringify(assignee)}>{assignee.title}</option>
                    ))}
                  </FormInput>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <label htmlFor="task-priority" className="form-label">Due Date</label>
                    <CustomDatepicker
                      hideAddon
                      dateFormat='yyyy-MM-dd'
                      value={newTaskDetails.dueDate}
                      inputClass='form-control'
                      onChange={(date) => {
                        handleDateChange(date);
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <div className="text-end d-flex flex-wrap gap-1 justify-content-end">
                <Button variant='light' type='button' onClick={toggleNewTaskModal} > Cancel </Button>
                <Button variant='primary' type='submit' > Create </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      )}

      <Modal
        show={descriptionModal}
        onHide={toggleDescriptionModal}
        size='lg'
        className="task-modal-content"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>iOS App home page
            <Badge bg='danger' className="ms-2">
              High
            </Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">
            <h5 className="mt-0">Description:</h5>

            <p className="text-muted mb-4">
              Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores
              libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet. With supporting text below
              as a natural lead-in to additional contenposuere erat a ante.
            </p>

            <Row>
              <Col md={4}>
                <div className="mb-4">
                  <h5>Create Date</h5>
                  <p>17 March 2023 <small className="text-muted">1:00 PM</small></p>
                </div>
              </Col>
              <Col md={4}>
                <div className="mb-4">
                  <h5>Due Date</h5>
                  <p>22 December 2023 <small className="text-muted">1:00 PM</small></p>
                </div>
              </Col>
              <Col md={4}>
                <div className="mb-4">
                  <h5>Asignee:</h5>
                  <div className="avatar-group mt-1">

                    <OverlayTrigger
                      placement='top'
                      overlay={<Tooltip>Tosha</Tooltip>}
                    >
                      <Link to='#' className="avatar-group-item">
                        <img src={defaultAvatar} alt="" className="rounded-circle avatar-xs" />
                      </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement='top'
                      overlay={<Tooltip>Hooker</Tooltip>}
                    >
                      <Link to='#' className="avatar-group-item">
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle text-bg-warning">
                            K
                          </div>
                        </div>
                      </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement='top'
                      overlay={<Tooltip>Brain</Tooltip>}
                    >
                      <Link to='#' className="avatar-group-item">
                        <img src={avatar9} alt="" className="rounded-circle avatar-xs" />
                      </Link>
                    </OverlayTrigger>

                  </div>
                </div>
              </Col>
            </Row>

            <TabContainer defaultActiveKey='commentsTab'>
              <Nav variant='tabs' className="nav-bordered mb-3" as='ul'>
                <Nav.Item as='li'>
                  <Nav.Link as={Link} to='#' eventKey='commentsTab'>
                    Comments
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link as={Link} to='#' eventKey='filesTab'>
                    Files
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content >
                <Tab.Pane eventKey='commentsTab'>
                  <textarea className="form-control mb-2" placeholder="Write message" rows={3}></textarea>
                  <div className="text-end">

                    <ButtonGroup className="mb-2 d-none d-sm-inline-block">
                      <Button variant='link' type="button" className="btn-sm text-muted fs-18" >
                        <i className="ri-attachment-2" />
                      </Button>
                    </ButtonGroup>

                    <ButtonGroup className="mb-2 d-none d-sm-inline-block">
                      <Button type="button" variant='primary' size='sm'>
                        Submit
                      </Button>
                    </ButtonGroup>
                  </div>

                  <div className="d-flex mt-2">
                    <img className="me-3 avatar-sm rounded-circle" src={avatar3} alt="Generic placeholder" />
                    <div className="w-100">
                      <h5 className="mt-0">Jeremy Tomlinson</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                      vulputate at, tempus viverra turpis.

                      <div className="d-flex mt-3">
                        <Link className="pe-3" to="#">
                          <img src={avatar4} className="avatar-sm rounded-circle" alt="Generic placeholder" />
                        </Link>
                        <div className="w-100">
                          <h5 className="mt-0">Kathleen Thomas</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                          vulputate at, tempus viverra turpis.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <Link to="#" className="text-danger">Load more </Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='filesTab'>
                  <Card className="mb-1 shadow-none border">
                    <div className="p-2">
                      <Row className="align-items-center">
                        <Col xs="auto">
                          <div className="avatar-sm">
                            <span className="avatar-title rounded">
                              .ZIP
                            </span>
                          </div>
                        </Col>
                        <Col className="ps-0">
                          <Link to="#" className="text-muted fw-bold">-admin-design.zip</Link>
                          <p className="mb-0">2.3 MB</p>
                        </Col>
                        <Col xs='auto'>
                          <Button variant='link' as='a' size='lg' className="text-muted">
                            <i className="ri-download-2-line" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Card>

                  <Card className="mb-1 shadow-none border">
                    <div className="p-2">
                      <Row className="align-items-center">
                        <Col xs='auto'>
                          <img src={small1} className="avatar-sm rounded" alt="file-pic" />
                        </Col>
                        <Col className="ps-0">
                          <Link to="#" className="text-muted fw-bold">Dashboard-design.jpg</Link>
                          <p className="mb-0">3.25 MB</p>
                        </Col>
                        <Col xs='auto'>
                          <Button variant='link' size='lg' className="text-muted">
                            <i className="ri-download-2-line" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Card>

                  <Card className="mb-0 shadow-none border">
                    <div className="p-2">
                      <Row className="align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-secondary rounded">
                              .MP4
                            </span>
                          </div>
                        </div>
                        <Col className="ps-0">
                          <Link to="#" className="text-muted fw-bold">Admin-bug-report.mp4</Link>
                          <p className="mb-0">7.05 MB</p>
                        </Col>
                        <Col xs='auto'>
                          <Link to="#" className="btn btn-link btn-lg text-muted">
                            <i className="ri-download-2-line"/>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </TabContainer>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default KanbanApp
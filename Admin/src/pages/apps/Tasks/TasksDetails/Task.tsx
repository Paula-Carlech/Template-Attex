import { Row, Col, Card } from 'react-bootstrap';
import { ListTaskItem } from '../TasksList/data';

import CardTitle from '../../../../components/CardTitle';

interface TaskProps {
  task: ListTaskItem;
};

const Task = ({ task }: TaskProps) => {
  return (
    <Card>
      <Card.Body>
        <CardTitle
          containerClass="d-flex align-items-center justify-content-between"
          title={
            <div className="form-check float-start">
              <input type="checkbox" className="form-check-input" id="completedCheck" />
              <label className="form-check-label" htmlFor="completedCheck">
                Mark as completed
              </label>
            </div>
          }
          icon="ri-more-fill fs-18"
          menuItems={[
            { label: 'Attachment', icon: 'ri-attachment-line' },
            { label: 'Edit', icon: 'ri-edit-box-line' },
            { label: 'Mark as Duplicate', icon: 'ri-file-copy-2-line' },
            {
              label: 'Delete',
              icon: 'ri-delete-bin-line',
              variant: 'text-danger',
              hasDivider: true,
            },
          ]}
        />
        <div className="clearfix"></div>
        <Row>
          <Col>
            <h4 className="mt-3">{task.title}</h4>

            <Row>
              <Col>
                <p className="mt-2 mb-1 text-muted font-12">Assigned To</p>
                <div className="d-flex">
                  <img
                    src={task.assignee_avatar}
                    alt={task.assigned_to}
                    className="rounded-circle me-2"
                    height="24"
                  />
                  <div>
                    <h5 className="mt-1 font-14">{task.assigned_to}</h5>
                  </div>
                </div>
              </Col>

              <Col>
                <p className="mt-2 mb-1 text-muted font-12">Due Date</p>
                <div className="d-flex">
                  <i className="ri-calendar-todo-line  fs-18 text-success me-1"/>
                  <div>
                    <h5 className="mt-1 font-14">{task.due_date}</h5>
                  </div>
                </div>
              </Col>
              <Col>
                <p className="mt-2 mb-1 text-muted font-12">Project Name</p>
                <div className="d-flex">
                  <i className="ri-briefcase-line  fs-18 text-success me-1"/>
                  <div>
                    <h5 className="mt-1 font-14">{task.projectName}</h5>
                  </div>
                </div>
              </Col>
            </Row>

            <h5 className="mt-3">Overview:</h5>

            <p className="text-muted mb-4">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
            </p>

            <h5 className="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>

            {task.checklists.map((checklist, idx) => (
              <div className="form-check mt-1" key={idx.toString()}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`checklist-${checklist.id}`}
                  defaultChecked={checklist.completed}
                />
                <label
                  className={`form-check-label ${(checklist.completed) ? 'strikethrough' : ''}`}
                  htmlFor={`checklist-${checklist.id}`}
                >
                  {checklist.title}
                </label>
              </div>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Task;

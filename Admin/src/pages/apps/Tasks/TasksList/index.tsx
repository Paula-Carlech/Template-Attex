import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTaskList } from '../../../../hooks';
import TaskSection from './Section';
import Task from './Task';
import PageTitle from '../../../../components/PageTitle';

const TaskList = () => {
  const { todayTask, upcomingTask, otherTask, selectedTask, selectTask } = useTaskList();
  return (
    <>
      <PageTitle pageTitle='Tasks' />
      <Row>
        <Col xxl={8}>
          <div className="page-title-box">
            <div className="page-title-right">
              <div className="app-search">
                <Form>
                  <div className="mb-2 position-relative">
                    <Form.Control className="border border-dark border-opacity-10" placeholder="Search files..." />
                    <span className="ri-search-line search-icon"></span>
                  </div>
                </Form>
              </div>
            </div>
            <h4 className="page-title">
              Tasks{' '}
              <Link to="#" className="btn btn-success btn-sm ms-3">
                Add New
              </Link>
            </h4>
          </div>

          {/* tasks */}
          <div className="mt-2">
            <TaskSection title="Today" tasks={todayTask} selectTask={selectTask}></TaskSection>
          </div>
          <div className="mt-4">
            <TaskSection title="Upcoming" tasks={upcomingTask} selectTask={selectTask}></TaskSection>
          </div>
          <div className="mt-4 mb-4">
            <TaskSection title="Other" tasks={otherTask} selectTask={selectTask}></TaskSection>
          </div>
        </Col>

        <Col>
          <Task {...selectedTask} />
        </Col>
      </Row>
    </>
  );
};

export default TaskList;

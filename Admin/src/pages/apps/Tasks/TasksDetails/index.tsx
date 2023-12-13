import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
// Components
import PageTitle from '../../../../components/PageTitle';
import PageBreadcrumb from '../../../../components/PageBreadcrumb';
import Task from './Task';
import Comments from './Comments';
import Attachments from './Attachments';

// dummy data
import { ListTaskItem } from '../TasksList/data';
import { Tasks } from './data';


const TaskDetails = () => {
  const [selectedTask] = useState<ListTaskItem>(Tasks[0]);

  return (
    <>
      <PageTitle pageTitle='Task Detail' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Tasks', path: 'apps/tasks/details' },
          { label: "Task Detail", path: "apps/tasks/details", active: true },
        ]}
        title={"Task Detail"}
      />
      <Row>
        <Col xxl={8} xl={7}>
          <Task task={selectedTask} />
          <Comments />
        </Col>
        <Col xxl={4} xl={5}>
          <Attachments />
        </Col>
      </Row>
    </>
  )
}

export default TaskDetails;


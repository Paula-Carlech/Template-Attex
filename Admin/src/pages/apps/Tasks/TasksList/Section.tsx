import { Card, Col, Collapse, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useTask, useToggle } from "../../../../hooks";

import { ListTaskItem } from "./data"
import { Link } from "react-router-dom";
import { useState } from "react";

const Task = ({ task, selectTask }: { task: ListTaskItem; selectTask: (task: ListTaskItem) => void }) => {
  const { completed, markCompleted } = useTask(task);
  return (
    <Row className="justify-content-sm-between mt-2 mb-2">
      <Col sm={6} className="mb-2 mb-sm-0">
        <div className="form-check">
          <input type="checkbox" className="form-check-input"
            id={`task-${task.id}`}
            checked={completed}
            onChange={(event) => markCompleted(event, selectTask)}
          />
          <label className="form-check-label" htmlFor={`task-${task.id}`} onClick={() => selectTask(task)}>
            {task.title}
          </label>
        </div>
      </Col>
      <Col sm={6}>
        <div className="d-flex justify-content-between">
          <div>
            <OverlayTrigger placement="right" overlay={<Tooltip>Assigned to {task.assigned_to}</Tooltip>}>
              <img src={task.assignee_avatar} alt="avatar" className="avatar-xs rounded-circle me-1" id={`task-avatar-${task.id}`} />
            </OverlayTrigger>

          </div>
          <div>
            <ul className="list-inline fs-13 text-end">
              <li className="list-inline-item">
                <i className='ri-calendar-todo-line fs-16 me-1' /> {task.due_date}
              </li>
              <li className="list-inline-item ms-1">
                <i className='ri-list-check-3 fs-16 me-1' />{' '}
                {task.checklists.filter((t) => t.completed).length} / {task.checklists.length}
              </li>
              <li className="list-inline-item ms-1">
                <i className='ri-chat-2-line fs-16 me-1' /> 21
              </li>
              <li className="list-inline-item ms-2">
                <span className={`badge p-1 ${(task.priority === 'High') ? 'bg-danger-subtle text-danger' : (task.priority === 'Medium') ? 'bg-info-subtle text-info' : 'bg-success-subtle text-success'}`}> {task.priority}</span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  )
}
interface TaskSectionProps {
  title: string;
  tasks: Array<ListTaskItem>;
  selectTask: (task: ListTaskItem) => void;
}

const TaskSection = ({ title, tasks, selectTask }: TaskSectionProps) => {
  const [isCollapsed, toggleCollapse] = useToggle(true);

  const [taskList] = useState<ListTaskItem[]>(tasks);

  return (
    <>
      <h5 className="m-0 pb-2">
        <Link className="text-dark" onClick={toggleCollapse} to="#" >
          <i className={`${isCollapsed ? "ri-arrow-down-s-line" : "ri-arrow-down-s-line"} fs-18`} />
          {title}<span className="text-muted"> ({taskList.length})</span>
        </Link>
      </h5>
      <Collapse in={isCollapsed}>
        <Card className="mb-0">
          <Card.Body className="pb-1 pt-2">
            {taskList.map((task, idx) => (
              <Task selectTask={selectTask} task={task} key={idx.toString()} />
            ))}
          </Card.Body>
        </Card>
      </Collapse>
    </>
  )
}

export default TaskSection;
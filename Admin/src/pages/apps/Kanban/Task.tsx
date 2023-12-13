// dummy data
import { TaskTypes } from './data'
import { Card, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface TaskItemProps {
  task: TaskTypes;
  toggleDescriptionModal: () => void;
}

const TaskItem = ({ task, toggleDescriptionModal }: TaskItemProps) => {
  return (
    <>
      <Card.Body className="p-3">
        <span className={`float-end badge 
        ${(task.priority === 'High') ? 'bg-danger-subtle text-danger' :
            (task.priority === 'Medium') ? 'bg-warning-subtle text-warning' :
              (task.priority === 'Low') ? 'bg-success-subtle text-success' : ''
          }`}
        >
          {task.priority}
        </span>
        <small className="text-muted">
          {task.dueDate}
        </small>
        <h5 className="my-2 fs-16">
          <Link to="#" data-bs-toggle="modal" onClick={toggleDescriptionModal} className="text-body">
            {task.title}
          </Link>
        </h5>
        <p className="mb-0">
          <span className="pe-2 text-nowrap mb-2 d-inline-block">
            <i className="ri-briefcase-2-line text-muted"/> {task.category} </span> <span className="text-nowrap mb-2 d-inline-block">
            <i className="ri-discuss-line text-muted"/>
            <b> {task.comments}</b> Comments
          </span>
        </p>

        <Dropdown className="float-end mt-2">
          <Dropdown.Toggle as='a' className="text-muted arrow-none">
            <i className="ri-more-2-fill fs-18"/>
          </Dropdown.Toggle>
          <Dropdown.Menu align='end'>
            <Dropdown.Item as='a'><i className="ri-edit-box-line me-1"/>Edit</Dropdown.Item>
            <Dropdown.Item as='a'><i className="ri-delete-bin-line me-1"/>Delete</Dropdown.Item>
            <Dropdown.Item as='a'><i className="ri-user-add-line me-1"/>Add People</Dropdown.Item>
            <Dropdown.Item as='a'><i className="ri-logout-circle-line me-1"/>Leave</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="avatar-group mt-2">
          {(task.userAvatar || []).map((avatar, idx) => {

            return avatar.isImage ? (
              <OverlayTrigger
                key={idx}
                placement='top'
                overlay={<Tooltip id={avatar.id}>{avatar.title}</Tooltip>}
              >
                <Link to="#" className="avatar-group-item">
                  <img src={avatar.image} alt="/" className="rounded-circle avatar-xs" />
                </Link>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                key={idx}
                placement='top'
                overlay={<Tooltip id={avatar.id}>{avatar.title}</Tooltip>}
              >
                <Link to="#" className="avatar-group-item">
                  <div className="avatar-xs">
                    <div className={`avatar-title rounded-circle ${avatar.textBg}`}>
                      {avatar.image}
                    </div>
                  </div>
                </Link>
              </OverlayTrigger>
            )
          })}
        </div>
      </Card.Body >
    </>
  )
}

export default TaskItem
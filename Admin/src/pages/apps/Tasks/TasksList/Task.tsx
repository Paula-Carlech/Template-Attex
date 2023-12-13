import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useTask } from '../../../../hooks';
import { ListTaskItem } from './data';

// Component
import CardTitle from '../../../../components/CardTitle';

const Task = (task: ListTaskItem) => {
  const { completed, markCompleted } = useTask(task);
  const [editorValue, setEditorValue] = useState<string>(`
  <h3>This is a simple editable area.</h3>
  <p><br></p>
  <ul>
      <li>
          Select a text to reveal the toolbar.
      </li>
      <li>
          Edit rich document on-the-fly, so elastic!
      </li>
  </ul>
  <p><br></p>
  <p>
      End of simple area
  </p>`
  );

  return (
    <Card>
      <Card.Body>
        <CardTitle
          containerClass="d-flex align-items-center justify-content-between"
          title={
            <div className="form-check float-start">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheck"
                checked={completed}
                onChange={markCompleted}
              />
              <label className="form-check-label" htmlFor="completedCheck">
                Mark as completed
              </label>
            </div>
          }
          icon="ri-more-fill"
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

        <hr className="mt-2 mb-2" />

        <Row>
          <Col>
            <h4>{task.title}</h4>
            <Row>
              <Col xs={6}>
                <p className="mt-2 mb-1 text-muted">Assigned To</p>
                <div className="d-flex">
                  <img
                    src={task.assignee_avatar}
                    alt={task.assigned_to}
                    className="rounded-circle me-2"
                    height="24"
                  />
                  <div>
                    <h5 className="mt-1 fs-14">{task.assigned_to}</h5>
                  </div>
                </div>
              </Col>

              <Col xs={6}>
                <p className="mt-2 mb-1 text-muted">Due Date</p>
                <div className="d-flex">
                  <i className="ri-calendar-todo-line fs-18 text-success me-1"/>
                  <div>
                    <h5 className="mt-1 fs-14">{task.due_date}</h5>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <ReactQuill
                  theme='bubble'
                  value={editorValue}
                  onChange={setEditorValue}
                  style={{ height: 130 }}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-2 fs-16">Checklists/Sub-tasks</h5>

            {/* checklists */}
            {task.checklists.map((checklist, idx) => (
              <div className="form-check mt-1" key={idx}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`checklist-${checklist.id}`}
                  defaultChecked={checklist.completed}
                />
                <label
                  className={`form-check-label ${(checklist.completed) ? 'strikethrough' : 'strikethrough'}`}
                  htmlFor={`checklist-${checklist.id}`}
                >
                  {checklist.title}
                </label>
              </div>
            ))}

            <h5 className="mt-4 mb-2 fs-16">Attachments</h5>

            {/* attachments */}
            {task.attachments.map((file, idx) => {
              const ext = file.filename.substr(file.filename.lastIndexOf('.') + 1);
              return (
                <Card key={idx} className="mb-2 shadow-none border">
                  <div className="p-1">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <div className="avatar-sm">
                          <span className="avatar-title rounded">.{ext}</span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <Link to="#" className="text-muted fw-bold">
                          {file.filename}
                        </Link>
                        <p className="mb-0">{file.size}</p>
                      </Col>
                      <Col className="col-auto">
                        <OverlayTrigger placement="left" overlay={<Tooltip>Download</Tooltip>}>
                          <Link
                            to="#"
                            id="btn-download"
                            className="btn btn-link text-muted btn-lg p-0 me-1"
                          >
                            <i className="ri-delete-bin-line"/>
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement="left" overlay={<Tooltip>Delete</Tooltip>}>
                          <Link
                            to="#"
                            id="btn-Delete"
                            className="btn btn-link text-danger btn-lg p-0"
                          >
                            <i className="ri-close-fill"/>
                          </Link>
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </div>
                </Card>
              );
            })}

            <div className="row mt-3">
              <div className="col">
                <h5 className="mb-2 fs-16">Comments</h5>

                {/* comments */}
                {task.comments.map((comment, idx) => (
                  <React.Fragment key={idx.toString()}>
                    <div className="d-flex mt-3 p-1">
                      <img
                        src={comment.author_avatar}
                        className="me-2 rounded-circle"
                        height="36"
                        alt={comment.author}
                      />
                      <div className="w-100">
                        <h5 className="mt-0 mb-0">
                          <span className="float-end text-muted font-12">
                            {comment.posted_on}
                          </span>
                          {comment.author}
                        </h5>
                        <p className="mt-1 mb-0 text-muted">{comment.text}</p>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* add comments */}
            <Row className="mt-2">
              <Col>
                <div className="border rounded">
                  <form action="#" className="comment-area-box">
                    <textarea
                      rows={3}
                      className="form-control border-0 resize-none"
                      placeholder="Your comment..."
                    />
                    <div className="p-2 bg-light">
                      <div className="float-end">
                        <button type="submit" className="btn btn-sm btn-success">
                          <i className="uil uil-message me-1"/>Submit
                        </button>
                      </div>
                      <div>
                        <Link to="#" className="btn btn-sm px-1 btn-light">
                          <i className="ri-upload-line"/>
                        </Link>
                        <Link to="#" className="btn btn-sm px-1 btn-light">
                          <i className="ri-at-line"/>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Task;

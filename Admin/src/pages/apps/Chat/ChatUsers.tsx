import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

// dummy data
import { ChatUser, users } from './data'

// images
import avatar1 from '../../../assets/images/users/avatar-1.jpg'

interface ChatUsersProps {
  onUserSelect: (value: ChatUser) => void;
}

const ChatUsers = ({ onUserSelect }: ChatUsersProps) => {
  const [user, setUser] = useState<ChatUser[]>([...users]);

  /**
 * Search the user
 * @param {*} text
 */
  const search = (text: string) => {
    setUser(
      text
        ? [...users].filter(
          (u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0
        )
        : [...users]
    );
  };

  /**
   * Activates the user
   * @param {*} user
   */
  const activateUser = (user: ChatUser) => {
    if (onUserSelect) {
      onUserSelect(user);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-start mb-3">
            <img src={avatar1} className="me-2 rounded-circle" height="42" alt="Brandon Smith" />
            <div className="w-100">
              <h5 className="mb-0">
                <Link to="#" className="text-reset lh-base">Tosha Minner</Link>
              </h5>
              <p className="mb-0 text-muted">
                <small className="ri-checkbox-blank-circle-fill text-success"></small> Online
              </p>
            </div>
            <Link to="#" className="text-reset fs-20">
              <i className="ri-settings-5-line"/>
            </Link>
          </div>
          <div className="app-search">
            <form>
              <div className="mb-2 w-100 position-relative">
                <input
                  type="search"
                  className="form-control"
                  placeholder="People, groups &amp; messages..."
                  onKeyUp={(e: any) => search(e.target.value)}
                />
                <span className="ri-search-line search-icon"></span>
              </div>
            </form>
          </div>
          <h6 className="fs-13 text-muted text-uppercase mt-2">Group Chats</h6>
          <div className="py-2">
            <Link to="#" className="text-reset mb-2 d-block">
              <i className="ri-checkbox-blank-circle-line me-1 text-success"/>
              <span className="mb-0 mt-1">App Development</span>
            </Link>
            <Link to="#" className="text-reset mb-2 d-block">
              <i className="ri-checkbox-blank-circle-line me-1 text-warning"/>
              <span className="mb-0 mt-1">Office Work</span>
            </Link>
          </div>
          <h6 className="fs-13 text-muted text-uppercase mb-2">Contacts</h6>
        </Card.Body>


        <Card.Body className="p-0">
          <Row>
            <Col>
              <SimpleBar style={{ maxHeight: 380 }}>
                {(user || []).map((user, idx) => {
                  return (
                    <Link
                      to="#"
                      key={idx}
                      className="text-body"
                      onClick={(e: any) => {
                        activateUser(user);
                      }}
                    >
                      <div className="d-flex align-items-start py-2 px-3">
                        <img src={user.avatar} className="me-2 rounded-circle" height="42" alt={user.name} />
                        <div className="w-100">
                          <h5 className="my-0">
                            <span className="float-end text-muted fw-normal fs-12">
                              {user.lastMessageOn}
                            </span>
                            {user.name}
                          </h5>
                          <p className="mt-1 mb-0 text-muted">
                            <span className="w-25 float-end text-end">
                              {user.totalUnread !== 0 && (
                                <span className="badge bg-danger-subtle text-danger">
                                  {user.totalUnread}
                                </span>
                              )}
                            </span>
                            <span className="w-75">
                              {user.lastMessage}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </SimpleBar>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default ChatUsers
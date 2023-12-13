import React, { useState } from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

// types
import { NotificationItem } from '../layouts/Topbar';

interface NotificationDropDownProps {
  notifications: Array<NotificationItem>;
}

const NotificationDropdown = ({ notifications }: NotificationDropDownProps) => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  /** 
   * Get time since
   */
  function timeSince(date: Date) {
    if (typeof date !== 'object') {
      date = new Date(date);
    }

    var seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
    var intervalType: string;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = 'year';
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'day';
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }
    if (interval > 1 || interval === 0) {
      intervalType += 's';
    }
    return interval + ' ' + intervalType + ' ago';
  };

  /**
   * Toggles the notification dropdown
   */
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  }


  let previousDate: null | number | Date = null;
  let currentDate: null | number | Date = null;

  return (
    <>
      <Dropdown show={dropDownOpen} onToggle={toggleDropDown}>
        <Dropdown.Toggle
          as="a"
          className='nav-link dropdown-toggle arrow-none'
          role='button'
          onClick={toggleDropDown}
        >
          <i className='ri-notification-3-line fs-22'/>
          <span className='noti-icon-badge'></span>
        </Dropdown.Toggle>

        <Dropdown.Menu align='end' className='dropdown-menu-animated dropdown-lg py-0'>
          <div
            className='p-2 border-top-0 border-start-0 border-end-0 border-dashed border'
            onClick={toggleDropDown}
          >
            <Row className='align-items-center'>
              <div className='col'>
                <h6 className='m-0 fs-16 fw-semibold'> Notification</h6>
              </div>
              <div className='col-auto'>
                <Link
                  to='#'
                  className='text-dark text-decoration-underline'
                >
                  <small>Clear All</small>
                </Link>
              </div>
            </Row>
          </div>

          <SimpleBar className='px-1' style={{ maxHeight: 300 }}>
            {notifications.map((notification, idx) => {
              const todayDate = new Date().getDate();
              currentDate = notification.createdAt.getDate();
              let labelName: string = '';
              if (previousDate !== currentDate) {
                previousDate = currentDate;
                if (todayDate === currentDate) {
                  labelName = 'Today';
                } else if ((todayDate - currentDate) === 1) {
                  labelName = 'Yesterday';
                } else {
                  labelName = `${new Date().toLocaleDateString()}`
                }
                return (
                  <React.Fragment key={idx}>
                    <h5 className='text-muted fs-12 fw-bold p-2 text-uppercase mb-0'>
                      {labelName}
                    </h5>
                    <Link
                      to='#'
                      className='dropdown-item p-0 notify-item unread-noti card m-0 shadow-none'
                      key={idx}
                    >
                      <div className='card-body'>
                        <div className='d-flex align-items-center'>
                          <div className='flex-shrink-0'>
                            {notification.avatar ?
                              (
                                <div className='notify-icon'>
                                  <img src={notification.avatar} className="img-fluid rounded-circle" alt="profile-icon" />
                                </div>
                              )
                              :
                              (
                                <div className={`notify-icon bg-${notification.bgColor}`}>
                                  <i className='ri-message-3-line fs-18'/>
                                </div>
                              )
                            }
                          </div>
                          <div className='flex-grow-1 text-truncate ms-2'>
                            <h5 className='noti-item-title fw-semibold fs-14'>
                              {notification.text}
                              <small className='fw-normal text-muted float-end ms-1'>
                                {timeSince(notification.createdAt)}
                              </small>
                            </h5>
                            <small className='noti-item-subtitle text-muted'>
                              {notification.subText}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                )
              } else {
                return (
                  <Link
                    to='#'
                    className='dropdown-item p-0 notify-item unread-noti card m-0 shadow-none'
                    key={idx}
                  >
                    <div className='card-body'>
                      <div className='d-flex align-items-center'>
                        <div className='flex-shrink-0'>
                          {notification.avatar ?
                            (
                              <div className='notify-icon'>
                                <img src={notification.avatar} className="img-fluid rounded-circle" alt="profile-icon" />
                              </div>
                            )
                            :
                            (
                              <div className={`notify-icon bg-${notification.bgColor}`}>
                                <i className='ri-message-3-line fs-18'/>
                              </div>
                            )
                          }
                        </div>
                        <div className='flex-grow-1 text-truncate ms-2'>
                          <h5 className='noti-item-title fw-semibold fs-14'>
                            {notification.text}
                            <small className='fw-normal text-muted float-end ms-1'>
                              {timeSince(notification.createdAt)}
                            </small>
                          </h5>
                          <small className='noti-item-subtitle text-muted'>
                            {notification.subText}
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
            })}

          </SimpleBar>


          <Link
            to='#'
            className='dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2'
          >
            View All
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default NotificationDropdown
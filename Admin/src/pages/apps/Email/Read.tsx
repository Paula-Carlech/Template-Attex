import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Card, Col, Dropdown, Row } from 'react-bootstrap'

// components
import PageTitle from '../../../components/PageTitle'
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import ComposeEmail from './ComposeEmail'
import LeftSide from './LeftSide'

// hooks
import { useToggle } from '../../../hooks'

// dummy data & types
import { emails } from './data';
import { EmailDetails } from './types'

// images
import img4 from '../../../assets/images/small/small-4.jpg'
import avatarImg from '../../../assets/images/users/avatar-1.jpg'

const EmailRead = () => {
  const [totalUnreadEmails] = useState<number>(emails.filter((e) => e.is_read === false).length);
  const [attachments] = useState<EmailDetails>({
    avatar: avatarImg,
    subject: 'Your elite author Graphic Optimization reward is ready!',
    from_name: 'Steven Smith',
    from_email: 'jonathan@domain.com',
    recieved_on: 'Jul 24, 2019, 5:17 AM',
    attachments: [
      { id: 1, name: 'Attex-admin-design.zip', size: '2.3 MB', ext: '.zip' },
      { id: 2, name: 'Dashboard-design.jpg', size: '0.3 MB', ext: '.jpg', img: img4 },
      { id: 3, name: 'Admin-bug-report.mp4', size: '4.1 MB', ext: '.mp4' },
    ],
  })

  /**
   *  handle compose modal
   */
  const [isModalOpen, toggleComposeModal] = useToggle();

  return (
    <>
      <PageTitle pageTitle='Email Read' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apps', path: '/apps/email/read' },
          { label: "Email Read", path: "/apps/email/read", active: true },
        ]}
        title={"Email Read"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="page-aside-left">
                <LeftSide
                  totalUnreadEmails={totalUnreadEmails}
                  toggleComposeModal={toggleComposeModal}
                />
              </div>

              <div className="page-aside-right">
                <div className="d-flex flex-wrap gap-1">
                  <ButtonGroup>
                    <Button variant='secondary'><i className="ri-inbox-archive-line fs-16" /></Button>
                    <Button variant='secondary'><i className="ri-spam-2-line fs-16" /></Button>
                    <Button variant='secondary'><i className="ri-delete-bin-line fs-16" /></Button>
                  </ButtonGroup>

                  <ButtonGroup as={Dropdown}>
                    <Dropdown.Toggle variant='secondary' className="arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="ri-folder-2-line fs-16" />&nbsp;
                      <i className="ri-arrow-down-s-line" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Move to:</Dropdown.Header>
                      <Dropdown.Item as="a" href="#">Social</Dropdown.Item>
                      <Dropdown.Item as="a" href="#">Promotions</Dropdown.Item>
                      <Dropdown.Item as="a" href="#">Updates</Dropdown.Item>
                      <Dropdown.Item as="a" href="#">Forums</Dropdown.Item>
                    </Dropdown.Menu>
                  </ButtonGroup>
                  <ButtonGroup as={Dropdown}>
                    <Dropdown.Toggle variant='secondary' className="arrow-none">
                      <i className="ri-price-tag-3-line fs-16" />&nbsp;
                      <i className="ri-arrow-down-s-line" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Label as:</Dropdown.Header>
                      <Dropdown.Item href="#">Updates</Dropdown.Item>
                      <Dropdown.Item href="#">Social</Dropdown.Item>
                      <Dropdown.Item href="#">Promotions</Dropdown.Item>
                      <Dropdown.Item href="#">Forums</Dropdown.Item>
                    </Dropdown.Menu>
                  </ButtonGroup>

                  <ButtonGroup as={Dropdown}>
                    <Dropdown.Toggle variant='secondary' className="arrow-none">
                      <i className="ri-more-line fs-16" /> More&nbsp;
                      <i className="ri-arrow-down-s-line" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>More Options :</Dropdown.Header>
                      <Dropdown.Item href="#">Mark as Unread</Dropdown.Item>
                      <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
                      <Dropdown.Item href="#">Add Star</Dropdown.Item>
                      <Dropdown.Item href="#">Mute</Dropdown.Item>
                    </Dropdown.Menu>
                  </ButtonGroup>
                </div>
                <div className="mt-3">
                  <h5 className="fs-18">Your elite author Graphic Optimization reward is ready!</h5>
                  <hr />

                  <div className="d-flex mb-3 mt-1">
                    <img className="d-flex me-2 rounded-circle" src={attachments.avatar} alt={attachments.from_name} height="32" />
                    <div className="w-100 overflow-hidden">
                      <small className="float-end">{attachments.recieved_on}</small>
                      <h6 className="m-0 fs-14">{attachments.from_name}</h6>
                      <small className="text-muted">From: {attachments.from_email}</small>
                    </div>
                  </div>

                  <p>Hi Coderthemes!</p>
                  <p>Clicking &apos;Order Service&apos; on the right-hand side of the above page will present you with an order page. This service has the following Briefing Guidelines that will need to be filled before placing your order:</p>
                  <ol>
                    <li>Your design preferences (Color, style, shapes, Fonts, others) </li>
                    <li>Tell me, why is your item different? </li>
                    <li>Do you want to bring up a specific feature of your item? If yes, please tell me </li>
                    <li>Do you have any preference or specific thing you would like to change or improve on your item page? </li>
                    <li>Do you want to include your item's or your provider's logo on the page? if yes, please send it to me in vector format (Ai or EPS) </li>
                    <li>Please provide me with the copy or text to display</li>
                  </ol>

                  <p>Filling in this form with the above information will ensure that they will be able to start work quickly.</p>
                  <p>You can complete your order by putting your coupon code into the Promotional code box and clicking ‘Apply Coupon’.</p>
                  <p><b>Best,</b> <br /> Graphic Studio</p>
                  <hr />

                  <h5 className="mb-3">Attachments</h5>

                  <Row>
                    {(attachments.attachments || []).map((item, idx) => {
                      return item.img ? (
                        <Col xl={4} key={idx}>
                          <Card className="mb-1 shadow-none border">
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col xs="auto">
                                  <img src={item.img} className="avatar-sm rounded" alt="file-icon" />
                                </Col>
                                <Col className="ps-0">
                                  <Link to="#;" className="text-muted fw-bold">{item.name}</Link>
                                  <p className="mb-0">{item.size}</p>
                                </Col>
                                <div className="col-auto">
                                  <Link to="#" className="btn btn-link btn-lg text-muted">
                                    <i className="ri-download-2-line" />
                                  </Link>
                                </div>
                              </Row>
                            </div>
                          </Card>
                        </Col>
                      ) : (
                        <Col xl={4} key={idx}>
                          <Card className="mb-1 shadow-none border">
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col xs='auto'>
                                  <div className="avatar-sm">
                                    <span className="avatar-title bg-primary-subtle text-primary rounded">
                                      {item.ext.toUpperCase()}
                                    </span>
                                  </div>
                                </Col>
                                <Col className="ps-0">
                                  <Link to="#" className="text-muted fw-bold">{item.name}</Link>
                                  <p className="mb-0">{item.size}</p>
                                </Col>
                                <div className="col-auto">
                                  <Link to="#" className="btn btn-link btn-lg text-muted">
                                    <i className="ri-download-2-line" />
                                  </Link>
                                </div>
                              </Row>
                            </div>
                          </Card>
                        </Col>
                      )
                    })}
                  </Row>

                  <div className="mt-5">
                    <Button variant='secondary' className="me-2"><i className="ri-reply-line me-1" /> Reply</Button>
                    <Button variant='light'>Forward <i className="ri-share-forward-2-fill ms-1" /></Button>
                  </div>
                </div>
              </div>
            </Card.Body>
            <div className="clearfix"></div>
          </Card>
        </Col>
      </Row>
      <ComposeEmail isModalOpen={isModalOpen} toggleComposeModal={toggleComposeModal} />
    </>
  )
}

export default EmailRead

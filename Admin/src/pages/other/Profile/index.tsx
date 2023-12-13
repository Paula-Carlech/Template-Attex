import { useEffect } from 'react'
import { Button, Card, Col, Dropdown, Image, Row, Tabs, Tab, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Chart, { type ChartItem } from 'chart.js/auto';

//images
import avatar1 from '../../../assets/images/users/avatar-1.jpg'
import avatar3 from '../../../assets/images/users/avatar-3.jpg'
import avatar4 from '../../../assets/images/users/avatar-4.jpg'
import avatar6 from '../../../assets/images/users/avatar-6.jpg'
import small1 from '../../../assets/images/small/small-1.jpg'
import small2 from '../../../assets/images/small/small-2.jpg'
import small3 from '../../../assets/images/small/small-3.jpg'

// component
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import PageTitle from '../../../components/PageTitle'

import { experienceData, messages, productConfig, projectTableData } from './data'

const ProfilePages = () => {

  useEffect(() => {
    const productTag = document.getElementById('high-performing-product') as ChartItem;
    const chart = new Chart(productTag, productConfig)

    return () => {
      chart.destroy()
    }
  }, [])

  return (
    <>
      <PageTitle pageTitle='Profile' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Pages', path: '/pages/profile' },
          { label: "Profile", path: "/pages/profile", active: true },
        ]}
        title={"Profile"}
      />
      <Row>
        <Col xl={4} lg={5}>
          <Card className="text-center">
            <Card.Body>
              <Image src={avatar1} className="rounded-circle avatar-lg img-thumbnail" alt="profile-avatar" />

              <h4 className="mb-1 mt-2">Tosha Minner</h4>
              <p className="text-muted">Founder</p>
              <div className="d-flex flex-wrap gap-1 justify-content-center">
                <Button type="button" size='sm' variant='success' className="mb-2">Follow</Button>
                <Button type="button" size='sm' variant='danger' className="mb-2">Message</Button>
              </div>
              <div className="text-start mt-3">
                <h4 className="fs-13 text-uppercase">About Me :</h4>
                <p className="text-muted mb-3">
                  Hi I'm Tosha Minner,has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type.
                </p>
                <p className="text-muted mb-2"><strong>Full Name :</strong> <span className="ms-2">Tosha K. Minner</span></p>
                <p className="text-muted mb-2"><strong>Mobile :</strong><span className="ms-2">(123)
                  123 1234</span></p>
                <p className="text-muted mb-2"><strong>Email :</strong> <span className="ms-2 ">user@email.domain</span></p>
                <p className="text-muted mb-1"><strong>Location :</strong> <span className="ms-2">USA</span></p>
              </div>

              <ul className="social-list list-inline mt-3 mb-0">
                <li className="list-inline-item">
                  <Link to="#" className="social-list-item border-primary text-primary"><i className="ri-facebook-circle-fill" /></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-list-item border-danger text-danger"><i className="ri-google-fill" /></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-list-item border-info text-info"><i className="ri-twitter-fill" /></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-list-item border-secondary text-secondary"><i className="ri-github-fill" /></Link>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h4 className="header-title">Messages</h4>
                <Dropdown>
                  <Dropdown.Toggle as='a' className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ri-more-2-fill" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu align='start'>
                    <Dropdown.Item as='a'>Settings</Dropdown.Item>
                    <Dropdown.Item as='a'>Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="inbox-widget">
                {(messages || []).map(item => (
                  <div className="inbox-item" key={item.id}>
                    <div className="inbox-item-img"><Image src={item.img} className="rounded-circle" alt="" /></div>
                    <p className="inbox-item-author">{item.sender}</p>
                    <p className="inbox-item-text">{item.message}</p>
                    <p className="inbox-item-date">
                      <Link to="#" className="btn btn-sm btn-link text-info fs-13"> Reply </Link>
                    </p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

        </Col>

        <Col xl={8} lg={7}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Orders & Revenue</h4>
              <div >
                <div style={{ height: 260 }} className="chartjs-chart">
                  <canvas id="high-performing-product"></canvas>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Tabs
                defaultActiveKey="about"
                className="mb-3"
                fill
                variant="pills"
              >
                <Tab eventKey="about" title="About">
                  <h5 className="text-uppercase mb-3"><i className="ri-briefcase-line me-1" />
                    &nbsp;Projects</h5>
                  <div className="table-responsive">
                    <table className="table table-sm table-centered table-hover table-borderless mb-0">
                      <thead className="border-top border-bottom bg-light-subtle border-light">
                        <tr>
                          <th>#</th>
                          <th>Clients</th>
                          <th>Project Name</th>
                          <th>Start Date</th>
                          <th>Due Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(projectTableData || []).map(item => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Image src={item.img} alt="table-user" className="me-2 rounded-circle" height={24} /> {item.name}</td>
                            <td>{item.project}</td>
                            <td>{item.start_date}</td>
                            <td>{item.end_date}</td>
                            <td><span className={`badge bg-${item.status}-subtle text-${item.status}`}>{item.status_message}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h5 className="text-uppercase mt-4"><i className="ri-macbook-line me-1" />
                    Experience</h5>

                  <div className="timeline-alt pb-0">
                    {(experienceData || []).map(item => (
                      <div className="timeline-item" key={item.id}>
                        <i className={`ri-record-circle-line text-bg-${item.variant} timeline-icon`} />
                        <div className="timeline-item-info">
                          <h5 className="mt-0 mb-1">{item.title}</h5>
                          <p className="fs-14">{item.companyName} <span className="ms-2 fs-12">Year: {item.year}</span></p>
                          <p className="text-muted mt-2 mb-0 pb-3">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="timeline" title="Timeline">
                  <div className="border rounded mt-2 mb-3">
                    <Form action="#" className="comment-area-box">
                      <Form.Control as="textarea" rows={3} className="border-0 resize-none" placeholder="Write something...."></Form.Control>
                      <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                        <div>
                          <Link to="#" className="btn btn-sm px-2 fs-16 btn-light"><i className="ri-contacts-book-2-line" /></Link>
                          <Link to="#" className="btn btn-sm px-2 fs-16 btn-light"><i className="ri-map-pin-line" /></Link>
                          <Link to="#" className="btn btn-sm px-2 fs-16 btn-light"><i className="ri-camera-3-line" /></Link>
                          <Link to="#" className="btn btn-sm px-2 fs-16 btn-light"><i className="ri-emoji-sticker-line" /></Link>
                        </div>
                        <Button variant='dark' size='sm' type="submit">Post</Button>
                      </div>
                    </Form>
                  </div>
                  <div className="border border-light rounded p-2 mb-3">
                    <div className="d-flex">
                      <Image className="me-2 rounded-circle" src={avatar4} alt="Generic placeholder image" height={32} />
                      <div>
                        <h5 className="m-0">Thelma Fridley</h5>
                        <p className="text-muted"><small>about 1 hour ago</small></p>
                      </div>
                    </div>
                    <div className="fs-16 text-center fst-italic text-dark">
                      <i className="ri-double-quotes-l fs-20" /> Cras sit amet nibh libero, in
                      gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus odio, vestibulum in vulputate at, tempus viverra turpis. Duis
                      sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                      porta. Mauris massa.
                    </div>
                    <div className="mx-n2 p-2 mt-3 bg-light">
                      <div className="d-flex">
                        <Image className="me-2 rounded-circle" src={avatar3} alt="Generic placeholder image" height={32} />
                        <div>
                          <h5 className="mt-0">Jeremy Tomlinson <small className="text-muted">about 2 minuts ago</small></h5>
                          Nice work, makes me think of The Money Pit.
                          <br />
                          <Link to="#" className="text-muted fs-13 d-inline-block mt-2"><i
                            className="ri-reply-line" /> Reply</Link>
                          <div className="d-flex mt-3">
                            <Link className="pe-2" to="#">
                              <Image src={avatar4} className="rounded-circle" alt="Generic placeholder image" height={32} />
                            </Link>
                            <div>
                              <h5 className="mt-0">Thelma Fridley <small className="text-muted">5 hours ago</small></h5>
                              i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mt-2">
                        <Link className="pe-2" to="#">
                          <Image src={avatar1} className="rounded-circle" alt="Generic placeholder image" height={32} />
                        </Link>
                        <div className="w-100">
                          <Form.Control type="text" id="simpleinput" className="border-0 form-control-sm" placeholder="Add comment" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-link text-danger"><i
                        className="ri-heart-line" /> Like (28)</Link>
                      <Link to="#" className="btn btn-sm btn-link text-muted"><i
                        className="ri-share-line" /> Share</Link>
                    </div>
                  </div>
                  <div className="border border-light rounded p-2 mb-3">
                    <div className="d-flex">
                      <Image className="me-2 rounded-circle" src={avatar3} alt="Generic placeholder image" height={32} />
                      <div>
                        <h5 className="m-0">Jeremy Tomlinson</h5>
                        <p className="text-muted"><small>3 hours ago</small></p>
                      </div>
                    </div>
                    <p>Story based around the idea of time lapse, animation to post soon!</p>
                    <Image src={small1} alt="post-img" className="rounded me-1"
                      height="60" />
                    <Image src={small2} alt="post-img" className="rounded me-1"
                      height="60" />
                    <Image src={small3} alt="post-img" className="rounded"
                      height="60" />
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-link text-muted"><i
                        className="ri-reply-line" /> Reply</Link>
                      <Link to="#" className="btn btn-sm btn-link text-muted"><i
                        className="ri-heart-line" /> Like</Link>
                      <Link to="#" className="btn btn-sm btn-link text-muted"><i
                        className="ri-share-line" /> Share</Link>
                    </div>
                  </div>
                  <div className="border border-light p-2 mb-3">
                    <div className="d-flex">
                      <Image className="me-2 rounded-circle" src={avatar6} alt="Generic placeholder image" height={32} />
                      <div>
                        <h5 className="m-0">Martin Williamson</h5>
                        <p className="text-muted"><small>15 hours ago</small></p>
                      </div>
                    </div>
                    <p>The parallax is a little odd but O.o that house build is awesome!!</p>
                    <iframe src='https://player.vimeo.com/video/87993762' height='300' title='vimeo1' className="img-fluid border-0"></iframe>
                  </div>
                  <div className="text-center">
                    <Link to="#" className="text-danger"><i className="ri-loader-fill me-1" /> Load more </Link>
                  </div>
                </Tab>
                <Tab eventKey="settings" title="Settings" >
                  <Form>
                    <h5 className="mb-4 text-uppercase"><i className="ri-contacts-book-2-line me-1" /> Personal Info</h5>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" id="firstname" placeholder="Enter first name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" id="lastname" placeholder="Enter last name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Bio</Form.Label>
                          <Form.Control as="textarea" id="userbio" rows={4} placeholder="Write something..."></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" id="useremail" placeholder="Enter email" />
                          <span className="form-text text-muted"><small>If you want to change email please <Link to="#">click</Link> here.</small></span>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" id="userpassword" placeholder="Enter password" />
                          <span className="form-text text-muted"><small>If you want to change password please <Link to="#">click</Link> here.</small></span>
                        </Form.Group>
                      </Col>
                    </Row>
                    <h5 className="mb-3 text-uppercase bg-light p-2"><i className="ri-building-line me-1" /> Company Info</h5>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control type="text" id="companyname" placeholder="Enter company name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Website</Form.Label>
                          <Form.Control type="text" id="cwebsite" placeholder="Enter website url" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <h5 className="mb-3 text-uppercase bg-light p-2"><i className="ri-global-line me-1" /> Social</h5>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Facebook</Form.Label>
                          <InputGroup>
                            <InputGroup.Text><i className="ri-facebook-fill" /></InputGroup.Text>
                            <Form.Control type="text" id="social-fb" placeholder="Url" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Twitter</Form.Label>
                          <InputGroup>
                            <InputGroup.Text><i className="ri-twitter-line" /></InputGroup.Text>
                            <Form.Control type="text" id="social-tw" placeholder="Username" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Instagram</Form.Label>
                          <InputGroup>
                            <InputGroup.Text><i className="ri-instagram-line" /></InputGroup.Text>
                            <Form.Control type="text" id="social-insta" placeholder="Url" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Linkedin</Form.Label>
                          <InputGroup>
                            <InputGroup.Text><i className="ri-linkedin-fill" /></InputGroup.Text>
                            <Form.Control type="text" id="social-lin" placeholder="Url" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Skype</Form.Label>
                          <InputGroup>
                            <InputGroup.Text><i className="ri-skype-line" /></InputGroup.Text>
                            <Form.Control type="text" id="social-sky" placeholder="@username" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Github</Form.Label>
                          <InputGroup>
                            <InputGroup.Text><i className="ri-github-line" /></InputGroup.Text>
                            <Form.Control type="text" id="social-gh" placeholder="Username" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-end">
                      <Button variant='success' type="submit" className="mt-2"><i className="ri-save-line" /> Save</Button>
                    </div>
                  </Form>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row >
    </>
  )
}

export default ProfilePages
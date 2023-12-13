import { Col, Row, Image, Button } from "react-bootstrap";

// images
import avatar3 from '../../assets/images/users/avatar-3.jpg'

import smallImg1 from '../../assets/images/small/small-1.jpg'
import smallImg2 from '../../assets/images/small/small-2.jpg'
import smallImg3 from '../../assets/images/small/small-3.jpg'

// component
import PageBreadcrumb from '../../components/PageBreadcrumb'
import PageTitle from '../../components/PageTitle'
import { Link } from "react-router-dom";

const TimelinePages = () => {
  return (
    <>
      <PageTitle pageTitle='Timeline' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Pages', path: '/pages/timeline' },
          { label: "Timeline", path: "/pages/timeline", active: true },
        ]}
        title={"Timeline"}
      />

      <Row>
        <Col>
          <div className="timeline" >
            <div className="timeline-show mb-3 text-center">
              <h5 className="m-0 time-show-name">Today</h5>
            </div>
            <div className="timeline-lg-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt"></span>
                  <span className="timeline-icon bg-danger-subtle"><i className="ri-record-circle-fill text-danger"/></span>
                  <h4 className="mt-0 mb-1 fs-16">Completed UX design project for our client</h4>
                  <p className="text-muted"><small>22 July, 2019</small></p>
                  <p>Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? </p>
                  <div className="d-flex flex-wrap gap-1 justify-content-end">
                    <Button variant='light' size='sm' className="btn btn-sm btn-light">👍 17</Button>
                    <Button variant='light' size='sm'>❤️ 89</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-lg-item timeline-item-right">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow"></span>
                  <span className="timeline-icon bg-info-subtle"><i className="ri-record-circle-fill text-info"/></span>
                  <h4 className="mt-0 mb-1 fs-16">Yay! We are celebrating our first admin release.</h4>
                  <p className="text-muted"><small>22 July, 2019</small></p>
                  <p>Consectetur adipisicing elit. Iusto, optio, dolorum <Link to="#">John deon</Link> provident rerum aut hic quasi placeat iure tempora laudantium </p>
                  <Button size="sm" variant="light">🎉 148</Button>
                </div>
              </div>
            </div>

            <div className="timeline-show my-3 text-center">
              <h5 className="m-0 time-show-name">Yesterday</h5>
            </div>
            <div className="timeline-lg-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt"></span>
                  <span className="timeline-icon bg-warning-subtle"><i className="ri-record-circle-fill text-warning"/></span>
                  <h4 className="mt-0 mb-1 fs-16">We released new version of our theme Ubold.</h4>
                  <p className="text-muted"><small>21 July, 2019</small></p>
                  <p>3 new photo Uploaded on facebook fan page</p>

                  <div className="timeline-album mb-3">
                    <Link to="#">
                      <Image alt="" src={smallImg1} />
                    </Link>
                    <Link to="#">
                      <Image alt="" src={smallImg2} />
                    </Link>
                    <Link to="#">
                      <Image alt="" src={smallImg3} />
                    </Link>
                  </div>
                  <Button size="sm" variant="light">🏆 94</Button>
                </div>
              </div>
            </div>

            <div className="timeline-lg-item timeline-item-right">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow"></span>
                  <span className="timeline-icon bg-success-subtle"><i className="ri-record-circle-fill text-success"/></span>
                  <h4 className="mt-0 mb-1 fs-16">We have archieved 25k sales in our themes.</h4>
                  <p className="text-muted"><small>21 July, 2019</small></p>
                  <p>Outdoor visit at California State Route 85 with John Boltana &
                    Harry Piterson regarding to setup a new show room.</p>
                  <div className="d-flex flex-wrap gap-1 justify-content-start">
                    <Button size="sm" variant="light">👍 1.4k</Button>
                    <Button size="sm" variant="light">🎉 2k</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-lg-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt"></span>
                  <span className="timeline-icon bg-primary-subtle"><i className="ri-record-circle-fill text-primary"/></span>
                  <h4 className="mt-0 mb-1 fs-16">Conference call with UX team</h4>
                  <p className="text-muted"><small>21 July, 2019</small></p>
                  <p>Jonatha Smith added new milestone <span><Link to="#">Pathek&nbsp;</Link></span>
                    Lorem ipsum dolor sit amet consiquest dio</p>
                  <Button size="sm" variant="light">❤️ 89</Button>
                </div>
              </div>
            </div>

            <div className="timeline-show my-3 text-center">
              <h5 className="m-0 time-show-name">2018</h5>
            </div>

            <div className="timeline-lg-item timeline-item-right">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow"></span>
                  <span className="timeline-icon bg-danger-subtle"><i className="ri-record-circle-fill text-danger"/></span>
                  <h4 className="mt-0 mb-1 fs-16">Join new team member Alex Smith</h4>
                  <p className="text-muted"><small>10 December, 2018</small></p>
                  <p>Alex Smith is a Senior Software (Full Stack) engineer with a deep passion for building usable, functional & pretty web applications. </p>
                  <div className="d-flex">
                    <Image src={avatar3} alt="Arya S" className="rounded-circle me-2" height="24" />
                    <div>
                      <h5 className="mt-1 fs-14 mb-0">
                        Alex Smith <small>- Senior Software (Full Stack)</small>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-lg-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt"></span>
                  <span className="timeline-icon bg-info-subtle"><i className="ri-record-circle-fill text-info"/></span>
                  <h4 className="mt-0 mb-1 fs-16">First release of Attex admin dashboard template</h4>
                  <p className="text-muted"><small>05 May, 2023</small></p>
                  <p>Outdoor visit at California State Route 85 with John Boltana &
                    Harry Piterson regarding to setup a new show room.</p>
                  <div className="d-flex flex-wrap gap-1 justify-content-end">
                    <Button size="sm" variant="light">🎉 10k</Button>
                    <Button size="sm" variant="light">👍 3.2k</Button>
                    <Button size="sm" variant="light">❤️ 7.1k</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default TimelinePages
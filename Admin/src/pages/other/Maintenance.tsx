import { useEffect } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'

//components
import Background from '../../components/Background'

// import  MaintenanceBgImg from '../../assets/images/svg/maintenancebg.svg'
import MaintenanceImg from '../../assets/images/svg/maintenance.svg'
import PageTitle from '../../components/PageTitle'

const Maintenance = () => {

  const year = new Date().getFullYear()

  useEffect(() => {
    if (document.body) {
      document.body.classList.add('authentication-bg', 'position-relative')
    }
    return () => {
      if (document.body) {
        document.body.classList.remove('authentication-bg', 'position-relative')
      }
    }
  },[])

  return (
    <>
      <PageTitle pageTitle='Maintenance' />
      <Background />
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
        <Container>
          <Row className="justify-content-center">
            <Col xxl={10}>
              <Card>
                <Card.Body className="p-4">
                  <div className="text-center">
                    <img src={MaintenanceImg} height="150" alt="File not found" />
                    <h3 className="mt-4">Site is Under Maintenance</h3>
                    <p className="text-muted">We're making the system more awesome. We'll be back shortly.</p>

                    <Row className="mt-5">
                      <Col md={4}>
                        <div className="text-center mt-3 ps-1 pe-1">
                          <i className="ri-vip-diamond-line bg-primary maintenance-icon text-white mb-4"/>
                          <h5 className="text-uppercase">Why is the Site Down?</h5>
                          <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-center mt-3 ps-1 pe-1">
                          <i className="ri-time-line bg-primary maintenance-icon text-white mb-4"/>
                          <h5 className="text-uppercase">What is the Downtime?</h5>
                          <p className="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical but the majority.</p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-center mt-3 ps-1 pe-1">
                          <i className="ri-question-mark bg-primary maintenance-icon text-white mb-4"/>
                          <h5 className="text-uppercase">Do you need Support?</h5>
                          <p className="text-muted">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. <a href="mailto:#" className="text-muted fw-bold">no-reply@domain.com</a></p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      <footer className="footer footer-alt fw-medium">
        <span className="bg-body">{year} © Attex - Coderthemes.com</span>
      </footer>
    </>
  )
}

export default Maintenance
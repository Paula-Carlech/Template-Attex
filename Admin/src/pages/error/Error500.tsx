import React, { useEffect } from 'react'
import { Row, Col, Card, Container, Image } from 'react-bootstrap'

//logo
import logo from '../../assets/images/logo.png'

//svg
import starman from '../../assets/images/svg/startman.svg'
//component
import Background from '../../components/Background'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'

const Error500 = () => {

  const year = new Date().getFullYear()

  useEffect(() => {
    if (document.body) {
      document.body.classList.add("authentication-bg");
    }
    return () => {
      if (document.body) {
        document.body.classList.remove("authentication-bg");
      }
    }
  }, [])

  return (
    <>
      <PageTitle pageTitle='Error 500' />
      <Background />
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
        <Container>
          <Row className="justify-content-center">
            <Col xxl={4} lg={5}>
              <Card>
                <div className="card-header py-4 text-center bg-primary">
                  <Link to="/">
                    <span><Image src={logo} alt="logo" height="22" /></span>
                  </Link>
                </div>

                <Card.Body className="p-4">
                  <div className="text-center">
                    <Image src={starman} height="120" alt="File not found Image" />
                    <h1 className="text-error mt-4">500</h1>
                    <h4 className="text-uppercase text-danger mt-3">Internal Server Error</h4>
                    <p className="text-muted mt-3">Why not try refreshing your page? or you can contact <Link to="#" className="text-muted"><b>Support</b></Link></p>
                    <Link className="btn btn-info mt-3" to="/"><i className="ri-home-4-line me-1"/> Return Home</Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="footer footer-alt fw-medium">
        <span className="bg-body">{year} © Attex - <a href='https://coderthemes.com/' rel='noreferrer' target='_blank' className="bg-body"> Coderthemes.com
        </a></span>
      </footer>
    </>
  )
}

export default Error500
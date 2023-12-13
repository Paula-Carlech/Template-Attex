import { Row, Col, Card, Container, Image } from 'react-bootstrap'
import { useEffect } from 'react'

//logo
import logo from '../../assets/images/logo.png'

//component
import Background from '../../components/Background'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'

const Error404 = () => {

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
      <PageTitle pageTitle='Error 404' />
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
                    <h1 className="text-error">4<i className="ri-emotion-sad-line"/>4</h1>
                    <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                    <p className="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it
                      happens to the best of us. Here's a
                      little tip that might help you get back on track.</p>
                    <Link className="btn btn-info mt-3" to="/"><i className="ri-home-4-line"/> Back to Home</Link>
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

export default Error404
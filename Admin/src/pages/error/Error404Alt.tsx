// component
import { Link } from 'react-router-dom'
import PageBreadcrumb from '../../components/PageBreadcrumb'
import PageTitle from '../../components/PageTitle'
import { Col, Row } from 'react-bootstrap'

const Error404Alt = () => {
  return (
    <>
      <PageTitle pageTitle='Error 404' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Pages', path: '/pages/error/error-404-alt' },
          { label: "404 Error", path: "/pages/error/error-404-alt", active: true },
        ]}
        title={"404 Error"}
      />
      <Row className="justify-content-center">
        <Col lg={4}>
          <div className="text-center">
            <h1 className="text-error mt-4">404</h1>
            <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
            <p className="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it
              happens to the best of us. Here's a
              little tip that might help you get back on track.</p>
            <Link className="btn btn-info mt-3" to="/"><i className="ri-home-4-line me-1"/> Back to Home</Link>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Error404Alt
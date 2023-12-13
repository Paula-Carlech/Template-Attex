import { Row, Col, Card, Breadcrumb as BreadcrumbBootstrap } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// component
import PageBreadcrumb from '../../components/PageBreadcrumb';
import PageTitle from '../../components/PageTitle';

const Breadcrumb = () => {
  return (
    <>
      <PageTitle pageTitle='Breadcrumb' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Base UI', path: '/ui/breadcrumb' },
          { label: "Breadcrumb", path: "/ui/breadcrumb", active: true },
        ]}
        title={"Breadcrumb"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Example</h4>
              <p className="text-muted fs-14">
                Indicate the current page&apos;s location within a navigational hierarchy that automatically adds separators via CSS.
                Please read the official <Link target='_blank' to="https://getbootstrap.com/docs/5.3/components/breadcrumb/">Bootstrap</Link> documentation for more options.
              </p>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 py-2">
                  <BreadcrumbBootstrap.Item className="active">Home</BreadcrumbBootstrap.Item>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 py-2">
                  <BreadcrumbBootstrap.Item href='#'>Home</BreadcrumbBootstrap.Item>
                  <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 py-2">
                  <BreadcrumbBootstrap.Item href='#'>Home</BreadcrumbBootstrap.Item>
                  <BreadcrumbBootstrap.Item href='#'>Library</BreadcrumbBootstrap.Item>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">With Icons</h4>
              <p className="text-muted fs-14">
                Optionally you can also specify the icon with your breadcrumb item.
              </p>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-1 p-2 bg-light-subtle">
                  <li className="breadcrumb-item active" aria-current="page"><i className="ri-home-4-line me-1"/>Home</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-1 p-2 bg-light-subtle">
                  <BreadcrumbBootstrap.Item href='#'><i className="ri-home-4-line"/> Home</BreadcrumbBootstrap.Item>
                  <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 p-2 bg-light-subtle">
                  <BreadcrumbBootstrap.Item href='#'><i className="ri-home-4-line"/> Home</BreadcrumbBootstrap.Item>
                  <BreadcrumbBootstrap.Item href='#'>Library</BreadcrumbBootstrap.Item>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>
  )
}

export default Breadcrumb
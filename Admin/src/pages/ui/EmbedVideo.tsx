import { Card, Col, Row } from 'react-bootstrap';

// components
import PageBreadcrumb from '../../components/PageBreadcrumb';
import PageTitle from '../../components/PageTitle';

const EmbedVideo = () => {
  return (
    <>
    <PageTitle pageTitle='Embed Video' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Base UI', path: '/ui/embed-video' },
          { label: "Embed Video", path: "/ui/embed-video", active: true },
        ]}
        title={"Embed Video"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Responsive embed video 21:9</h4>
              <p className="text-muted fs-14">Use class <code>.ratio-21x9</code></p>
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0" title="iframe"
                />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h4 className="header-title">Responsive embed video 1:1</h4>
              <p className="text-muted fs-14">Use class <code>.ratio-1x1</code></p>
              <div className="ratio ratio-1x1">
                <iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1" title="iframe" />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Responsive embed video 16:9</h4>
              <p className="text-muted fs-14">Use class <code>.ratio-16x9</code></p>
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0" title="iframe" />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h4 className="header-title">Responsive embed video 4:3</h4>
              <p className="text-muted fs-14">Use class <code>.ratio-4x3</code></p>
              <div className="ratio ratio-4x3">
                <iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1" title="iframe" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default EmbedVideo
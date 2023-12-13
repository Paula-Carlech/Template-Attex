import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FileUploader } from '../../../../components/FileUploader';
import CardTitle from '../../../../components/CardTitle';

const Attachments = () => {
  return (
    <Card>
      <Card.Body>
        <CardTitle
          containerClass="d-flex align-items-center justify-content-between"
          title={
            <div className="float-start">
              <label className="form-check-label fs-16" htmlFor="completedCheck">
                Attachments
              </label>
            </div>
          }
          icon="ri-more-fill fs-18"
          menuItems={[
            { label: 'Attachment', icon: 'ri-attachment-line' },
            { label: 'Edit', icon: 'ri-edit-box-line' },
            { label: 'Mark as Duplicate', icon: 'ri-file-copy-2-line' },
            {
              label: 'Delete',
              icon: 'ri-delete-bin-line',
              variant: 'text-danger',
              hasDivider: true,
            },
          ]}
        />

        <FileUploader
          icon='fs-36 text-muted ri-upload-cloud-line'
          text='Drop files here or click to upload.'
        />

        {/* Files */}
        <Card className="my-2 shadow-none border">
          <div className="p-2">
            <Row className="align-items-center">
              <div className="col-auto">
                <div className="avatar-sm">
                  <span className="avatar-title text-primary bg-primary-subtle rounded">.ZIP</span>
                </div>
              </div>
              <Col className="ps-0">
                <Link to="#" className="text-muted fw-bold">
                  Attex-sketch-design.zip
                </Link>
                <p className="mb-0">2.3 MB</p>
              </Col>
              <div className="col-auto">
                <Link to="#" className="btn btn-link btn-lg text-muted">
                  <i className="ri-download-line" />
                </Link>
              </div>
            </Row>
          </div>
        </Card>

        <Card className="mb-1 shadow-none border">
          <div className="p-2">
            <Row className="align-items-center">
              <div className="col-auto">
                <div className="avatar-sm">
                  <span className="avatar-title bg-primary-subtle text-primary rounded">
                    .JPG
                  </span>
                </div>
              </div>
              <Col className="col ps-0">
                <Link to="#" className="text-muted fw-bold">
                  Dashboard-design.jpg
                </Link>
                <p className="mb-0">3.25 MB</p>
              </Col>
              <div className="col-auto">
                <Link to="#" className="btn btn-link btn-lg text-muted">
                  <i className="ri-download-line" />
                </Link>
              </div>
            </Row>
          </div>
        </Card>

        <Card className="mb-0 shadow-none border">
          <div className="p-2">
            <Row className="align-items-center">
              <div className="col-auto">
                <div className="avatar-sm">
                  <span className="avatar-title bg-secondary rounded">.MP4</span>
                </div>
              </div>
              <Col className="col ps-0">
                <Link to="#" className="text-muted fw-bold">
                  Admin-bug-report.mp4
                </Link>
                <p className="mb-0">7.05 MB</p>
              </Col>
              <div className="col-auto">
                <Link to="#" className="btn btn-link btn-lg text-muted">
                  <i className="ri-download-line" />
                </Link>
              </div>
            </Row>
          </div>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default Attachments;

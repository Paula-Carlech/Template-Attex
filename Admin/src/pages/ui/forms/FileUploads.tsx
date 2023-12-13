import { Card, Col, Row } from 'react-bootstrap'

// component
import PageTitle from '../../../components/PageTitle'
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import { FileUploader } from '../../../components/FileUploader'

const FileUploads = () => {
  return (
    <>
      <PageTitle pageTitle='File Uploads' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Forms', path: '/ui/forms/file-uploads' },
          { label: "File Uploads", path: "/ui/forms/file-uploads", active: true },
        ]}
        title={"File Uploads"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Dropzone File Upload</h4>
              <p className="text-muted fs-14">
                DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.
              </p>

              <FileUploader icon='ri-upload-cloud-2-line' text='Drop files here or click to upload.' extraText='(This is just a demo dropzone. Selected files are not actually uploaded.)'/>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default FileUploads
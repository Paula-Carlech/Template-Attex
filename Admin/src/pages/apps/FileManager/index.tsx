import { Button, Card, Col, Row, Form } from 'react-bootstrap'
import Recent from './Recent'
import QuickAccess from './QuickAccess'
import LeftPanel from './LeftPanel'

// components
import PageTitle from '../../../components/PageTitle'
import PageBreadcrumb from '../../../components/PageBreadcrumb'

// data
import { quickAccessFiles, recentFiles } from './data'

const FileManagerApp = () => {
  return (
    <>
      <PageTitle pageTitle='File Manager' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apps', path: '/apps/file-manager' },
          { label: "File Manager", path: "/apps/file-manager", active: true },
        ]}
        title={"File Manager"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="page-aside-left">
                <LeftPanel />
              </div>
              <div className="page-aside-right">
                <div className="d-lg-flex justify-content-between align-items-center">
                  <div className="app-search">
                    <Form>
                      <div className="mb-2 position-relative">
                        <Form.Control type="text" placeholder="Search files..." />
                        <span className="ri-search-line search-icon" />
                      </div>
                    </Form>
                  </div>
                  <div className='d-flex flex-wrap gap-1'>
                    <Button variant='light' size='sm' type="button"><i className="ri-list-check"/></Button>
                    <button className='btn btn-sm' type="button"><i className="ri-grid-fill"/></button>
                  </div>
                </div>

                <QuickAccess quickAccessFiles={quickAccessFiles} />

                <Recent recentFiles={recentFiles} />
              </div>
            </Card.Body>
            <div className="clearfix"></div>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default FileManagerApp
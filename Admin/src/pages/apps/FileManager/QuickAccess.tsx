import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface QuickAccessFileTypes {
  quickAccessFiles: {
    icon: string;
    name: string;
    size: string;
    variant?: string;
  }[]
}

const QuickAccess = ({ quickAccessFiles }: QuickAccessFileTypes) => {
  return (
    <>
      <div className="mt-3">
        <h5 className="mb-2">Quick Access</h5>
        <Row className="mx-n1 g-0">

          {(quickAccessFiles || []).map((file, idx) => {
            return (
              <Col xxl={3} lg={6} key={idx}>
                <Card className="m-1 shadow-none border">
                  <div className="p-2">
                    <Row className="align-items-center">
                      <div className='col-auto'>
                        <div className="avatar-sm">
                          <span className={`avatar-title bg-light text-${(file.variant ? file.variant : 'secondary')} rounded`}>
                            <i className={`${file.icon} fs-20 fw-normal`} />
                          </span>
                        </div>
                      </div>
                      <Col className="ps-0">
                        <Link to="#" className="text-muted fw-bold">{file.name}</Link>
                        <p className="mb-0 fs-13">{file.size}</p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}

export default QuickAccess
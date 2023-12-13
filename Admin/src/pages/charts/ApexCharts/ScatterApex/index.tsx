import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'

import { ScatterXYOpt, DatetimeOpt, ScatterWithImagesOpt } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const ScatterApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Scatter Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/scatter' },
          { label: "Scatter Charts", path: "/ui/apex/scatter", active: true },
        ]}
        title={"Scatter Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Scatter (XY) Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ScatterXYOpt}
                  height={380}
                  series={ScatterXYOpt.series}
                  type='scatter'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Scatter Chart - Datetime</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={DatetimeOpt}
                  height={380}
                  series={DatetimeOpt.series}
                  type='scatter'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Scatter - Images</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ScatterWithImagesOpt}
                  height={380}
                  series={ScatterWithImagesOpt.series}
                  type='scatter'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ScatterApex
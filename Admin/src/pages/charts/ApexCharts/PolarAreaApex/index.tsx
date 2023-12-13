import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'

import { BasicPolarAreaOpt, MonochromePolarAreaOpt } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const PolarAreaApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Polar Area Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/polararea' },
          { label: "Polar Area Charts", path: "/ui/apex/polararea", active: true },
        ]}
        title={"Polar Area Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Basic Polar Area Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={BasicPolarAreaOpt}
                  height={380}
                  series={BasicPolarAreaOpt.series}
                  type='polarArea'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Monochrome Polar Area</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={MonochromePolarAreaOpt}
                  height={380}
                  series={MonochromePolarAreaOpt.series}
                  type='polarArea'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PolarAreaApex
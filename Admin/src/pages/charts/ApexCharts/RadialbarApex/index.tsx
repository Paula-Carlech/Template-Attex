import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'

import { BasicRadialBarOpt, MultipleRadialBarsOpt, CustomAngleopt, CircleWithImageOpt, StrokedCircularGuageOpt, GradientCircularOpt, SemiCircleGaugeOpt } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const RadialbarApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex RadialBar Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/radialbar' },
          { label: "Radialbar Charts", path: "/ui/apex/radialbar", active: true },
        ]}
        title={"RadialBar Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Basic RadialBar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={BasicRadialBarOpt}
                  height={320}
                  series={BasicRadialBarOpt.series}
                  type='radialBar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Multiple RadialBars</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={MultipleRadialBarsOpt}
                  height={320}
                  series={MultipleRadialBarsOpt.series}
                  type='radialBar'
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
              <h4 className="header-title mb-4">Circle Chart - Custom Angle</h4>
              <div className="text-center" >
                <ReactApexChart
                  className='apex-charts'
                  options={CustomAngleopt}
                  height={380}
                  series={CustomAngleopt.series}
                  type='radialBar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Circle Chart with Image</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={CircleWithImageOpt}
                  height={360}
                  series={CircleWithImageOpt.series}
                  type='radialBar'
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
              <h4 className="header-title mb-4">Stroked Circular Guage</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={StrokedCircularGuageOpt}
                  height={380}
                  series={StrokedCircularGuageOpt.series}
                  type='radialBar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Gradient Circular Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={GradientCircularOpt}
                  height={330}
                  series={GradientCircularOpt.series}
                  type='radialBar'
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
              <h4 className="header-title mb-4">Semi Circle Gauge</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={SemiCircleGaugeOpt}
                  height={625}
                  series={SemiCircleGaugeOpt.series}
                  type='radialBar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default RadialbarApex
import { Card, Col, Row } from 'react-bootstrap'
import { SimpleBubbleChartOps,SecondBubbleChartOps } from './data'
import ReactApexChart from 'react-apexcharts'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const BubbleApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Bubble Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/bubble' },
          { label: "Bubble Charts", path: "/ui/apex/bubble", active: true },
        ]}
        title={"Bubble Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Simple Bubble Chart</h4>
              <div >
              <ReactApexChart
                  className='apex-charts'
                  options={SimpleBubbleChartOps}
                  height={380}
                  series={SimpleBubbleChartOps.series}
                  type='bubble'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">3D Bubble Chart</h4>
              <div >
              <ReactApexChart
                  className='apex-charts'
                  options={SecondBubbleChartOps}
                  height={380}
                  series={SecondBubbleChartOps.series}
                  type='bubble'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default BubbleApex
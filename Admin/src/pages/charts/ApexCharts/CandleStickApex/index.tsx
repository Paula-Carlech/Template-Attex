import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import { SimpleCandlestickOps, CategoryXAxisOps, CandlestickwithLineOps } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const CandleStickApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Candlestick Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/candlestick' },
          { label: "Candlestick Charts", path: "/ui/apex/candlestick", active: true },
        ]}
        title={"Candlestick Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Simple Candlestick Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={SimpleCandlestickOps}
                  height={400}
                  series={SimpleCandlestickOps.series}
                  type='candlestick'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
        <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Category X-Axis</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={CategoryXAxisOps}
                  height={380}
                  series={CategoryXAxisOps.series}
                  type='candlestick'
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
              <h4 className="header-title mb-3">Candlestick with Line</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={CandlestickwithLineOps}
                  height={380}
                  series={CandlestickwithLineOps.series}
                  type='candlestick'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CandleStickApex
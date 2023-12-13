import { Button, Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'

// data
import { SpilineAreaApexOpt, DateTimeAreaApexOpt, AreaApexOpt, NavigateAreaApexOpt, StackedAreaOpt, IrregularTimeSeriesOps, AreaNullValueOps } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const AreaApex = () => {

  return (
    <>
      <PageTitle pageTitle='Apex Area Chart' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/area' },
          { label: "Area Charts", path: "/ui/apex/area", active: true },
        ]}
        title={"Area Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Basic Area Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={AreaApexOpt}
                  height={380}
                  series={AreaApexOpt.series}
                  type='area'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Spline Area</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={SpilineAreaApexOpt}
                  height={380}
                  series={SpilineAreaApexOpt.series}
                  type='area'
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
              <h4 className="header-title mb-4">Area Chart - Datetime X-axis</h4>
              <div className="toolbar apex-toolbar">
                <Button variant='light' id="one_month" className="btn-sm">1M</Button>
                <Button variant='light' id="six_months" className="btn-sm">6M</Button>
                <Button variant='light' id="one_year" className="btn-sm active">1Y</Button>
                <Button variant='light' id="ytd" className="btn-sm">YTD</Button>
                <Button variant='light' id="all" className="btn-sm">ALL</Button>
              </div>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={DateTimeAreaApexOpt}
                  height={350}
                  series={DateTimeAreaApexOpt.series}
                  type='area'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Area with Negative Values</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={NavigateAreaApexOpt}
                  height={350}
                  series={NavigateAreaApexOpt.series}
                  type='area'
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
              <h4 className="header-title mb-4">Irregular TimeSeries</h4>
              <div >
                <ReactApexChart
                  id="area-timeSeries"
                  className='apex-charts'
                  options={IrregularTimeSeriesOps}
                  height={380}
                  series={IrregularTimeSeriesOps.series}
                  type='area'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Stacked Area</h4>
              <div >
                <ReactApexChart
                  id="stacked-area"
                  className='apex-charts'
                  options={StackedAreaOpt}
                  height={380}
                  series={StackedAreaOpt.series}
                  type='area'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} >
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Area Chart with Null values</h4>
              <div >
                <ReactApexChart
                  id="area-chart-nullvalues"
                  className='apex-charts'
                  options={AreaNullValueOps}
                  height={380}
                  series={AreaNullValueOps.series}
                  type='area'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AreaApex

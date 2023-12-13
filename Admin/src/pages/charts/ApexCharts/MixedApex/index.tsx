import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'
import { lineAreaChartOpts, lineColumnAreaChartOpts, lineColumnChartOpts, multipleYAxisChartOpts } from './data'

const MixedApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Mixed Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/mixed' },
          { label: "Mixed Charts", path: "/ui/apex/mixed", active: true },
        ]}
        title={"Mixed Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Line & Column Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={lineColumnChartOpts}
                  height={380}
                  series={lineColumnChartOpts.series}
                  type='line'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Multiple Y-Axis Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={multipleYAxisChartOpts}
                  height={380}
                  series={multipleYAxisChartOpts.series}
                  type='line'
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
              <h4 className="header-title">Line & Area Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={lineAreaChartOpts}
                  height={380}
                  series={lineAreaChartOpts.series}
                  type='line'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Line, Column & Area Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={lineColumnAreaChartOpts}
                  height={380}
                  series={lineColumnAreaChartOpts.series}
                  type='line'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default MixedApex
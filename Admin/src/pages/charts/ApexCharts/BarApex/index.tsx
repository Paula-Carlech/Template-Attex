import ReactApexChart from 'react-apexcharts'
import { Card, Col, Row } from 'react-bootstrap'

// data
import {
  BasicBarOps,
  GroupBarOps,
  StackedBarOps,
  FullStackedBarOps,
  NavigateBarOps,
  ReversedBarOps,
  ImageFillBarOps,
  CustomDataLabelBarOps,
  PatternedBarOps,
  MarkersBarOps,
} from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const BarApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Bar Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/bar' },
          { label: "Bar Charts", path: "/ui/apex/bar", active: true },
        ]}
        title={"Bar Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Basic Bar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={BasicBarOps}
                  height={380}
                  series={BasicBarOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Grouped Bar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={GroupBarOps}
                  height={380}
                  series={GroupBarOps.series}
                  type='bar'
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
              <h4 className="header-title">Stacked Bar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={StackedBarOps}
                  height={380}
                  series={StackedBarOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">100% Stacked Bar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={FullStackedBarOps}
                  height={380}
                  series={FullStackedBarOps.series}
                  type='bar'
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
              <h4 className="header-title">Bar with Negative Values</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={NavigateBarOps}
                  height={380}
                  series={NavigateBarOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Reversed Bar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ReversedBarOps}
                  height={380}
                  series={ReversedBarOps.series}
                  type='bar'
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
              <h4 className="header-title">Bar with Image Fill</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ImageFillBarOps}
                  height={450}
                  series={ImageFillBarOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Custom DataLabels Bar</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={CustomDataLabelBarOps}
                  height={450}
                  series={CustomDataLabelBarOps.series}
                  type='bar'
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
              <h4 className="header-title">Patterned Bar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={PatternedBarOps}
                  height={380}
                  series={PatternedBarOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Bar with Markers</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={MarkersBarOps}
                  height={380}
                  series={MarkersBarOps.series}
                  type='bar'
                />
                {/* <div id="bar-markers" className="apex-charts" data-colors="#47ad77,#fa5c7c"></div> */}
              </div>
            </Card.Body>

          </Card>

        </Col>

      </Row>
    </>
  )
}

export default BarApex
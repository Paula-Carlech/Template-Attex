import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import { BasicColumnOps, ColumnWithDataTableOps, StackedColumnOps, FullStackedColumnOps, ColumnwithMarkersOps, ColumnGroupLabelOps, ColumnWithRotatedlabelsOps, ColumnwithnegativevalueOps, DistributedColumnOps, RangeColumnOps } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'
import DynamicLoaded from './DynamicLoaded'

const ColumnApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Column Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/column' },
          { label: "Column Charts", path: "/ui/apex/column", active: true },
        ]}
        title={"Column Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Basic Column Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={BasicColumnOps}
                  height={396}
                  series={BasicColumnOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Column Chart with Datalabels</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ColumnWithDataTableOps}
                  height={380}
                  series={ColumnWithDataTableOps.series}
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
              <h4 className="header-title">Stacked Column Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={StackedColumnOps}
                  height={380}
                  series={StackedColumnOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">100% Stacked Column Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={FullStackedColumnOps}
                  height={380}
                  series={FullStackedColumnOps.series}
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
              <h4 className="header-title">Column with Markers</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ColumnwithMarkersOps}
                  height={380}
                  series={ColumnwithMarkersOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Column with Group Label</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ColumnGroupLabelOps}
                  height={380}
                  series={ColumnGroupLabelOps.series}
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
              <h4 className="header-title">Column Chart with rotated labels & Annotations</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ColumnWithRotatedlabelsOps}
                  height={380}
                  series={ColumnWithRotatedlabelsOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>

          </Card>

        </Col>


        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Column Chart with negative values</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ColumnwithnegativevalueOps}
                  height={380}
                  series={ColumnwithnegativevalueOps.series}
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
              <h4 className="header-title">Distributed Column Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={DistributedColumnOps}
                  height={380}
                  series={DistributedColumnOps.series}
                  type='bar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Range Column Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={RangeColumnOps}
                  height={380}
                  series={RangeColumnOps.series}
                  type='rangeBar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4 className="header-title">Dynamic Loaded Chart</h4>
              <div className="flex-shrink-0">
                <select id="phoneModel" className="form-select form-select-sm">
                  <option value="iphone5">iPhone 5</option>
                  <option value="iphone6">iPhone 6</option>
                  <option value="iphone7">iPhone 7</option>
                </select>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <DynamicLoaded />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ColumnApex
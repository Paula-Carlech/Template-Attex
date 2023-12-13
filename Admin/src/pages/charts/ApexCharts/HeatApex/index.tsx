import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import { BasicHeatmapOps, MultipleHeatmapOps, ColorRangeHeatmapOps, RangewithoutShadeOps } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const HeatApex = () => {
  return (
    <>
      <PageTitle pageTitle='Apex Heatmap Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/heatmap' },
          { label: "Heatmap Charts", path: "/ui/apex/heatmap", active: true },
        ]}
        title={"Heatmap Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Basic Heatmap - Single Series</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={BasicHeatmapOps}
                  height={380}
                  series={BasicHeatmapOps.series}
                  type='heatmap'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Heatmap - Multiple Series</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={MultipleHeatmapOps}
                  height={380}
                  series={MultipleHeatmapOps.series}
                  type='heatmap'
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
              <h4 className="header-title mb-3">Heatmap - Color Range</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ColorRangeHeatmapOps}
                  height={380}
                  series={ColorRangeHeatmapOps.series}
                  type='heatmap'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Heatmap - Range without Shades</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={RangewithoutShadeOps}
                  height={380}
                  series={RangewithoutShadeOps.series}
                  type='heatmap'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default HeatApex
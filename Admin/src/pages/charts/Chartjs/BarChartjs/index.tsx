import { Card, Col, Row } from 'react-bootstrap'
import Chart, { type ChartItem } from 'chart.js/auto';
import { useEffect } from 'react';
import {
  borderRadiusConfig,
  floatingConfig,
  horizontalConfig,
  stackedConfig,
  groupStackConfig,
  verticalConfig,
} from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const BarChartjs = () => {

  useEffect(() => {

    const borderRadiusTag = document.getElementById('border-radius-example') as ChartItem;
    const borderRadiusChart = new Chart(borderRadiusTag, borderRadiusConfig)

    const floatingTag = document.getElementById('floating-example') as ChartItem;
    const floatingChart = new Chart(floatingTag, floatingConfig)

    const horizontalTag = document.getElementById('horizontal-example') as ChartItem;
    const horizontalChart = new Chart(horizontalTag, horizontalConfig)

    const stackedTag = document.getElementById('stacked-example') as ChartItem;
    const stackedChart = new Chart(stackedTag, stackedConfig)

    const groupStackTag = document.getElementById('group-stack-example') as ChartItem;
    const groupStackChart = new Chart(groupStackTag, groupStackConfig)

    const verticalTag = document.getElementById('vertical-example') as ChartItem;
    const verticalChart = new Chart(verticalTag, verticalConfig)

    return () => {
      borderRadiusChart.destroy()
      floatingChart.destroy()
      horizontalChart.destroy()
      stackedChart.destroy()
      groupStackChart.destroy()
      verticalChart.destroy()
    }
  })


  return (
    <>
      <PageTitle pageTitle='Chartjs' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Charts', path: '/ui/chartjs/bar' },
          { label: "Chartjs", path: "/ui/chartjs/bar", active: true },
        ]}
        title={"Chartjs"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Border Radius</h4>
              <div >
                <div className="mt-3 chartjs-chart" style={{ height: 320 }}>
                  <canvas id="border-radius-example" data-colors="#3e60d5,#47ad77"></canvas>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title mb-4">Floating</h4>
              <div >
                <div className="mt-3 chartjs-chart" style={{ height: 320 }}>
                  <canvas id="floating-example" data-colors="#3e60d5,#47ad77"></canvas>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title mb-4">Horizontal</h4>
              <div >
                <div className="mt-3 chartjs-chart" style={{ height: 320 }}>
                  <canvas id="horizontal-example" data-colors="#3e60d5,#47ad77"></canvas>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title mb-4">Stacked</h4>
              <div >
                <div className="mt-3 chartjs-chart" style={{ height: 320 }}>
                  <canvas id="stacked-example" data-colors="#3e60d5,#47ad77"></canvas>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title mb-4">Stacked with Groups</h4>
              <div >
                <div className="mt-3 chartjs-chart" style={{ height: 320 }}>
                  <canvas id="group-stack-example" data-colors="#3e60d5,#47ad77"></canvas>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title mb-4">Vertical</h4>

              <div >
                <div className="mt-3 chartjs-chart" style={{ height: 320 }}>
                  <canvas id="vertical-example" data-colors="#3e60d5,#47ad77"></canvas>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default BarChartjs
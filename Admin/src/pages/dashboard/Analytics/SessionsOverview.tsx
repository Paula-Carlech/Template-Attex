import { ApexOptions } from 'apexcharts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, Col, Nav, Row } from 'react-bootstrap'

const SessionsOverview = () => {

  function getDaysInMonth(month: number, year: number) {
    let date = new Date(year, month, 1);
    let days = [];
    let idx = 0;
    while (date.getMonth() === month && idx < 15) {
      var d = new Date(date);
      days.push(d.getDate() + " " + d.toLocaleString('en-us', { month: 'short' }));
      date.setDate(date.getDate() + 1);
      idx += 1;
    }
    return days;
  }

  let labels = getDaysInMonth(new Date().getMonth() + 1, new Date().getFullYear());

  const apexOpts: ApexOptions = {
    chart: {
      height: 240,
      type: 'area',
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 4
    },
    series: [{
      name: 'Sessions',
      data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35]
    }],
    legend: {
      show: false
    },
    colors: ['#47ad77'],
    xaxis: {
      // type: 'string',
      categories: labels,
      tooltip: {
        enabled: false
      },
      axisBorder: {
        show: false
      },
      labels: {

      }
    },
    yaxis: {
      labels: {
        formatter: function (val: any) {
          return val + "k"
        },
        offsetX: -15
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [45, 100]
      },
    },
  }

  return (
    <Card className="card-h-100">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Sessions Overview</h4>
        <Nav as='ul' className="d-none d-lg-flex">
          <Nav.Item as='li'>
            <Nav.Link className="text-muted" href='#'>Today</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className="text-muted" href='#'>7d</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className="active" href='#'>15d</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className="text-muted" href='#'>1m</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className="text-muted" href='#'>1y</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="bg-light-subtle border-top border-bottom border-light">
          <Row className="text-center">
            <Col>
              <p className="text-muted mt-3"><i className="ri-donut-chart-fill"/> Direct</p>
              <h3 className="fw-normal mb-3">
                <span>170k</span>
              </h3>
            </Col>
            <Col>
              <p className="text-muted mt-3"><i className="ri-donut-chart-fill"/> Organic Search</p>
              <h3 className="fw-normal mb-3">
                <span>12M <i className="ri-corner-right-up-fill text-success"/></span>
              </h3>
            </Col>
            <Col>
              <p className="text-muted mt-3"><i className="ri-donut-chart-fill"/> Refferal</p>
              <h3 className="fw-normal mb-3">
                <span>8.27%</span>
              </h3>
            </Col>
            <Col>
              <p className="text-muted mt-3"><i className="ri-donut-chart-fill"/> Social</p>
              <h3 className="fw-normal mb-3">
                <span>69k <i className="ri-corner-right-down-line text-danger"/></span>
              </h3>
            </Col>
          </Row>
        </div>
      </Card.Body>

      <Card.Body >
        <div>

          <ReactApexChart
            className='apex-charts'
            options={apexOpts}
            height={220}
            series={apexOpts.series}
            type='area'
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default SessionsOverview
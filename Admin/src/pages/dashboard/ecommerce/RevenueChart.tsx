import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

const RevenueChart = () => {

  const apexOpts: ApexOptions = {
    series: [{
      name: 'Revenue',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Sales',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
      height: 374,
      type: 'line',
      offsetY: 10
    },
    stroke: {
      width: [2, 3]
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      },
    },
    colors: ['#3e60d5', '#47ad77'],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
      type: 'datetime'
    },
    legend: {
      offsetY: 7,
    },
    grid: {
      padding: {
        bottom: 20
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.75,
        opacityTo: 0.75,
        stops: [0, 0, 0]
      },
    },
    yaxis: [{
      title: {
        text: 'Net Revenue',
      },
    }, {
      opposite: true,
      title: {
        text: 'Number of Sales'
      },
    }],
  };

  const series = [
    {
      name: "Revenue",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Sales",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ]

  return (
    <>
      <Card className='card'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <h4 className='header-title'>Revenue</h4>
          <Dropdown>
            <Dropdown.Toggle
              as='a'
              className='arrow-none card-drop'
            >
              <i className='ri-more-2-fill'/>
            </Dropdown.Toggle>
            <Dropdown.Menu align='end'>
              <Dropdown.Item>Sales Report</Dropdown.Item>
              <Dropdown.Item>Export Report</Dropdown.Item>
              <Dropdown.Item>Profit</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>
        <Card.Body className='p-0'>
          <div className='bg-light-subtle border-top border-bottom border-light'>
            <Row className='text-center'>
              <Col>
                <p className='text-muted mt-3'>
                  <i className='ri-donut-chart-fill'/> Current Week
                </p>
                <h3 className='fw-normal mb-3'>
                  <span>$1705.54</span>
                </h3>
              </Col>
              <Col>
                <p className='text-muted mt-3'>
                  <i className='ri-donut-chart-fill'/> Previous Week
                </p>
                <h3 className='fw-normal mb-3'>
                  <span>
                    $6,523.25
                    <i className='ri-corner-right-up-fill text-success'/>
                  </span>
                </h3>
              </Col>
              <Col>
                <p className='text-muted mt-3'>
                  <i className='ri-donut-chart-fill'/> Conversation
                </p>
                <h3 className='fw-normal mb-3'>
                  <span>8.27%</span>
                </h3>
              </Col>
              <Col>
                <p className='text-muted mt-3'>
                  <i className='ri-donut-chart-fill'/> Customers
                </p>
                <h3 className='fw-normal mb-3'>
                  <span>
                    69k
                    <i className='ri-corner-right-down-line text-danger'/>
                  </span>
                </h3>
              </Col>
            </Row>
          </div>
        </Card.Body>
        <Card.Body className='pt-0'>
          <div>
            <ReactApexCharts
              options={apexOpts}
              series={series}
              type='line'
              height={380}
              className='apex-charts mt-3'
            />
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default RevenueChart
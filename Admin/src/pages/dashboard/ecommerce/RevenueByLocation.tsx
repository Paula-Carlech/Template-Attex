import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import ReactApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import WorldVectorMap from '../../../components/VectorMap/WorldMap';


const RevenueByLocation = () => {

  const apexOpts: ApexOptions = {
    chart: {
      height: 320, type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors: ['#47ad77'],
    dataLabels: {
      enabled: false,
    },
    series: [{
      name: 'Orders',
      data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12]
    }],
    xaxis: {
      categories: ["India", "China", "United States", "Japan", "France", "Italy", "Netherlands", "United Kingdom", "Canada", "South Korea"],
      axisBorder: {
        show: false,
      },
      labels: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    grid: {
      strokeDashArray: 5,
    },
  };

  // vector map config
  const vectorOptions = {
    normalizeFunction: 'polynomial',
    markers: [{
      coords: [40.71, -74.00],
      name: 'New York'
    }, {
      coords: [37.77, -122.41],
      name: 'San Francisco'
    }, {
      coords: [-33.86, 151.20],
      name: 'Sydney'
    }, {
      coords: [1.3, 103.8],
      name: 'Singapore'
    }],
    markerStyle: {
      initial: {
        r: 9,
        fill: "#6658dd",
        "fill-opacity": 0.9,
        stroke: "#fff",
        "stroke-width": 7,
        "stroke-opacity": 0.4,
      },

      hover: {
        'stroke': '#fff',
        'fill-opacity': 1,
        'stroke-width': 1.5
      }
    },
    backgroundColor: 'transparent',
    hoverOpacity: 0.7,
    hoverColor: false,
    regionStyle: {
      initial: {
        fill: 'rgba(145,166,189,.25)'
      },
    },
    zoomOnScroll: false
  };

  return (
    <Card>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <h4 className='header-title'>Revenue By Locations</h4>
        <Dropdown>
          <Dropdown.Toggle
            as='a'
            className='arrow-none card-drop'
          >
            <i className='ri-more-2-fill'/>
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-menu-end'>
            <Dropdown.Item>Sales Report</Dropdown.Item>
            <Dropdown.Item>Export Report</Dropdown.Item>
            <Dropdown.Item>Profit</Dropdown.Item>
            <Dropdown.Item>Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>

      <Card.Body>
        <Row>
          <Col lg={8}>
            <div className='mt-3 mb-3'>
              <WorldVectorMap
                height='298px'
                width='100%'
                options={vectorOptions}
              />
            </div>
          </Col>
          <Col lg={4}>
            <ReactApexCharts
              className='apex-charts'
              options={apexOpts}
              height={320}
              series={apexOpts.series}
              type='bar'
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default RevenueByLocation

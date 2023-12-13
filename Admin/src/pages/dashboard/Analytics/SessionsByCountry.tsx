import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import ReactApexCharts from 'react-apexcharts';
import WorldVectorMap from '../../../components/VectorMap/WorldMap';
import { ApexOptions } from 'apexcharts';

const SessionsByCountry = () => {

  const apexOpts: ApexOptions = {
    chart: {
      height: 332,
      type: 'bar',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    colors: ['#16a7e9'],
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Sessions',
      data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12]
    }],
    xaxis: {
      categories: ["India", "China", "United States", "Japan", "France", "Italy", "Netherlands", "United Kingdom", "Canada", "South Korea"],
      axisBorder: {
        show: false,
      },
      labels: {
        formatter: function (val: any) {
          return val + "%";
        }
      }
    },
    grid: {
      strokeDashArray: 5,
    }
  }

  // vector map config 
  const vectorOptions = {
    series: {
      regions: [
        {
          attribute: 'fill',
          scale: {
            ScaleKR: '#e6ebff',
            ScaleCA: '#b3c3ff',
            ScaleGB: '#809bfe',
            ScaleNL: '#4d73fe',
            ScaleIT: '#1b4cfe',
            ScaleFR: '#727cf5',
            ScaleJP: '#e7fef7',
            ScaleUS: '#e7e9fd',
            ScaleCN: '#8890f7',
            ScaleIN: '#727cf5',
          },
          values: {
            KR: 'ScaleKR',
            CA: 'ScaleCA',
            GB: 'ScaleGB',
            NL: 'ScaleNL',
            IT: 'ScaleIT',
            FR: 'ScaleFR',
            JP: 'ScaleJP',
            US: 'ScaleUS',
            CN: 'ScaleCN',
            IN: 'ScaleIN',
          },
        },
      ],
    },
  };


  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Sessions by country</h4>
        <Dropdown>
          <Dropdown.Toggle as='a' className="arrow-none card-drop">
            <i className="ri-more-2-fill" />
          </Dropdown.Toggle>
          <Dropdown.Menu align='end'>
            <Dropdown.Item>Refresh Report</Dropdown.Item>
            <Dropdown.Item>Export Report</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>

      <Card.Body className="pt-0">
        <Row>
          <Col lg={7}>
            <div className="mt-3 mb-3">
              <WorldVectorMap
                height='298px'
                width='100%'
                options={vectorOptions}
              />
            </div>
          </Col>
          <Col lg={5}>

            <ReactApexCharts
              className='apex-charts'
              options={apexOpts}
              height={350}
              series={apexOpts.series}
              type='bar'
            />

          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default SessionsByCountry
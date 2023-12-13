import { Alert, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const TotalSalesChart = () => {

  const apexOpts: ApexOptions = {
    chart: {
      height: 286,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '14px',
            color: undefined,
            offsetY: 100
          },
          value: {
            offsetY: 55,
            fontSize: '24px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        },
        track: {
          background: "rgba(170,184,197, 0.2)",
          margin: 0
        },
      }
    },
    fill: {
      gradient: {
        // enabled: true,
        shade: 'dark',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    colors: ['#3e60d5', '#47ad77', '#fa5c7c', '#16a7e9'],
    series: [67],
    labels: ['Returning Customer'],
    responsive: [{
      breakpoint: 380,
      options: {
        chart: {
          height: 180
        }
      }
    }],
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  }

  const apexData = [67];


  return (
    <>
      <Card>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <h4 className='header-title'>Total Sales</h4>
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

        <Card.Body className='p-0'>
          <Alert
            variant='warning'
            className='rounded-0 mb-0 border-end-0 border-start-0'
            role='alert'
          >
            Something went wrong. Please
            <strong>
              <Link
                to='#!'
                className='alert-link text-decoration-underline'
              > refresh </Link>
            </strong>
            to get new data!
          </Alert>
        </Card.Body>

        <Card.Body className='pt-0'>

          <ReactApexCharts
            options={apexOpts}
            series={apexData}
            type='radialBar'
            height={286}
            className='apex-charts mb-3'
          />

          <h5 className='mb-1 mt-0 fw-normal'>Brooklyn, New York</h5>
          <div className='progress-w-percent'>
            <span className='progress-value fw-bold'>72k </span>
            <div className='progress progress-sm'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: "72%" }}
                data-aria-valuenow='72'
                data-aria-valuemin='0'
                data-aria-valuemax='100'
              />
            </div>
          </div>

          <h5 className='mb-1 mt-0 fw-normal'>The Castro, San Francisco</h5>
          <div className='progress-w-percent'>
            <span className='progress-value fw-bold'>39k </span>
            <div className='progress progress-sm'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: "39%" }}
                data-aria-valuenow='39'
                data-aria-valuemin='0'
                data-aria-valuemax='100'
              />
            </div>
          </div>

          <h5 className='mb-1 mt-0 fw-normal'>Kovan, Singapore</h5>
          <div className='progress-w-percent mb-0'>
            <span className='progress-value fw-bold'>61k </span>
            <div className='progress progress-sm'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: "61%" }}
                data-aria-valuenow='61'
                data-aria-valuemin='0'
                data-aria-valuemax='100'
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default TotalSalesChart
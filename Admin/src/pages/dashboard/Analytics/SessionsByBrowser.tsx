import { Card, Dropdown } from 'react-bootstrap'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// images
import chrome from '../../../assets/images/browsers/chrome.png'
import firefox from '../../../assets/images/browsers/firefox.png'
import safari from '../../../assets/images/browsers/safari.png'
import web from '../../../assets/images/browsers/web.png'

const SessionsByBrowser = () => {

  const apexOpts: ApexOptions = {
    chart: {
      height: 364,
      type: 'radar',
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Usage',
      data: [80, 50, 30, 40, 60, 20],
    }],
    labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
    plotOptions: {
      radar: {
        size: 130,
        polygons: {
          strokeColors: '#e9e9e9',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    },
    colors: ['#16a7e9'],
    yaxis: {
      labels: {
        formatter: function (val: any) {
          return val + "%";
        }
      },
    },
    dataLabels: {
      enabled: true
    },
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColors: '#16a7e9',
      strokeWidth: 2,
    }
  }

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Sessions by Browser</h4>
        <Dropdown>
          <Dropdown.Toggle
            as='a'
            className="dropdown-toggle arrow-none card-drop p-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ri-more-2-fill"/>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item className="dropdown-item">Refresh Report</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Export Report</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>

      <Card.Body className="pt-0">

        <ReactApexCharts
          className='apex-charts'
          options={apexOpts}
          series={apexOpts.series}
          type="radar"
          height={364}
        />

        <div className="mt-1 text-center">
          <ul className="list-inline mb-0">
            <li className="list-inline-item"><img className="ms-3 pe-1" src={chrome} height="18" alt="chrome" /><span className="align-middle">45.87%</span></li>
            <li className="list-inline-item"><img className="ms-3 pe-1" src={firefox} height="18" alt="firefox" /><span className="align-middle">3.25%</span></li>
            <li className="list-inline-item"><img className="ms-3 pe-1" src={safari} height="18" alt="safari" /><span className="align-middle">9.68%</span></li>
            <li className="list-inline-item"><img className="ms-3 pe-1" src={web} height="18" alt="web" /><span className="align-middle">36.87%</span></li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SessionsByBrowser
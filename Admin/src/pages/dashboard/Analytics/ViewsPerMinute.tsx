import { Card, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ViewsPerMinute = () => {

  function getRandomData(length: number) {
    let dataArray = [];
    for (let idx = 0; idx < length; idx++) {
      dataArray.push(Math.floor(Math.random() * 90) + 10);
    }
    return dataArray;
  }

  const apexOpts: ApexOptions = {
    chart: {
      height: 216,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "22%",
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -24,
      style: {
        fontSize: '12px',
        colors: ["#8a969c"]
      }
    },
    series: [{
      name: 'Views',
      data: getRandomData(10)
    }],
    legend: {
      show: false
    },
    colors: ['#16a7e9'],
    xaxis: {
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        inverseColors: !0,
        shade: "light",
        type: "horizontal",
        shadeIntensity: .25,
        gradientToColors: void 0,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val;
        }
      },
    },
  }


  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Views Per Minute</h4>
        <Dropdown>
          <Dropdown.Toggle as='a' className="arrow-none card-drop p-0"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i className="ri-more-2-fill"/>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item>Refresh Report</Dropdown.Item>
            <Dropdown.Item>Export Report</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>

      <Card.Body className="pt-0">

        <ReactApexCharts
          className='apex-charts'
          options={apexOpts}
          series={apexOpts.series}
          type="bar"
          height={216}
        />

        <div className="table-responsive mt-3">
          <table className="table table-sm mb-0">
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to='#' className="text-muted">/adminto/dashboard-analytics</Link>
                </td>
                <td>25</td>
                <td>87.5%</td>
              </tr>
              <tr>
                <td>
                  <Link to='#' className="text-muted">/attex/dashboard-crm</Link>
                </td>
                <td>15</td>
                <td>21.48%</td>
              </tr>
              <tr>
                <td>
                  <Link to='#' className="text-muted">/ubold/dashboard</Link>
                </td>
                <td>10</td>
                <td>63.59%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ViewsPerMinute
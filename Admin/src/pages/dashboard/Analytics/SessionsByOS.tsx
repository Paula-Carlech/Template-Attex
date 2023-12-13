import { Card, Dropdown, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts';

const SessionsByOS = () => {

  const apexOpts: ApexOptions = {
    chart: {
      height: 315,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'OS',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return '8541';
            }
          }
        }
      }
    },
    colors: ['#16a7e9', '#47ad77', '#ffc35a', '#f15776'],
    series: [44, 55, 67, 83],
    labels: ['Windows', 'Macintosh', 'Linux', 'Android']
  }

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Sessions by Operating System</h4>
        <Dropdown>
          <Dropdown.Toggle as='a' className="arrow-none card-drop p-0">
            <i className="ri-more-2-fill" />
          </Dropdown.Toggle>
          <Dropdown.Menu align='end'>
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
          type="radialBar"
          height={351}
        />

        <Row className="text-center mt-2">
          <div className="col-6">
            <h4 className="fw-normal">
              <span>8,285</span>
            </h4>
            <p className="text-muted mb-0">Online System</p>
          </div>
          <div className="col-6">
            <h4 className="fw-normal">
              <span>3,534</span>
            </h4>
            <p className="text-muted mb-0">Offline System</p>
          </div>
        </Row>

      </Card.Body>
    </Card>
  )
}

export default SessionsByOS
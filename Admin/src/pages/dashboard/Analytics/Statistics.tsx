import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'

// images
import emailCampaign from '../../../assets/images/svg/email-campaign.svg'
import { ApexOptions } from 'apexcharts'

const Statistics = () => {

  /**
   * Live count generator
   */
  const liveCountGenerator = () => {
    setInterval(function () {
      let activeUsersCount = Math.floor(Math.random() * 600 + 150);

      let activeUserElement = document.getElementById("active-users-count");
      if (activeUserElement) {
        activeUserElement.innerHTML = activeUsersCount.toString();
      }

      let activeViewsElement = document.getElementById("active-views-count")
      if (activeViewsElement) {
        activeViewsElement.innerHTML = Math.floor(Math.random() * activeUsersCount + 200).toString()
      }
    }, 2000);
  }
  liveCountGenerator()

  const userApexOpts: ApexOptions = {
    chart: {
      height: 60,
      type: 'bar',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '60%'
      }
    },
    colors: ['#16a7e9'],
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    }],
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName: any) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  }

  const viewsApexOpts: ApexOptions = {
    chart: {
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    colors: ['#47ad77'],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  }

  return (
    <>
      <Col xl={4} lg={6}>

        <Card className="cta-box overflow-hidden">
          <Card.Body >
            <div className="d-flex align-items-center">
              <div>
                <h3 className="mt-0 fw-normal cta-box-title mb-3">Enhance your <b>Campaign</b> for better outreach</h3>
                <Link to='#' className="link-success link-offset-3 fw-bold">Go Premium <i className="ri-arrow-right-line"/></Link>
              </div>
              <img className="ms-3" src={emailCampaign} width="92" alt="Generic placeholder" />
            </div>
          </Card.Body>
        </Card>

      </Col>
      <Col xl={4} lg={6}>
        <Card>
          <Card.Body >
            <Row className="align-items-center">
              <div className="col-6">
                <h5 className="text-uppercase fs-13 mt-0 text-truncate" title="Active Users">Active Users</h5>
                <h2 className="my-2 py-1" id="active-users-count">825</h2>
                <p className="mb-0 text-muted text-truncate">
                  <span className="text-success me-2"><i className="ri-arrow-up-line"/> 3.27%</span>
                  <span className="text-nowrap"> Since previous week</span>
                </p>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <ReactApexCharts
                    className='apex-charts'
                    options={userApexOpts}
                    series={userApexOpts.series}
                    type="bar"
                    height={60}
                  />
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} lg={6}>
        <Card>
          <Card.Body >
            <Row className="align-items-center">
              <div className="col-6">
                <h5 className="text-uppercase fs-13 mt-0 text-truncate" title="Views per minute">Views per minute</h5>
                <h2 className="my-2 py-1" id="active-views-count">589</h2>
                <p className="mb-0 text-muted text-truncate">
                  <span className="text-danger me-2"><i className="ri-arrow-down-line" /> 2.66%</span>
                  <span className="text-nowrap"> Since previous week</span>
                </p>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <ReactApexCharts
                    className='apex-charts'
                    options={viewsApexOpts}
                    series={viewsApexOpts.series}
                    type="line"
                    height={60}
                  />
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Statistics
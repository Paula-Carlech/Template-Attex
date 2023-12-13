import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

import { BasicRadarOpt, PolygonFillOpt, MultipleSeriesOpt } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const RadarApex = () => {

  let [data, setData] = useState([
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ])

  function update() {

    function randomSeries() {
      let arr = []
      for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * 100))
      }
      return arr
    }

    setData([{
      name: 'Series 1',
      data: randomSeries(),
    }, {
      name: 'Series 2',
      data: randomSeries(),
    }, {
      name: 'Series 3',
      data: randomSeries(),
    }])
  }


  return (
    <>
      <PageTitle pageTitle='Apex Radar Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/radar' },
          { label: "Radar Charts", path: "/ui/apex/radar", active: true },
        ]}
        title={"Radar Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Basic Radar Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={BasicRadarOpt}
                  height={350}
                  series={BasicRadarOpt.series}
                  type='radar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Radar with Polygon-fill</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={PolygonFillOpt}
                  height={350}
                  series={PolygonFillOpt.series}
                  type='radar'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Radar – Multiple Series</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={MultipleSeriesOpt}
                  height={350}
                  series={data}
                  type='radar'
                />
                <div className="text-center mt-2">
                  <button onClick={update} className="btn btn-sm btn-primary">Update</button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default RadarApex
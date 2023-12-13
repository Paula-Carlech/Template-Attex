import { Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

import { SimplePieOpt, SimpleDonutOpt, MonochromePieOpt, GradientDonutOpt, PatternedDonutOpt, ImagefillOpt, DonutUpdateOpt } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

const PieApex = () => {

  let [data, setData] = useState([44, 55, 13, 33])

  function appendData() {
    let arr = data.map(function () {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    return setData(arr)
  }

  function removeData() {
    let arr = data.map(function () {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
    arr.pop();
    return setData(arr)
  }

  function randomize() {
    return setData(data.map(function () {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }))
  }

  function reset() {
    return setData([44, 55, 13, 33]);
  }

  return (
    <>
      <PageTitle pageTitle='Apex Pie Charts' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apex', path: '/ui/apex/pie' },
          { label: "Timeline Charts", path: "/ui/apex/pie", active: true },
        ]}
        title={"Pie Charts"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Simple Pie Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={SimplePieOpt}
                  height={320}
                  series={SimplePieOpt.series}
                  type='pie'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Simple Donut Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={SimpleDonutOpt}
                  height={320}
                  series={SimpleDonutOpt.series}
                  type='donut'
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
              <h4 className="header-title mb-4">Monochrome Pie Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={MonochromePieOpt}
                  height={320}
                  series={MonochromePieOpt.series}
                  type='pie'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Gradient Donut Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={GradientDonutOpt}
                  height={320}
                  series={GradientDonutOpt.series}
                  type='donut'
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
              <h4 className="header-title mb-4">Patterned Donut Chart</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={PatternedDonutOpt}
                  height={320}
                  series={PatternedDonutOpt.series}
                  type='donut'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Pie Chart with Image fill</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={ImagefillOpt}
                  height={320}
                  series={ImagefillOpt.series}
                  type='pie'
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
              <h4 className="header-title mb-4">Donut Update</h4>
              <div >
                <ReactApexChart
                  className='apex-charts'
                  options={DonutUpdateOpt}
                  height={320}
                  series={data}
                  type='donut'
                />
              </div>
              <div className="mt-2 d-flex flex-wrap gap-1 justify-content-center">
                <button className="btn btn-sm btn-primary" onClick={randomize}>RANDOMIZE</button>
                <button className="btn btn-sm btn-primary" onClick={appendData}>ADD</button>
                <button className="btn btn-sm btn-primary" onClick={removeData}>REMOVE</button>
                <button className="btn btn-sm btn-primary" onClick={reset}>RESET</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PieApex
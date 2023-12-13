import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StatisticsWidget from '../../../components/StatisticsWidget'

const Statistics = () => {
  return (
    <Row className='row-cols-1 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2'>

      <Col>
        <StatisticsWidget
          variant={'success'}
          cardTitle={'Customers'}
          title={'Number of customers'}
          change={'2,541'}
          stats={'54,214'}
          dataSince={'Since last month'}
          classname={'apex-charts'}
          chartSeries={[58, 42]}
          colors={['#47ad77', '#e3e9ee']}
        />
      </Col>

      <Col>
        <StatisticsWidget
          variant={'danger'}
          cardTitle={'Orders'}
          title={'Number of Orders'}
          change={'1.08'}
          stats={'7,543'}
          dataSince={'Since last month'}
          classname={'apex-charts'}
          chartSeries={[34, 66]}
          colors={['#3e60d5', '#e3e9ee']}
        />
      </Col>

      <Col>
        <StatisticsWidget
          variant={'danger'}
          cardTitle={'Revenue'}
          title={'Average Revenue'}
          change={'7.00'}
          stats={'$9,254'}
          dataSince={'Since last month'}
          classname={'apex-charts'}
          chartSeries={[87, 13]}
          colors={['#16a7e9', '#e3e9ee']}
        />
      </Col>

      <Col lg={6}>
        <StatisticsWidget
          variant={'success'}
          cardTitle={'Growth'}
          title={'Growth'}
          change={'4.87'}
          stats={'+ 20.6%'}
          dataSince={'Since last month'}
          classname={'apex-charts'}
          chartSeries={[45, 55]}
          colors={['#ffc35a', '#e3e9ee']}
        />
      </Col>

      <Col lg={6} md={12}>
        <StatisticsWidget
          variant={'success'}
          cardTitle={'Conversation'}
          title={'Conversation Ration'}
          change={'3.07'}
          stats={'9.62%'}
          dataSince={'Since last month'}
          classname={'apex-charts'}
          chartSeries={[23, 68]}
          colors={['#f15776', '#e3e9ee']}
        />
      </Col>

    </Row>
  )
}

export default Statistics
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomDatepicker from '../../../components/Datepicker'


import Statistics from './Statistics'
import SessionsByBrowser from './SessionsByBrowser'
import SessionsByOS from './SessionsByOS'
import ViewsPerMinute from './ViewsPerMinute'
import SessionsOverview from './SessionsOverview'
import SessionsByCountry from './SessionsByCountry'
import TableCharts from './TableCharts'
import PageTitle from '../../../components/PageTitle'

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  /**
   * handle date change
   */
  const onDateChange = (date: Date) => {
    setSelectedDate(date);
  }

  return (
    <>
      <PageTitle pageTitle='Analytics Dashboard' />
      <Row>
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <form className="d-flex">
                <CustomDatepicker
                  value={selectedDate}
                  inputClass="shadow border-0"
                  variant='success'
                  onChange={(date) => {
                    onDateChange(date);
                  }}
                />
                <Link to='#' className="btn btn-success ms-2 flex-shrink-0">
                  <i className="ri-refresh-line"/> Refresh
                </Link>
              </form>
            </div>
            <h4 className="page-title">Analytics</h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Statistics />
      </Row>

      <Row>
        <Col xl={4} lg={6}>
          <SessionsByBrowser />
        </Col>
        <Col xl={4} lg={6}>
          <SessionsByOS />
        </Col>
        <Col xl={4} lg={12}>
          <ViewsPerMinute />
        </Col>
      </Row>

      <Row>
        <Col xxl={6}>
          <SessionsByCountry />
        </Col>
        <Col xxl={6}>
          <SessionsOverview />
        </Col>
      </Row>

      <Row>
        <TableCharts />
      </Row>
    </>
  )
}

export default Analytics
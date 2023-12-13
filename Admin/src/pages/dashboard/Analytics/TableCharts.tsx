import React from 'react';
import { Card, Col, ProgressBar, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { records } from './data';

const Channels = () => {
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Channels</h4>
        <Link to='#' className="btn btn-sm btn-light">Export <i className="ri-download-line ms-1"/></Link>
      </Card.Header>

      <Card.Body className="p-0">
        <Table hover responsive align='center' className="table-sm table-centered table-borderless mb-0">
          <thead className="border-top border-bottom bg-light-subtle border-light">
            <tr>
              <th>Channel</th>
              <th>Visits</th>
              <th style={{ width: '40%' }}>Progress</th>
            </tr>
          </thead>

          <tbody>
            {(records || []).map((record, idx) => {
              return (
                <tr key={idx}>
                  <td>{record.channel}</td>
                  <td>{record.visits}</td>
                  <td>
                    <ProgressBar variant={record.color} now={record.now} style={{ height: 3 }} />
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}
const SocialMediaTraffic = () => {
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Social Media Traffic</h4>
        <Link to='#' className="btn btn-sm btn-light">Export <i className="ri-download-line ms-1"/></Link>
      </Card.Header>
      <Card.Body className="p-0">

        <Table responsive hover align='center' className="table-sm table-centered table-borderless mb-0">
          <thead className="border-top border-bottom bg-light-subtle border-light">
            <tr>
              <th>Network</th>
              <th>Visits</th>
              <th style={{ width: '40%' }}>Progress</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, idx) => {
              return (
                <tr key={idx}>
                  <td>{record.network}</td>
                  <td>{record.visits}</td>
                  <td>
                    <ProgressBar variant="primary" now={record.now} style={{ height: 3 }} />
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

const EngagementOverview = () => {
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Engagement Overview</h4>
        <Link to='#' className="btn btn-sm btn-light">Export <i className="ri-download-line ms-1"/></Link>
      </Card.Header>

      <Card.Body className="p-0">
        <Table responsive borderless hover align='center' className="table-sm table-centered mb-0">
          <thead className="border-top border-bottom bg-light-subtle border-light">
            <tr>
              <th>Duration (Secs)</th>
              <th style={{ width: '30%' }}>Sessions</th>
              <th style={{ width: '30%' }}>Views</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, idx) => {
              return (
                <tr key={idx}>
                  <td>{record.duration}</td>
                  <td>{record.session}</td>
                  <td>{record.views}</td>
                </tr>
              )
            })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}
const TableCharts = () => {
  return (
    <>
      <Col xl={4} lg={6}>
        <Channels />
      </Col>

      <Col xl={4} lg={6}>
        <SocialMediaTraffic />
      </Col>

      <Col xl={4} lg={12}>
        <EngagementOverview />
      </Col>
    </>
  )
}

export default TableCharts
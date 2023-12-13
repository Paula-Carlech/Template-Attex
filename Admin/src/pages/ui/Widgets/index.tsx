import { Button, Card, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import SimpleBar from 'simplebar-react'
import { Link } from 'react-router-dom'

// components
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import PageTitle from '../../../components/PageTitle'
import Chat from './Chat'
import WidgetDropdown from '../../../components/WidgetDropdown'

// static data
import { cardData1, cardData2, cardData3, messagesItem, activityData, transactions } from './data'

// avatars
import avatar2 from '../../../assets/images/users/avatar-2.jpg'
import starman from '../../../assets/images/svg/startman.svg'
import TodoList from '../../../components/TodoList'

// Definição um tipo para o tipo do gráfico
type ChartType = "area" | "line" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "treemap" | "rangeArea" | undefined;

// Definição o tipo para o item do gráfico
type ChartItem = {
  chart: {
    chart?: {
      type?: ChartType;
    };
    series: any[];
  };
};

const Widgets: React.FC = () => {
  return (
    <>
      <PageTitle pageTitle='Widgets' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Extras', path: '/ui/widgets' },
          { label: "Widgets", path: "/ui/widgets", active: true },
        ]}
        title={"Widgets"}
      />
      <Row>
        {(cardData1 || []).map((item, idx) => (
          <Col xxl={3} sm={6} key={idx}>
            <Card className={`widget-flat ${item.extraClass}`}>
              <Card.Body>
                <div className="float-end">
                  <i className={item.icon} />
                </div>
                <h5 className={`${item.extraClass ? 'text-white' : 'text-muted fw-normal mt-0'}`}>{item.title}</h5>
                <h3 className="my-3">{item.number}</h3>
                <p className="mb-0 text-muted">
                  <span className={item.growtClass}>{item.growth}</span>
                  <span className={`${item.extraClass ? 'text-nowrap text-white' : 'text-nowrap'}`}>Since last month</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="row-cols-1 row-cols-lg-5">
        {(cardData2 || []).map((item, idx) => (
          <Col md={item.col} key={idx}>
            <div className="card widget-flat">
              <div className="card-body">
                <div className="float-end">
                  <i className={item.icon} />
                </div>
                <h5 className="text-muted fw-normal mt-0">{item.title}</h5>
                <h3 className="my-3">{item.number}</h3>
                <p className="mb-0 text-muted">
                  <span className={`me-2 ${item.subtext.class}`}><i className={item.subtext.icon} /> {item.subtext.number}</span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>
        {(cardData3 || []).map((item, idx) => (
          <Col sm={6} xxl={3} key={idx}>
            <Card>
              <Card.Body>
                <Row className="align-items-center">
                  <Col>
                    <h5 className="text-muted fw-normal mt-0 text-truncate">{item.title}</h5>
                    <h3 className="my-2 py-1">{item.number}</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-success me-2"><i className="ri-arrow-up-line" /> {item.growth}</span>
                    </p>
                  </Col>
                  <Col>
                    <div className="text-end">
                      <ReactApexChart
                        className='apex-charts'
                        options={item.chart}
                        height={60}
                        series={item.chart.series}
                        type={item.chart.chart?.type as ChartType}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>

        <Col xl={4}>
          <Chat />
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Body>
              <span className="float-start m-2 me-4">
                <img src={avatar2} style={{ height: 100 }} alt="avatar-2" className="rounded-circle img-thumbnail" />
              </span>
              <div >
                <h4 className="mt-1 mb-1">Michael Franklin</h4>
                <p className="fs-13"> Authorised Brand Seller</p>
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item me-3">
                    <h5 className="mb-1">$ 25,184</h5>
                    <p className="mb-0 fs-13">Total Revenue</p>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="mb-1">5482</h5>
                    <p className="mb-0 fs-13">Number of Orders</p>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
          <Card className="cta-box text-bg-info">
            <Card.Body>
              <div className="text-center">
                <h3 className="m-0 fw-normal cta-box-title">Enhance your <b>Campaign</b> for better outreach</h3>
                <img className="my-3" src={starman} width="138" alt="Generic placeholder" />
                <br />
                <Button size='sm' variant='light' className="rounded-pill">Know More <i className="ri-arrow-right-line" /></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <TodoList />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4 className="header-title">Messages</h4>
              <WidgetDropdown />
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="inbox-widget">
                {(messagesItem || []).map((item, idx) => (
                  <div className="inbox-item" key={idx}>
                    <div className="inbox-item-img"><img src={item.image} className="rounded-circle" alt="" /></div>
                    <p className="inbox-item-author">{item.name}</p>
                    <p className="inbox-item-text">{item.message}</p>
                    <p className="inbox-item-date">
                      <Button size='sm' variant='link' className="text-info fs-13"> Reply </Button>
                    </p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4 className="header-title">Recent Activity</h4>
              <WidgetDropdown />
            </Card.Header>

            <SimpleBar className="card-body py-0 mb-3" style={{ maxHeight: 315 }}>
              <div className="timeline-alt py-0">
                {(activityData || []).map((item, idx) => (
                  <div className="timeline-item" key={idx}>
                    <i className={item.icon} />
                    <div className="timeline-item-info">
                      <Link to="#" className={`fw-bold mb-1 d-block text-${item.color}`}>{item.title}</Link>
                      <small>{item.text} {item.boldText ?? <span className="fw-bold">{item.boldText}</span>}</small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">{item.subtext}</small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SimpleBar>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4 className="header-title">Transactions</h4>
              <WidgetDropdown />
            </Card.Header>
            <SimpleBar className="card-body py-0 mb-3" style={{ maxHeight: 315 }}>
              {(transactions || []).map((item, idx) => (
                <Row className="py-1 align-items-center" key={idx}>
                  <Col className="col-auto">
                    <i className={item.icon} />
                  </Col>
                  <Col className="ps-0">
                    <Link to="#" className="text-body">{item.title}</Link>
                    <p className="mb-0 text-muted"><small>{item.date}</small></p>
                  </Col>
                  <Col className="col-auto">
                    <span className={`fw-bold pe-2 text-${item.color}`}>{item.amount}</span>
                  </Col>
                </Row>
              ))}
            </SimpleBar>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Widgets
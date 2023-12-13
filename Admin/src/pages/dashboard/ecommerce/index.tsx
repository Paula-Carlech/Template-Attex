import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomDatepicker from "../../../components/Datepicker";
import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import TotalSalesChart from "./TotalSalesChart";
import TopSellingProducts from "./TopSellingProducts";

import { products } from "./data";
import RevenueByLocation from "./RevenueByLocation";
import PageTitle from "../../../components/PageTitle";

const Ecommerce = ({ pageTitle }: { pageTitle: string }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  /**
   * handle date change
   */
  const onDateChange = (date: Date) => {
    setSelectedDate(date);
  }

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <Row>
        <Col>
          <div className='page-title-box'>
            <div className='page-title-right'>
              <form className='d-flex'>
                <CustomDatepicker
                  value={selectedDate}
                  inputClass="shadow border-0"
                  variant='primary'
                  onChange={(date) => {
                    onDateChange(date);
                  }}
                />
                <Link to='/' className='btn btn-primary ms-2'>
                  <i className='ri-refresh-line'/>
                </Link>
              </form>
            </div>
            <h4 className='page-title'>{pageTitle}</h4>
          </div>
        </Col>
      </Row>
      <Statistics />
      <Row>
        <Col lg={8}>
          <RevenueChart />
        </Col>
        <Col lg={4}>
          <TotalSalesChart />
        </Col>
      </Row>
      <Row>
        <Col xl={5}>
          <TopSellingProducts products={products} />
        </Col>
        <Col xl={7}>
          <RevenueByLocation />
        </Col>
      </Row>
    </>
  );
};

export default Ecommerce;

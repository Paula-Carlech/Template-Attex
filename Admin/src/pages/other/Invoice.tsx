import { Button, Card, Col, Image, Row, } from 'react-bootstrap'

//Logo 
import darkLogo from '../../assets/images/logo-dark.png'
import barcode from '../../assets/images/barcode.png'

// component
import PageBreadcrumb from '../../components/PageBreadcrumb'
import PageTitle from '../../components/PageTitle'

const InvoicePages = () => {
  return (
    <>
      <PageTitle pageTitle='Invoice' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Pages', path: '/pages/invoice' },
          { label: "Invoice", path: "/pages/invoice", active: true },
        ]}
        title={"Invoice"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="clearfix">
                <div className="float-start mb-3">
                  <Image src={darkLogo} alt="dark logo" height="22" />
                </div>
                <div className="float-end">
                  <h4 className="m-0 d-print-none">Invoice</h4>
                </div>
              </div>

              <Row>
                <Col sm={6}>
                  <div className="float-end mt-3">
                    <p><b>Hello, Tosha Minner</b></p>
                    <p className="text-muted fs-13">Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.</p>
                  </div>

                </Col>
                <Col sm={4} className="offset-sm-2">
                  <div className="mt-3 float-sm-end">
                    <p className="fs-13"><strong>Order Date: </strong> &nbsp;&nbsp;&nbsp; Jan 17, 2023</p>
                    <p className="fs-13"><strong>Order Status: </strong> <span className="badge bg-success float-end">Paid</span></p>
                    <p className="fs-13"><strong>Order ID: </strong> <span className="float-end">#123456</span></p>
                  </div>
                </Col>
              </Row>


              <Row className="mt-4">
                <Col>
                  <h6>Billing Address</h6>
                  <address>
                    Lynne K. Higby<br />
                    795 Folsom Ave, Suite 600<br />
                    San Francisco, CA 94107<br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </Col>

                <Col>
                  <h6>Shipping Address</h6>
                  <address>
                    Tosha Minner<br />
                    795 Folsom Ave, Suite 600<br />
                    San Francisco, CA 94107<br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </Col>

                <Col>
                  <div className="text-sm-end">
                    <Image src={barcode} alt="barcode-image" className="img-fluid me-2" />
                  </div>
                </Col>
              </Row>


              <Row>
                <Col>
                  <div className="table-responsive">
                    <table className="table table-sm table-centered table-hover table-borderless mb-0 mt-3">
                      <thead className="border-top border-bottom bg-light-subtle border-light">
                        <tr><th>#</th>
                          <th>Item</th>
                          <th>Quantity</th>
                          <th>Unit Cost</th>
                          <th className="text-end">Total</th>
                        </tr></thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <b>Laptop</b> <br />
                            Brand Model VGN-TXN27N/B
                            11.1" Notebook PC
                          </td>
                          <td>1</td>
                          <td>$1799.00</td>
                          <td className="text-end">$1799.00</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <b>Warranty</b> <br />
                            Two Year Extended Warranty -
                            Parts and Labor
                          </td>
                          <td>3</td>
                          <td>$499.00</td>
                          <td className="text-end">$1497.00</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <b>LED</b> <br />
                            80cm (32) HD Ready LED TV
                          </td>
                          <td>2</td>
                          <td>$412.00</td>
                          <td className="text-end">$824.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <div className="clearfix pt-3">
                    <h6 className="text-muted">Notes:</h6>
                    <small>
                      All accounts are to be paid within 7 days from receipt of
                      invoice. To be paid by cheque or credit card or direct payment
                      online. If account is not paid within 7 days the credits details
                      supplied as confirmation of work undertaken will be charged the
                      agreed quoted fee noted above.
                    </small>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="float-end mt-3 mt-sm-0">
                    <p><b>Sub-total:</b> <span className="float-end">$4120.00</span></p>
                    <p><b>VAT (12.5):</b> <span className="float-end">$515.00</span></p>
                    <h3>$4635.00 USD</h3>
                  </div>
                  <div className="clearfix"></div>
                </Col>
              </Row>

              <div className="d-print-none mt-4">
                <div className="text-end d-flex flex-wrap gap-1 justify-content-end">
                  <Button variant='primary' onClick={()=>window.print()}><i className="ri-printer-line"/> Print</Button>
                  <Button variant='info'>Submit</Button>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default InvoicePages
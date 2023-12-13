import { Card, Col, Button, Row, } from 'react-bootstrap'

// component
import PageBreadcrumb from '../../components/PageBreadcrumb'
import PageTitle from '../../components/PageTitle'

const PricingPages = () => {
    return (
        <>
            <PageTitle pageTitle='Pricing' />
            <PageBreadcrumb
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/pricing' },
                    { label: "Pricing", path: "/pages/pricing", active: true },
                ]}
                title={"Pricing"}
            />
            <Row className="justify-content-center">
                <Col xxl={10}>

                    <div className="text-center">
                        <h3 className="mb-2">Our <b>Plans</b></h3>
                        <p className="text-muted">
                            We have plans and prices that fit your business perfectly. Make your <br /> client site a success with our products.
                        </p>
                    </div>


                    <Row className="my-3">
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <p className="fw-bold text-uppercase mb-3">Professional Pack</p>
                                    <div className="avatar-md mx-auto">
                                        <span className="avatar-title bg-info-subtle border-info border border-opacity-25 text-info fw-normal fs-24 rounded-circle">
                                            <i className="ri-group-line"/>
                                        </span>
                                    </div>
                                    <h2 className="my-3">$19 <span className="text-uppercase fs-14 text-muted">/ Month</span></h2>
                                    <ul className="list-unstyled d-grid gap-3">
                                        <li>10 GB Storage</li>
                                        <li>500 GB Bandwidth</li>
                                        <li>No Domain</li>
                                        <li>1 User</li>
                                        <li>Email Support</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                    <Button variant='primary' className="mt-4 w-100">Change Plan</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <p className="fw-bold text-uppercase mb-3">Business Pack</p>
                                    <div className="avatar-md mx-auto">
                                        <span className="avatar-title bg-danger-subtle border-danger border border-opacity-25 text-danger fw-normal fs-24 rounded-circle">
                                            <i className="ri-briefcase-2-line"/>
                                        </span>
                                    </div>
                                    <h2 className="my-3">$29 <span className="text-uppercase fs-14 text-muted">/ Month</span></h2>
                                    <ul className="list-unstyled d-grid gap-3">
                                        <li>50 GB Storage</li>
                                        <li>900 GB Bandwidth</li>
                                        <li>2 Domain</li>
                                        <li>10 User</li>
                                        <li>Email Support</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                    <Button variant='danger' className="mt-4 w-100 disabled">Current Plan</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="card-pricing">
                                <Card.Body className="text-center">
                                    <p className="fw-bold text-uppercase mb-3">Enterprise Pack</p>
                                    <div className="avatar-md mx-auto">
                                        <span className="avatar-title bg-info-subtle text-info border-info border border-opacity-25 fw-normal fs-24 rounded-circle">
                                            <i className="ri-community-line"/>
                                        </span>
                                    </div>
                                    <h2 className="my-3">$39 <span className="text-uppercase fs-14 text-muted">/ Month</span></h2>
                                    <ul className="list-unstyled d-grid gap-3">
                                        <li>100 GB Storege</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>10 Domain</li>
                                        <li>Unlimited User</li>
                                        <li>Email Support</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                    <Button variant='primary' className="mt-4 w-100">Change Plan</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default PricingPages
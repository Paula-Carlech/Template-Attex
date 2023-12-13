import { Button, Card, Col, Row } from 'react-bootstrap';

// component
import PageBreadcrumb from '../../components/PageBreadcrumb';
import PageTitle from '../../components/PageTitle';
import Spinner from '../../components/Spinner';

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const BorderedSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Border Spinner</h4>
        <p className="text-muted fs-14">Use the border spinners for a lightweight loading indicator.</p>
        <Spinner className='m-2' />
      </Card.Body>
    </Card>
  )
}

const ColorsSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Colors</h4>
        <p className="text-muted fs-14">You can use any
          of our text color utilities on the standard spinner.</p>

        {(colors || []).map((color, idx) => {
          return <Spinner key={idx} className="m-2" color={color} />;
        })}
      </Card.Body>
    </Card>
  )
}

const AlignmentSpinner = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Alignment</h4>
        <p className="text-muted fs-14">Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.</p>
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      </Card.Body>
    </Card>
  )
}

const SpinnersSizes = () => {
  const sizes: ('lg' | 'md' | 'sm')[] = ['lg', 'md', 'sm'];

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Size</h4>
        <p className="text-muted fs-14">Add <code>.spinner-border-sm</code> and
          <code>.spinner-border.avatar-**</code> to make a smaller spinner that can quickly be used within other components.</p>

        <Row>
          {(sizes || []).map((size, idx) => {
            return (
              <Col lg={6} key={idx}>
                <Spinner className="text-primary m-2" color="primary" size={size} />
                <Spinner className="text-secondary m-2" type="grow" size={size} />
              </Col>
            );
          })}
          <Col lg={6}>
            <Spinner className="spinner-border-sm m-2"></Spinner>
            <Spinner type='grow' className="spinner-grow-sm m-2"></Spinner>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

const GrowingSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Growing Spinner</h4>
        <p className="text-muted fs-14">If you don&apos;t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>

        <Spinner type="grow" className='m-2' />
      </Card.Body>
    </Card>
  )
}

const ColorGrowingSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Color Growing Spinner</h4>
        <p className="text-muted fs-14">You can use any of our text color utilities on the standard spinner.</p>
        {(colors || []).map((color, idx) => {
          return <Spinner key={idx} className="m-2" type="grow" color={color} />;
        })}
      </Card.Body>
    </Card>
  )
}

const PlacementSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Placement</h4>
        <p className="text-muted fs-14">Use <code>flexbox utilities</code>, <code>float utilities</code>, or <code>text alignment</code> utilities to place spinners exactly where you need them in any situation.</p>

        <div className="d-flex align-items-center justify-content-between">
          <strong>Loading...</strong>
          <Spinner className='ms-auto' />
        </div>
      </Card.Body>
    </Card>
  )
}

const ButtonSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Buttons Spinner</h4>
        <p className="text-muted fs-14">Use spinners within buttons to indicate an action is currently processing or taking place.
          You may also swap the text out of the spinner element and utilize button text as needed.</p>

        <Row>
          <Col lg={6}>
            <div className="d-flex flex-wrap gap-2">
              <Button variant='primary' disabled>
                <Spinner className="spinner-border-sm" tag="span" color="white" /> <span className="visually-hidden">Loading...</span>
              </Button>

              <Button variant='primary' disabled>
                <Spinner className="spinner-border-sm me-1" tag="span" color="white" />
                Loading...
              </Button>
            </div>
          </Col>

          <Col lg={6}>
            <div className="d-flex flex-wrap gap-2">
              <Button variant='primary' disabled>
                <Spinner className="spinner-grow-sm" tag="span" color="white" type="grow" /> <span className="visually-hidden">Loading...</span>
              </Button>

              <Button variant='primary' disabled>
                <Spinner className="spinner-grow-sm me-1" tag="span" color="white" type="grow"></Spinner>
                Loading...
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

const Spinners = () => {
  return (
    <>
      <PageTitle pageTitle='Spinners' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Base UI', path: '/ui/spinners' },
          { label: "Spinners", path: "/ui/spinners", active: true },
        ]}
        title={"Spinners"}
      />
      <Row>
        <Col xl={6}>
          <BorderedSpinners />
          <ColorsSpinners />
          <AlignmentSpinner />
          <SpinnersSizes />
        </Col>

        <Col xl={6}>
          <GrowingSpinners />
          <ColorGrowingSpinners />
          <PlacementSpinners />
          <ButtonSpinners />
        </Col>
      </Row>
    </>
  )
}

export default Spinners
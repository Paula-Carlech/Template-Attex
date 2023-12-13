import { Button, ButtonGroup, Card, Col, Dropdown, Row } from 'react-bootstrap';

// component
import PageBreadcrumb from '../../components/PageBreadcrumb';
import PageTitle from '../../components/PageTitle';


interface ButtonsType {
  name: string;
  color: string;
}

const buttonVariants: ButtonsType[] = [
  {
    name: "Primary",
    color: "primary",
  },
  {
    name: "Secondary",
    color: "secondary",
  },
  {
    name: "Success",
    color: "success",
  },
  {
    name: "Danger",
    color: "danger",
  },
  {
    name: "Warning",
    color: "warning",
  },
  {
    name: "Info",
    color: "info",
  },
  {
    name: "Light",
    color: "light"
  },
  {
    name: "Dark",
    color: "dark",
  },

];

const DefultButtons = () => {
  return (
    <>
      <h4 className="header-title">Default Buttons</h4>
      <p className="text-muted fs-14">Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.</p>
      <div className="d-flex flex-wrap gap-2">
        {(buttonVariants || []).map((button, idx) => {
          return (
            <Button
              key={idx}
              variant={button.color}
            >
              {button.name}
            </Button>
          );
        })}
        <Button variant="link">Link</Button>
      </div>
    </>
  )
}

const OutlineButtons = () => {
  return (
    <>
      <h4 className="header-title">Button Outline</h4>
      <p className="text-muted fs-14">Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.</p>
      <div className="d-flex flex-wrap gap-2">
        {(buttonVariants || []).map((button, idx) => {
          return (
            <Button
              key={idx}
              variant={"outline-" + button.color}
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </>
  )
}

const RoundedButtons = () => {
  return (
    <>
      <h4 className="header-title">Button-Rounded</h4>
      <p className="text-muted fs-14">Add <code>.rounded-pill</code> to default button to get rounded corners.</p>
      <div className="d-flex flex-wrap gap-2">
        {(buttonVariants || []).map((button, idx) => {
          return (
            <Button
              key={idx}
              variant={button.color}
              className='rounded-pill'
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </>
  )
}

const OutlineRoundedButtons = () => {
  return (
    <>
      <h4 className="header-title">Button Outline Rounded</h4>
      <p className="text-muted fs-14">Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.</p>
      <div className="d-flex flex-wrap gap-2">
        {(buttonVariants || []).map((button, idx) => {
          return (
            <Button
              key={idx}
              variant={"outline-" + button.color}
              className='rounded-pill'
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </>
  )
}

const SoftButtons = () => {
  return (
    <>
      <h4 className="header-title">Soft Buttons</h4>
      <p className="text-muted fs-14">Use a classes <code>.btn-soft-**</code> to quickly create a soft background color buttons.</p>
      <div className="d-flex flex-wrap gap-2">
        <Button className="btn-soft-primary">
          Primary
        </Button>
        <Button className="btn-soft-secondary">
          Secondary
        </Button>
        <Button className="btn-soft-success">
          Success
        </Button>
        <Button className="btn-soft-danger">
          Danger
        </Button>
        <Button className="btn-soft-warning">
          Warning
        </Button>
        <Button className="btn-soft-info">
          Info
        </Button>
        <Button className="btn-soft-dark">
          Dark
        </Button>
      </div>
    </>
  )
}

const RoundedSoftButtons = () => {
  return (
    <>
      <h4 className="header-title">Soft Rounded Buttons</h4>
      <p className="text-muted fs-14">Use a classes <code>.btn-soft-**</code> <code>.rounded-pill</code> to quickly create a soft background color buttons with rounded.</p>
      <div className="d-flex flex-wrap gap-2">
        <Button className="btn-soft-primary rounded-pill">Primary</Button>
        <Button className="btn-soft-secondary rounded-pill">Secondary</Button>
        <Button className="btn-soft-success rounded-pill">Success</Button>
        <Button className="btn-soft-danger rounded-pill">Danger</Button>
        <Button className="btn-soft-warning rounded-pill">Warning</Button>
        <Button className="btn-soft-info rounded-pill">Info</Button>
        <Button className="btn-soft-dark rounded-pill">Dark</Button>
      </div>
    </>
  )
}

const ButtonSizes = () => {
  return (
    <>
      <h4 className="header-title">Button-Sizes</h4>
      <p className="text-muted fs-14">
        Add <code>.btn-lg</code>, <code>.btn-sm</code> for additional sizes.
      </p>
      <div className="d-flex flex-wrap align-items-center gap-2">
        <Button variant='primary' className="btn-lg">
          Large
        </Button>
        <Button variant='info'>
          Normal
        </Button>
        <Button variant='success' className="btn-sm">
          Small
        </Button>
      </div>
    </>
  )
}

const DisabledButton = () => {
  return (
    <>
      <h4 className="header-title">Button-Disabled</h4>
      <p className="text-muted fs-14">
        Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant='info' disabled>
          Info
        </Button>
        <Button variant='success' disabled>
          Success
        </Button>
        <Button variant='danger' disabled>
          Danger
        </Button>
        <Button variant='dark' disabled>
          Dark
        </Button>
      </div>
    </>
  )
}

const IconButtons = () => {
  return (
    <>
      <h4 className="header-title">Icon Buttons</h4>
      <p className="text-muted fs-14">
        Icon only button.
      </p>

      <div className="d-flex flex-wrap gap-2">
        <Button variant='light'>
          <i className="ri-heart-line"/>
        </Button>
        <Button variant='danger'>
          <i className="ri-windows-line"/>
        </Button>
        <Button variant='dark'>
          <i className="ri-music-line"/>
        </Button>
        <Button variant='primary'>
          <i className="ri-shield-star-line"/>
        </Button>
        <Button variant='success'>
          <i className="ri-thumb-up-line"/>
        </Button>
        <Button variant='info' >
          <i className="ri-keyboard-line"/>
        </Button>
        <Button variant='warning'>
          <i className="ri-school-line"/>
        </Button>

        <Button variant='light'>
          <i className="ri-hearts-fill me-1"/> <span>Like</span>
        </Button>
        <Button variant='warning'>
          <i className="ri-rocket-line me-1"/> <span>Launch</span>
        </Button>
        <Button variant='info'><
          i className="ri-server-line me-1"/> <span>Cloud Hosting</span>
        </Button>

        <Button className="btn-outline-success">
          <i className="ri-money-pound-circle-line me-1"/> Money
        </Button>
        <Button className="btn-outline-primary">
          <i className="ri-paypal-line me-1"/> PayPal
        </Button>
        <Button className="btn-outline-danger">
          <i className="ri-equalizer-line me-1"/> Settings
        </Button>
      </div>
    </>
  )
}

const BlockButton = () => {
  return (
    <>
      <h4 className="header-title">Block Button</h4>
      <p className="text-muted fs-14">
        Create block level buttons by adding class <code>.d-grid</code> to parent div.
      </p>

      <div className="d-grid gap-2">
        <Button variant='primary' className="btn-sm btn-primary">Block Button</Button>
        <Button variant='success' className="btn-lg btn-success">Block Button</Button>
      </div>
    </>
  )
}

const ButtonGroups = () => {
  return (
    <>
      <h4 className="header-title">Button Group</h4>

      <p className="text-muted fs-14">
        Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.
      </p>

      <ButtonGroup className="mb-2">
        <Button variant='light'>Left</Button>
        <Button variant='light'>Middle</Button>
        <Button variant='light'>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2 me-1">
        <Button variant='light'>1</Button>
        <Button variant='light'>2</Button>
        <Button variant='light'>3</Button>
        <Button variant='light'>4</Button>
      </ButtonGroup>

      <ButtonGroup className="mb-2 me-1">
        <Button variant='light'>5</Button>
        <Button variant='light'>6</Button>
        <Button variant='light'>7</Button>
      </ButtonGroup>

      <ButtonGroup className="mb-2">
        <Button variant='light'>8</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button variant='light'>1</Button>
        <Button variant='primary'>2</Button>
        <Button variant='light'>3</Button>
        <ButtonGroup>
          <Dropdown>
            <Dropdown.Toggle variant='light' > Dropdown <span className="caret"></span> </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="a" >Dropdown link</Dropdown.Item>
              <Dropdown.Item as="a" >Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </ButtonGroup>

      <Row>
        <Col md={3}>
          <div className="btn-group-vertical mb-2">
            <Button variant='light'>Top</Button>
            <Button variant='light'>Middle</Button>
            <Button variant='light'>Bottom</Button>
          </div>
        </Col>
        <div className="col-md-3">
          <div className="btn-group-vertical mb-2">
            <Button variant='light'>Button 1</Button>
            <Button variant='light'>Button 2</Button>
            <Dropdown>
              <Dropdown.Toggle variant='light' data-bs-toggle="dropdown" aria-expanded="false"> Button 3 <span className="caret"></span> </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as='a'>Dropdown link</Dropdown.Item>
                <Dropdown.Item as="a" className="dropdown-item">Dropdown link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Row>
    </>
  )
}

const ToggleButton = () => {
  return (
    <>
      <h4 className="header-title">Toggle Button</h4>
      <p className="text-muted fs-14">Add <code>data-bs-toggle="button"</code> to toggle a button’s <code>active</code> state. If you’re pre-toggling a button, you must manually add the <code>.active</code> class <strong>and</strong> <code>aria-pressed="true"</code> to ensure that it is conveyed appropriately to assistive technologies.</p>
      <div className='d-flex flex-wrap gap-1'>
      <Button variant='primary' data-bs-toggle="button">
        Toggle button
      </Button>
      <Button variant='primary' className="active">
        Active toggle button
      </Button>
      <Button variant='primary' disabled>Disabled toggle button</Button>
      </div>
    </>
  )
}

const TagButtons = () => {
  return (
    <>
      <h4 className="header-title">Button tags</h4>
      <p className="text-muted fs-14">The <code>.btn</code> classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can also use these classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
      <div className='d-flex flex-wrap gap-1'>
      <Button as="a" variant='primary' role="button">Link</Button>
      <Button variant='primary' type="submit">Button</Button>
      <Button as='input' type="button" value="Input" />
      <Button as='input' type="submit" value="Submit" />
      <Button as='input' type="reset" value="Reset" />
      </div>
    </>
  )
}

const Buttons = () => {
  return (
    <>
    <PageTitle pageTitle='Buttons' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Base UI', path: '/ui/buttons' },
          { label: "Buttons", path: "/ui/buttons", active: true },
        ]}
        title={"Buttons"}
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <DefultButtons />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <OutlineButtons />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <RoundedButtons />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <OutlineRoundedButtons />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <SoftButtons />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <RoundedSoftButtons />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <ButtonSizes />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <DisabledButton />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <IconButtons />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <BlockButton />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <ButtonGroups />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Row>
            <Col xl={12}>
              <Card>
                <Card.Body>
                  <ToggleButton />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Body>
                  <TagButtons/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Buttons
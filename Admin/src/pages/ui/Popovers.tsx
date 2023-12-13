 import { Button, Card, Col, OverlayProps, OverlayTrigger, Popover, Row } from 'react-bootstrap';

// component
import PageBreadcrumb from '../../components/PageBreadcrumb';
import PageTitle from '../../components/PageTitle';

interface PopoverDirection {
  placement: OverlayProps['placement'];
};

const Basic = () => {

  const basicPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover title</Popover.Header>
      <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
    </Popover>
  );

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Simple Popover</h4>
        <p className="text-muted fs-14">
          Popover is a component which displays a box with a content after a click on an
          element - similar to the tooltip but can contain more content.
        </p>
        <OverlayTrigger trigger="click" placement="right" overlay={basicPopover}>
          <Button variant='danger'>Click to toggle popover</Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  )
}

const DimissibleOnClick = () => {

  const dismissiblePopover = (
    <Popover>
      <Popover.Header as="h3">Dismissible popover</Popover.Header>
      <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
    </Popover>
  );

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Dismiss on Next Click</h4>
        <p className="text-muted fs-14">Use the <code>focus</code> trigger to dismiss popovers
          on the user&apos;s next click of a different element than the toggle element.</p>
        <OverlayTrigger trigger="focus" placement="right" overlay={dismissiblePopover}>
          <Button variant='success'>Dismissible popover</Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  )
}

const HoverPopover = () => {

  const hoverPopover = (
    <Popover >
      <Popover.Header as="h3">Ohh Wow !</Popover.Header>
      <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
    </Popover>
  );

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Hover</h4>
        <p className="text-muted fs-14">Use the attribute <code>data-bs-trigger="hover"</code>
          &nbsp;to show the popover on hovering the element.</p>
        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={hoverPopover}>
          <Button variant='dark' > Please Hover Me</Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  )
}

const Direction = () => {

  const directions: PopoverDirection[] = [
    { placement: 'top' },
    { placement: 'bottom' },
    { placement: 'right' },
    { placement: 'left' },
  ];

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Four Directions</h4>
        <p className="text-muted fs-14">Four options are available: top, right, bottom, and
          left aligned.</p>
        {(directions || []).map((direction, idx) => (
          <OverlayTrigger
            trigger="click"
            key={idx}
            placement={direction.placement}
            overlay={
              <Popover id={`popover-positioned-${direction.placement}`}>
                <Popover.Body>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Body>
              </Popover>
            }
          >
            <Button variant="primary" className="me-1">
              Popover on {direction.placement}
            </Button>
          </OverlayTrigger>
        ))}
      </Card.Body>
    </Card>
  )
}

const DisabledPopover = () => {

  const disabledPopover = (
    <Popover>
      <Popover.Body>Disabled popover</Popover.Body>
    </Popover>
  );

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Disabled Elements</h4>
        <p className="text-muted fs-14">Elements with the <code>disabled</code> attribute
          aren&apos;t interactive, meaning users cannot hover or click them to trigger a
          popover (or tooltip). As a workaround, you&apos;ll want to trigger the popover from a
          wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</p>

        <OverlayTrigger placement="right" overlay={disabledPopover}>
          <span className="d-inline-block">
            <Button disabled style={{ pointerEvents: 'none' }}>
              Disabled button
            </Button>
          </span>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  )
}

const CustomPopovers = () => {

  const customPopover = (variant: string) => (
    <Popover className={`${variant}-popover`}>
      <Popover.Header as="h3">Primary Popover</Popover.Header>
      <Popover.Body>This popover is themed via CSS variables.</Popover.Body>
    </Popover>
  )

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Custom Popovers </h4>
        <p className="text-muted fs-14">You can customize the appearance of popovers using CSS variables. We set a custom class with&nbsp;
          <code>data-bs-custom-class="primary-popover"</code> to scope our custom appearance and use it to override some of the
          local CSS variables.</p>
        <div className="d-flex flex-wrap gap-2">
          <OverlayTrigger trigger="click" placement="right" overlay={customPopover('primary')}>
            <Button variant='primary'>Primary popover</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" placement="right" overlay={customPopover('success')}>
            <Button variant='success'>Success popover</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" placement="right" overlay={customPopover('danger')}>
            <Button variant='danger'>Danger popover</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" placement="right" overlay={customPopover('info')}>
            <Button variant='info'>Info popover</Button>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Card>
  )
}

const Popovers = () => {
  return (
    <>
      <PageTitle pageTitle='Popovers' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Base UI', path: '/ui/popovers' },
          { label: "Popovers", path: "/ui/popovers", active: true },
        ]}
        title={"Popovers"}
      />
      <Row>
        <Col xl={6}>
          <Basic />
          <DimissibleOnClick />
          <HoverPopover />
        </Col>

        <Col xl={6}>
          <Direction />
          <CustomPopovers />
          <DisabledPopover />
        </Col>
      </Row>
    </>
  )
}

export default Popovers

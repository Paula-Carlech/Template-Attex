import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { useModal, useToggle } from '../../hooks';
import { Link } from 'react-router-dom';

// component
import PageBreadcrumb from '../../components/PageBreadcrumb';
import PageTitle from '../../components/PageTitle';

// logo
import logo from '../../assets/images/logo.png';
import darkLogo from '../../assets/images/logo-dark.png';

const ModalSizes = () => {
  const [isStandardOpen, toggleStandard] = useToggle();
  const { isOpen, size, className, scroll, toggleModal, openModalWithSize, openModalWithClass, openModalWithScroll } =
    useModal();
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Bootstrap Modals</h4>
        <p className="text-muted fs-14">
          A rendered modal with header, body, and set of actions in the footer.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <Button variant='primary' onClick={toggleStandard}>Standard Modal</Button>
          <Button variant='info' onClick={() => openModalWithSize('lg')}>Large Modal</Button>
          <Button variant='success' onClick={() => openModalWithSize('sm')}>Small Modal</Button>
          <Button variant='primary' onClick={() => openModalWithClass('modal-full-width')}>Full Width Modal</Button>
          <Button variant='secondary' onClick={openModalWithScroll} >Scrollable Modal</Button>
        </div>

        <Modal show={isStandardOpen} onHide={toggleStandard}>
          <Modal.Header onHide={toggleStandard} closeButton>
            <Modal.Title as="h4" >Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Text in a modal</h5>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <hr />
            <h5>Overflowing text to show scroll behavior</h5>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='light' onClick={toggleStandard}>Close</Button>
            <Button variant='primary' onClick={toggleStandard}>Save changes</Button>
          </Modal.Footer>
        </Modal>

        <Modal className="fade" show={isOpen} onHide={toggleModal} dialogClassName={className} size={size} scrollable={scroll}>
          <Modal.Header onHide={toggleModal} closeButton>
            <h4 className="modal-title" >Modal Heading</h4>
          </Modal.Header>
          <Modal.Body>
            ...
            {scroll && (
              <>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={toggleModal}>
              Close
            </Button>{' '}
            <Button onClick={toggleModal}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  )
}

const ModalsWithPages = () => {

  const [signUpModal, toggleSignUp] = useToggle();
  const [signInModal, toggleSignIn] = useToggle();

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Modal with Pages</h4>
        <p className="text-muted fs-14">Examples of custom modals.</p>
        <div className="d-flex flex-wrap gap-2">
          <Button variant='primary' onClick={toggleSignUp}>Sign Up Modal</Button>
          <Button variant='info' onClick={toggleSignIn}>Log In Modal</Button>
        </div>
        <Modal show={signUpModal} onHide={toggleSignUp}>
          <Modal.Body>
            <div className="auth-brand text-center mt-2 mb-4 position-relative top-0">
              <Link to="#" className="logo-dark">
                <span><img src={darkLogo} alt="dark logo" height="22" /></span>
              </Link>
              <Link to="#" className="logo-light">
                <span><img src={logo} alt="logo" height="22" /></span>
              </Link>
            </div>

            <form className="ps-3 pe-3" action="#">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Name</label>
                <input className="form-control" type="email" id="username" required placeholder="Michael Zenaty" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">Email address</label>
                <input className="form-control" type="email" id="emailaddress" required placeholder="john@deo.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input className="form-control" type="password" required id="password" placeholder="Enter your password" />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="customCheck1" />
                  <label className="form-check-label" htmlFor="customCheck1">I accept <Link to="#">Terms and Conditions</Link></label>
                </div>
              </div>
              <div className="mb-3 text-center">
                <Button variant='primary' type="submit">Sign Up Free</Button>
              </div>
            </form>

          </Modal.Body>
        </Modal>

        <Modal className="fade" show={signInModal} onHide={toggleSignIn}>
          <Modal.Body>
            <div className="auth-brand text-center mt-2 mb-4 position-relative top-0">
              <Link to="#" className="logo-dark">
                <span><img src={darkLogo} alt="dark logo" height="22" /></span>
              </Link>
              <Link to="#" className="logo-light">
                <span><img src={logo} alt="logo" height="22" /></span>
              </Link>
            </div>
            <form action="#" className="ps-3 pe-3">
              <div className="mb-3">
                <label htmlFor="emailaddress1" className="form-label">Email address</label>
                <input className="form-control" type="email" id="emailaddress1" required placeholder="john@deo.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="password1" className="form-label">Password</label>
                <input className="form-control" type="password" required id="password1" placeholder="Enter your password" />
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="customCheck2" />
                  <label className="form-check-label" htmlFor="customCheck2">Remember me</label>
                </div>
              </div>

              <div className="mb-3 text-center">
                <button className="btn rounded-pill btn-primary" type="submit">Sign In</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  )
}

const ModalWithAlerts = () => {
  const { isOpen, className, toggleModal, openModalWithClass } = useModal();

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Modal based Alerts</h4>
        <p className="text-muted fs-14">Show different contexual alert messages using modal component</p>
        <div className="d-flex flex-wrap gap-2">
          <Button variant='success' onClick={() => openModalWithClass('success')}>Success Alert</Button>
          <Button variant='info' onClick={() => openModalWithClass('info')}>Info Alert</Button>
          <Button variant='warning' onClick={() => openModalWithClass('warning')}>Warning Alert</Button>
          <Button variant='danger' onClick={() => openModalWithClass('danger')}>Danger Alert</Button>
        </div>
        <Modal className="fade" show={isOpen} onHide={toggleModal} size="sm">
          <div className={`modal-filled bg-${className}`}>
            <Modal.Body className="p-4">
              <div className="text-center">
                <i className="ri-check-line h1"/>
                <h4 className="mt-2">Well Done!</h4>
                <p className="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <Button variant='light' className="my-2" onClick={toggleModal}>Continue</Button>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </Card.Body>
    </Card>
  )
}

const ModalPositions = () => {
  const { isOpen, className, toggleModal, openModalWithClass } = useModal();

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Modal Position</h4>
        <p className="text-muted fs-14">Specify the position for the modal. You can display modal at top, bottom, center or right of page by specifying
          classes <code>modal-top</code>, <code>modal-bottom</code>, <code>modal-dialog-centered</code> and <code>modal-right</code>
          respectively.
        </p>
        <div className="d-flex flex-wrap gap-2">

          <Button variant='secondary' onClick={() => openModalWithClass('modal-top')}>Top Modal</Button>
          <Button variant='secondary' onClick={() => openModalWithClass('modal-bottom')}>Bottom Modal</Button>
          <Button variant='secondary' onClick={() => openModalWithClass('modal-dialog-centered')}>Center modal</Button>
          <Button variant='secondary' onClick={() => openModalWithClass('modal-right')}>Rightbar Modal</Button>
        </div>
        <Modal show={isOpen} onHide={toggleModal} dialogClassName={className}>
          <Modal.Header onHide={toggleModal} closeButton>
            <h4 className="modal-title">Modal Heading</h4>
          </Modal.Header>
          <Modal.Body>
            <h5>Text in a modal</h5>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='light' onClick={toggleModal}>Close</Button>
            <Button variant='primary' onClick={toggleModal}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  )
}

const ModalWithColoredHeader = () => {
  const { isOpen, className, toggleModal, openModalWithClass } = useModal();

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Colored Header Modals</h4>
        <p className="text-muted fs-14">A rendered modal with header having contexual background color.</p>
        <Modal className="fade" show={isOpen} onHide={toggleModal}>
          <Modal.Header className={`modal-colored-header bg-${className}`}>
            <h4 className="modal-title" id="primary-header-modalLabel">Modal Heading</h4>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </Modal.Header>
          <Modal.Body>
            <h5 className="mt-0">{className} Background</h5>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='light' onClick={toggleModal}>Close</Button>
            <Button variant={className}>Save changes</Button>
          </Modal.Footer>
        </Modal>
        <div className="d-flex flex-wrap gap-2">
          <Button variant='primary' onClick={() => openModalWithClass('primary')}>Primary Header</Button>
          <Button variant='success' onClick={() => openModalWithClass('success')}>Success Header</Button>
          <Button variant='info' onClick={() => openModalWithClass('info')}>Info Header</Button>
          <Button variant='warning' onClick={() => openModalWithClass('warning')}>Warning Header</Button>
          <Button variant='danger' onClick={() => openModalWithClass('danger')}>Danger Header</Button>
          <Button variant='dark' onClick={() => openModalWithClass('dark')}>Dark Header</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const ModalWithFilled = () => {
  const { isOpen, className, toggleModal, openModalWithClass } = useModal();

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Filled Modals</h4>
        <p className="text-muted fs-14">A rendered modal with header, body and footer having contexual background color.</p>
        <Modal show={isOpen} onHide={toggleModal} className="fade" >
          <div className={`modal-filled bg-${className}`}>
            <Modal.Header onHide={toggleModal} closeButton>
              <h4 className="modal-title">{className} Filled Modal</h4>
            </Modal.Header>
            <Modal.Body>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='light' onClick={toggleModal}>Close</Button>
              <Button variant='outline-light' onClick={toggleModal} >Save changes</Button>
            </Modal.Footer>
          </div>
        </Modal>
        <div className="d-flex flex-wrap gap-2">
          <Button variant='primary' onClick={() => openModalWithClass('primary')}>Primary Filled</Button>
          <Button variant='success' onClick={() => openModalWithClass('success')}>Success Filled</Button>
          <Button variant='info' onClick={() => openModalWithClass('info')}>Info Filled</Button>
          <Button variant='warning' onClick={() => openModalWithClass('warning')}>Warning Filled</Button>
          <Button variant='danger' onClick={() => openModalWithClass('danger')}>Danger Filled</Button>
          <Button variant='dark' onClick={() => openModalWithClass('dark')}>Dark Filled</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const MultipleModal = () => {
  const [isOpen, toggleModal] = useToggle();
  const [isNextOpen, toggleNextModal] = useToggle();
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Multiple Modal</h4>
        <p className="text-muted fs-14">Display a series of modals one by one to guide your users on multiple aspects or take step wise input.</p>
        <Modal show={isOpen} onHide={toggleModal}>
          <Modal.Header closeButton>
            <h4 className="modal-title" id="multiple-oneModalLabel">Modal Heading</h4>
          </Modal.Header>
          <Modal.Body>
            <h5 className="mt-0">Text in a modal</h5>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={() => { toggleModal(); toggleNextModal() }}>Next</Button>
          </Modal.Footer>
        </Modal>
        <Modal className="fade" show={isNextOpen} onHide={toggleNextModal} >
          <Modal.Header closeButton>
            <h4 className="modal-title" id="multiple-twoModalLabel">Modal Heading</h4>
          </Modal.Header>
          <Modal.Body >
            <h5 className="mt-0">Text in a modal</h5>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={toggleNextModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div className="d-flex flex-wrap gap-2">
          <Button variant='primary' onClick={toggleModal}>Multiple Modal</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const ToggleBetweenModals = () => {
  const [isOpen, toggleModal] = useToggle();
  const [isNextOpen, toggleNextModal] = useToggle();
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Toggle Between Modals</h4>
        <p className="text-muted fs-14">Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes.</p>
        <Modal className="fade" show={isOpen} onHide={toggleModal} centered>
          <Modal.Header closeButton>
            <h5 className="modal-title">Modal 1</h5>
          </Modal.Header>
          <Modal.Body className="modal-body">
            Show a second modal and hide this one with the button below.
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={() => { toggleModal(); toggleNextModal() }}>Open second modal</Button>
          </Modal.Footer>
        </Modal>
        <Modal className="fade" show={isNextOpen} onHide={toggleNextModal} centered>
          <Modal.Header closeButton>
            <h5 className="modal-title">Modal 2</h5>
          </Modal.Header>
          <Modal.Body>
            Hide this modal and show the first with the button below.
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={() => { toggleModal(); toggleNextModal() }}>Back to first</Button>
          </Modal.Footer>
        </Modal>
        <Button variant='secondary' onClick={toggleModal}>Open first modal</Button>
      </Card.Body>
    </Card>
  )
}

const FullscreenModal = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Fullscreen Modal</h4>
        <p className="text-muted fs-14">Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code></p>
        <div className="hstack gap-2 flex-wrap">
          <Button variant="primary" data-bs-toggle="modal" data-bs-target="#fullscreeexampleModal">
            Fullscreen Modal
          </Button>
          <Button variant="primary" data-bs-target="#exampleModalFullscreenSm">Full Screen Below sm</Button>
          <Button variant="primary" data-bs-target="#exampleModalFullscreenMd">Full Screen Below md</Button>
          <Button variant="primary" data-bs-target="#exampleModalFullscreenLg">Full Screen Below lg</Button>
          <Button variant="primary" data-bs-target="#exampleModalFullscreenXl">Full Screen Below xl</Button>
          <Button variant="primary" data-bs-target="#exampleModalFullscreenXxl">Full Screen Below xxl</Button>
        </div>

        <div className="modal fade" id="fullscreeexampleModal" tabIndex={-1} aria-labelledby="fullscreeexampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="fullscreeexampleModalLabel">Full Screen Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <Button href="#" variant='light' data-bs-dismiss="modal">Close</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalFullscreenSm" tabIndex={-1} aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalFullscreenSmLabel">Full screen below sm</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <Button href="#" variant='light' data-bs-dismiss="modal">Close</Button>
                <Button variant='primary' type="button">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalFullscreenMd" tabIndex={-1} aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-md-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalFullscreenMdLabel">Full screen below md</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <Button href="#" variant='light' data-bs-dismiss="modal">Close</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalFullscreenLg" tabIndex={-1} aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-lg-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalFullscreenLgLabel">Full screen below lg</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <Button href="#" variant='light' data-bs-dismiss="modal">Close</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalFullscreenXl" tabIndex={-1} aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalFullscreenXlLabel">Full screen below xl</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <Button href="#" variant='light' data-bs-dismiss="modal">Close</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalFullscreenXxl" tabIndex={-1} aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-xxl-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <Button href="#" variant='light' data-bs-dismiss="modal">Close</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>

      </Card.Body>
    </Card>
  )
}
const StaticBackdropModal = () => {
  const [isOpen, toggleModal] = useToggle();
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Static Backdrop</h4>
        <p className="text-muted fs-14">When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>
        <div className="d-flex flex-wrap gap-2">
          <Button variant='info' onClick={toggleModal}>
            Static Backdrop
          </Button>
        </div>
        <Modal className="fade" show={isOpen} onHide={toggleModal} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <p className="m-0">I will not close if you click outside me. Don't even try to press escape key.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={toggleModal}>Close</Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  )
}

const VaryingModalContent = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Varying Modal Content</h4>
        <p className="text-muted fs-14">Have a bunch of buttons that all trigger the same modal with slightly different contents? Use
          <code>event.relatedTarget</code> and <Link
            to="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes" target="_blank">HTML <code>data-bs-*</code>
            attributes</Link> to vary the contents of the modal depending on which button was clicked.</p>

        <div className="hstack gap-2 flex-wrap">
          <Button variant="primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</Button>
          <Button variant="primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</Button>
          <Button variant="primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</Button>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <Button variant="primary">Send message</Button>
              </div>
            </div>
          </div>
        </div>

      </Card.Body>
    </Card>
  )
}
const Modals = () => {
  return (
    <>
      <PageTitle pageTitle='Modals' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Base UI', path: '/ui/modals' },
          { label: "Modals", path: "/ui/modals", active: true },
        ]}
        title={"Modals"}
      />
      <Row>
        <Col xl={6}>
          <ModalSizes />
        </Col>
        <Col xl={6}>
          <ModalsWithPages />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ModalWithAlerts />
        </Col>
        <Col xl={6}>
          <ModalPositions />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ModalWithColoredHeader />
        </Col>
        <Col xl={6}>
          <ModalWithFilled />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <MultipleModal />
        </Col>
        <Col xl={6}>
          <ToggleBetweenModals />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <FullscreenModal />
        </Col>
        <Col xl={6}>
          <StaticBackdropModal />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <VaryingModalContent />
        </Col>
      </Row>
    </>
  )
}

export default Modals
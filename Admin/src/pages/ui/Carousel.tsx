import { useState } from 'react';
import { Card, Col, Row, Carousel as CarouselBootstrap, Image } from 'react-bootstrap';

// component
import PageBreadcrumb from '../../components/PageBreadcrumb';

// images
import Img1 from '../../assets/images/small/small-1.jpg'
import Img2 from '../../assets/images/small/small-2.jpg'
import Img3 from '../../assets/images/small/small-3.jpg'
import Img4 from '../../assets/images/small/small-4.jpg'
import Img5 from '../../assets/images/small/small-5.jpg'
import Img6 from '../../assets/images/small/small-6.jpg'
import Img7 from '../../assets/images/small/small-7.jpg'
import PageTitle from '../../components/PageTitle';

const DefaultSlides = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Slides Only</h4>
          <p className="text-muted fs-14">Here&apos;s a carousel with slides only.
            Note the presence of the <code>.d-block</code>
            &nbsp;and <code>.img-fluid</code> on carousel images
            to prevent browser default image alignment.
          </p>
          <CarouselBootstrap indicators={false} controls={false}>
            <CarouselBootstrap.Item className="active">
              <Image fluid className="d-block"
                src={Img1}
                alt="First slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image fluid className="d-block"
                src={Img2}
                alt="Second slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image fluid className="d-block"
                src={Img3}
                alt="Third slide"
              />
            </CarouselBootstrap.Item>
          </CarouselBootstrap>
        </Card.Body>
      </Card>
    </>
  )
}

const SlidesWithControls = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">With Controls</h4>
        <p className="text-muted fs-14">Adding in the previous and next controls:</p>
        <CarouselBootstrap indicators={false}>
          <CarouselBootstrap.Item>
            <Image fluid className="d-block"
              src={Img4}
              alt="First slide"
            />
          </CarouselBootstrap.Item>
          <CarouselBootstrap.Item>
            <Image fluid className="d-block"
              src={Img1}
              alt="Second slide"
            />
          </CarouselBootstrap.Item>
          <CarouselBootstrap.Item>
            <Image fluid className="d-block"
              src={Img2}
              alt="Third slide"
            />
          </CarouselBootstrap.Item>
        </CarouselBootstrap>
      </Card.Body>
    </Card>
  )
}

const SlidesWithIndicators = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">With Indicators</h4>
          <p className="text-muted fs-14">You can also add the indicators to the
            carousel, alongside the controls, too.</p>

          <CarouselBootstrap activeIndex={index} onSelect={handleSelect}>
            <CarouselBootstrap.Item >
              <Image fluid className="d-block"
                src={Img3}
                alt="First slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item >
              <Image fluid className="d-block"
                src={Img2}
                alt="Second slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image fluid className="d-block"
                src={Img1}
                alt="Third slide"
              />
            </CarouselBootstrap.Item>
          </CarouselBootstrap>
        </Card.Body>
      </Card>
    </>
  )
}

const SlidesWithCaptions = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">With Captions</h4>
          <p className="text-muted fs-14">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.</p>
          <CarouselBootstrap indicators={false} >
            <CarouselBootstrap.Item>
              <Image
                src={Img1}
                fluid
                alt="First slide"
                className="d-block"
              />
              <CarouselBootstrap.Caption className="d-none d-md-block">
                <h3 className="text-white">First slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image
                src={Img3}
                alt="Second slide"
                fluid
                className="d-block"
              />
              <CarouselBootstrap.Caption className="d-none d-md-block">
                <h3 className="text-white">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image
                src={Img2}
                fluid
                alt="Third slide"
                className="d-block"
              />
              <CarouselBootstrap.Caption className="d-none d-md-block">
                <h3 className="text-white">Third slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
          </CarouselBootstrap>
        </Card.Body>
      </Card>
    </>
  )
}

const CrossFade = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Crossfade</h4>
          <p className="text-muted fs-14">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
          <CarouselBootstrap fade indicators={false} >
            <CarouselBootstrap.Item>
              <Image
                fluid
                className="d-block"
                src={Img1}
                alt="First slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image
                fluid
                className="d-block img-fluid"
                src={Img2}
                alt="Second slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image
                fluid
                className="d-block img-fluid"
                src={Img3}
                alt="Third slide" />
            </CarouselBootstrap.Item>
          </CarouselBootstrap>
        </Card.Body>
      </Card>
    </>
  )
}

const IndividualInterval = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Individual Interval</h4>
          <p className="text-muted fs-14">Add <code>data-bs-interval=""</code> to a <code>.carousel-item</code> to change the amount of time to delay between automatically cycling to the next item.</p>

          <CarouselBootstrap indicators={false}>
            <CarouselBootstrap.Item interval={1000}>
              <Image
                fluid
                src={Img4}
                className="d-block w-100"
                alt="First slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item interval={2000}>
              <Image
                fluid
                src={Img2}
                className="d-block w-100"
                alt="Second slide"
              />
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image
                fluid
                src={Img1}
                className="d-block w-100"
                alt="Third slide"
              />
            </CarouselBootstrap.Item>
          </CarouselBootstrap>

        </Card.Body>
      </Card>
    </>
  )
}

const DarkVariant = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Dark variant</h4>
          <p className="text-muted font-14">Add <code>.carousel-dark</code> to the <code>.carousel</code> for darker controls, indicators, and captions. Controls are inverted compared to their default white fill with the <code>filter</code> CSS property. Captions and controls have additional Sass variables that customize the <code>color</code> and <code>background-color</code>.</p>

          <CarouselBootstrap className="carousel-dark" indicators={true}>
            <CarouselBootstrap.Item interval={1000}>
              <Image
                fluid
                src={Img5}
                alt="First Slide"
              />
              <CarouselBootstrap.Caption className="d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item interval={2000}>
              <Image
                fluid
                src={Img6}
                alt="Second Slide"
              />
              <CarouselBootstrap.Caption className="d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item>
              <Image
                fluid
                src={Img7}
                alt="Third Slide"
              />
              <CarouselBootstrap.Caption className="d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
          </CarouselBootstrap>
        </Card.Body>
      </Card>
    </>
  )
}
const Carousel = () => {
  return (
    <>
      <PageTitle pageTitle='Carousel' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Base UI', path: '/ui/carousel' },
          { label: "Carousel", path: "/ui/carousel", active: true },
        ]}
        title={"Carousel"}
      />
      <Row>
        <Col lg={6}>
          <DefaultSlides />
        </Col>

        <Col lg={6}>
          <SlidesWithControls />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <SlidesWithIndicators />
        </Col>
        <Col lg={6}>
          <SlidesWithCaptions />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <CrossFade />
        </Col>
        <Col lg={6}>
          <IndividualInterval />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <DarkVariant />
        </Col>
      </Row>
    </>
  )
}

export default Carousel
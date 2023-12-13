
import { Card, Col, Row } from 'react-bootstrap';
import Nouislider from 'nouislider-react';

// hooks
import { useRangeSlider } from '../../hooks';

// component
import PageBreadcrumb from '../../components/PageBreadcrumb';
import PageTitle from '../../components/PageTitle';

// styles
import 'nouislider/distribute/nouislider.css';

const RangeSlider = () => {
  const { selectedVals, selectedRanges, onSlide, onSlide2 } = useRangeSlider();

  return (
    <>
      <PageTitle pageTitle='Range Slider' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Extended UI', path: '/extended-ui/range-slider' },
          { label: "Range Slider", path: "/extended-ui/range-slider", active: true },
        ]}
        title={"Range Slider"}
      />

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Single</h4>
              <p className="text-muted fs-14">Start with single selecrtor</p>

              <Nouislider
                range={{ min: 0, max: 100 }}
                start={[20]}
                connect
                onSlide={(render, handle, value, un, percent) => onSlide(1, value, percent)}
              />
              <p className="mt-2 mb-0">
                Value:{' '}
                {selectedVals ? (
                  <span>
                    {selectedVals[1]['textValue']}, &nbsp;
                    {selectedVals[1]['percent']}%
                  </span>
                ) : null}
              </p>

            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Slider Step</h4>
              <p className="text-muted fs-14">Slider with step value</p>
              <Nouislider
                range={{ min: 0, max: 100 }}
                start={[20]}
                step={10}
                connect
                onSlide={(render, handle, value, un, percent) => onSlide(2, value, percent)}
              />
              <p className="mt-2 mb-0">
                Value:{' '}
                {selectedVals ? (
                  <span>
                    {selectedVals[2]['textValue']}, &nbsp;
                    {selectedVals[2]['percent']}%
                  </span>
                ) : null}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>

          <Card>
            <Card.Body>
              <h4 className="header-title">Range</h4>
              <p className="text-muted fs-14">Set up range with negative values</p>
              <Nouislider
                range={{ min: 10, max: 150 }}
                start={[20, 45]}
                connect
                onSlide={(render, handle, value, un, percent) => onSlide2(1, value)}
              />
              <p className="mt-2 mb-0">
                Value: {selectedRanges ? <span>{selectedRanges[1]}</span> : null}
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Range Slider with Steps</h4>
              <p className="text-muted fs-14">Slider with range selecrtor with fixed step value</p>
              <Nouislider
                range={{ min: 10, max: 150 }}
                start={[20, 45]}
                step={15}
                connect
                onSlide={(render, handle, value, un, percent) => onSlide2(2, value)}
              />
              <p className="mt-2 mb-0">
                Value: {selectedRanges ? <span>{selectedRanges[2]}</span> : null}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default RangeSlider
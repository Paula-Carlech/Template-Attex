import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap"
import PageTitle from "../../components/PageTitle"
import PageBreadcrumb from "../../components/PageBreadcrumb"
import { Rate } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import HeartIcon from '@rsuite/icons/legacy/Heart';

const CustomRating = () => {

  const [ratingCount, setRatingCount] = useState<number>(2);
  const [maxRatings, setMaxRating] = useState<number>(5);
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);

  /**
   * get value of the rating
   */
  const handleGetValue = () => {
    alert(ratingCount);
  }

  const handleRating = () => {
    setRatingCount(Number(prompt("Enter Value")!));
  }

  const handleGetMaxValue = () => {
    alert(maxRatings);
  }

  const handleMaxValue = () => {

    setMaxRating(Number(prompt("Enter Value")!));
  }

  const handleReadOnlyValue = () => {
    alert(isReadOnly)
  }
  
  const handleReadOnly = () => {
    setIsReadOnly(!isReadOnly);
  }

  const handleReset = () => {
    setMaxRating(5);
    setRatingCount(0);
  }

  return (
    <>{maxRatings && <Rate size="md" color="red" onChange={setRatingCount} readOnly={isReadOnly} max={maxRatings} value={Number(ratingCount)} allowHalf />}

      <div className="d-flex flex-wrap gap-2 mt-3">
        <Button variant="primary" className="btn-sm" onClick={handleGetValue}>Get value</Button>
        <Button variant="primary" className="btn-sm" onClick={handleRating}>Set value</Button>
        <Button variant="primary" className="btn-sm" onClick={handleGetMaxValue}>Get max value</Button>
        <Button variant="primary" className="btn-sm" onClick={handleMaxValue}>Set max value</Button>
        <Button variant="primary" className="btn-sm" onClick={handleReadOnlyValue}>Get readonly value</Button>
        <Button variant="primary" className="btn-sm" onClick={handleReadOnly}>Toggle readonly</Button>
        <Button variant="primary" className="btn-sm" onClick={handleReset}>Reset</Button>
      </div>


    </>

  )



}
const Ratings = () => {

  return (
    <>
      <PageTitle pageTitle="Ratings" />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Extended UI', path: '/extended-ui/ratings' },
          { label: "Ratings", path: '/extended-ui/ratings', active: true },
        ]}
        title={"Ratings"}
      />

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Default Ratings</h4>
              <p className="text-muted fs-14"></p>
              <Rate size="xs" />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Icon Font - Change icon</h4>
              <p className="text-muted fs-14"></p>

              <Rate allowHalf character="@" size="sm" />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Progressive Hover</h4>
              <p className="text-muted fs-14"></p>
              <Rate defaultValue={3} size="sm" color="red" />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Readonly and preset value</h4>
              <p className="text-muted fs-14"></p>
              <Rate size="sm" value={3} color="red" />
            </Card.Body>
          </Card>

        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Character Icons</h4>
              <p className="text-muted fs-14"></p>

              <Rate allowHalf character="👍" size="sm" color="red" />
              <br /><br />
              <Rate allowHalf size="sm" character={<HeartIcon />} color="red" />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Icon Font - Sizing</h4>
              <p className="text-muted fs-14"></p>
              <div>
                <Rate size="xs" color="red" />
              </div>
              <div>
                <Rate size="sm" color="red" />
              </div>
              <div>
                <Rate size="md" color="red" />
              </div>
              <div>
                <Rate size="lg" color="red" />
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Setting and Getting values</h4>
              <p className="text-muted fs-14">All properties can also be set on the fly. Here are a few examples:</p>

              <CustomRating />

            </Card.Body>
          </Card>

        </Col>
      </Row>
    </>
  )
}

export default Ratings
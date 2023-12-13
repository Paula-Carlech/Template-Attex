import { Card, Col, Row } from 'react-bootstrap'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'
import PageTitle from '../../../../components/PageTitle'

import WorldMap from '../../../../components/VectorMap/WorldMap'
import UsaVectorMap from '../../../../components/VectorMap/UsaVectorMap'
import RussiaVectorMap from '../../../../components/VectorMap/RussiaVectorMap'
import ItalyVectorMap from '../../../../components/VectorMap/ItalyVectorMap'
import IraqVectorMap from '../../../../components/VectorMap/IraqVectorMap'
import SpainVectorMap from '../../../../components/VectorMap/SpainVectorMap'
import CanadaVectorMap from '../../../../components/VectorMap/CanadaVectorMap'
import { worldMapOpts, usaMapOpts, spainMapOpts, canadaMapOpts, russiaMapOpts, italyMapOpts, iraqMapOpts, } from './data'

const VectorMaps = () => {
  return (
    <>
      <PageTitle pageTitle='Vector Maps' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Maps', path: '/ui/maps/vector-maps' },
          { label: "Vector Maps", path: "/ui/maps/vector-maps", active: true },
        ]}
        title={"Vector Maps"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">World Vector Map</h4>
              <WorldMap height='360px' width="100%" options={worldMapOpts} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">USA Vector Map</h4>
              <UsaVectorMap height='300px' width="100%" options={usaMapOpts} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Russia Vector Map</h4>
              <RussiaVectorMap height='300px' width="100%" options={russiaMapOpts} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Italy Vector Map</h4>
              <ItalyVectorMap height='300px' width="100%" options={italyMapOpts} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Canada Vector Map</h4>
              <CanadaVectorMap height='300px' width='100%' options={canadaMapOpts} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Iraq Vector Map</h4>
              <IraqVectorMap height='300px' width='100%' options={iraqMapOpts} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Spain Vector Map</h4>
              <SpainVectorMap height='300px' width='100%' options={spainMapOpts} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Europe Vector Map</h4>
          
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">France Vector Map</h4>
              <div id="france-vectormap" style={{ height: '300px' }}></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Chicago Vector Map</h4>
              <div id="chicago-vectormap" style={{ height: '300px' }}></div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Spain Vector Map</h4>
              <div id="spain2-vectormap" style={{ height: '300px' }}></div>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

    </>
  )
}

export default VectorMaps
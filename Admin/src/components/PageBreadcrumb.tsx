import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from 'react-router-dom';

interface BreadcrumbItems {
  label: string;
  path: string;
  active?: boolean;
}

interface PageTitleProps {
  breadCrumbItems: Array<BreadcrumbItems>;
  title: string;
  children?: any;
}

const PageBreadcrumb = ({ breadCrumbItems, title, children }: PageTitleProps) => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <Breadcrumb.Item href='/'>Attex</Breadcrumb.Item>
                {(breadCrumbItems || []).map((item, idx) => {
                  return item.active ? (
                    <Breadcrumb.Item active key={idx}>
                      {item.label}
                    </Breadcrumb.Item>
                  ) : (
                    <Link className='breadcrumb-item' to={item.path} key={idx}>
                      {item.label}
                    </Link>
                  )
                })}
              </ol>
            </div>
            <h4 className="page-title">{title}
              {children}
            </h4>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default PageBreadcrumb;

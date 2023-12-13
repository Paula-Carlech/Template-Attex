import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

// images
import logo from '../../assets/images/logo.png'

//component
import Background from "../../components/Background";

interface AccountLayoutProps {
  pageImage?: any;
  authTitle?: string;
  helpText?: string;
  bottomLinks?: any;
  isCombineForm?: boolean;
  children?: any;
  hasForm?: boolean;
}

const AuthLayout = ({
  pageImage,
  authTitle,
  helpText,
  bottomLinks,
  isCombineForm,
  children,
  hasForm
}: AccountLayoutProps) => {
  useEffect(() => {
    if (document.body) {
      document.body.classList.add('authentication-bg', 'position-relative')
    }
    return () => {
      if (document.body) {
        document.body.classList.remove('authentication-bg', 'position-relative')
      }
    }
  }, [])

  return (
    <>
      <div className='authentication-bg position-relative'>
       <Background />

        <div className='account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative'>
          <Container>
            <Row className='justify-content-center'>
              <Col xxl={4} lg={5}>
                <Card>
                  <Card.Header className='py-4 text-center bg-primary'>
                    <Link to='/'>
                      <span>
                        <img
                          src={logo}
                          alt='logo'
                          height='22'
                        />
                      </span>
                    </Link>
                  </Card.Header>

                  <Card.Body className='p-4'>
                    {(hasForm || hasForm === undefined) && <div className='text-center w-75 m-auto'>
                      {pageImage}
                      <h4 className={`text-dark-50 text-center pb-0 fw-bold ${(pageImage) ? 'mt-3' : ''}`}>
                        {authTitle}
                      </h4>
                      <p className='text-muted mb-4'>{helpText}</p>
                    </div>}
                    {children}
                  </Card.Body>
                </Card>

                {bottomLinks}
              </Col>
            </Row>
          </Container>
        </div>

        <footer className='footer footer-alt fw-medium'>
          <span className='bg-body'>
            {new Date().getFullYear()} © Attex -
            <a href='https://coderthemes.com/' rel='noreferrer' target='_blank' className="bg-body"> Coderthemes.com
            </a>
          </span>
        </footer>
      </div>
    </>
  );
};

export default AuthLayout;

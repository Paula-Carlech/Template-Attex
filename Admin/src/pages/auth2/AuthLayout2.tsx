import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Card, Image } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

//images
import logo from '../../assets/images/logo.png'
import logoDark from '../../assets/images/logo-dark.png'


interface AccountLayoutProps {
  helpText?: string;
  bottomLinks?: any;
  isCombineForm?: boolean;
  children?: any;
}

const AuthLayout2 = ({
  helpText,
  bottomLinks,
  children,
  isCombineForm,
}: AccountLayoutProps) => {

  useEffect(() => {
    if (document.body) {
      document.body.classList.add('authentication-bg', 'pb-0')
    }
    return () => {
      if (document.body) {
        document.body.classList.remove('authentication-bg', 'pb-0')
      }
    }
  }, [])

  return (
    <div className='auth-fluid'>
      <div className="auth-fluid-form-box">

        <Card.Body className="d-flex flex-column h-100 gap-3">

          <div className="auth-brand text-center text-lg-start">
            <Link to="/" className="logo-dark">
              <span><Image src={logoDark} alt="dark logo" height="22" /></span>
            </Link>
            <Link to="/" className="logo-light">
              <span><Image src={logo} alt="logo" height="22" /></span>
            </Link>
          </div>

          {children}

          {bottomLinks}

        </Card.Body>
      </div>

      <div className="auth-fluid-right text-center">
        <div className="auth-user-testimonial">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <h2 className="mb-3">I love the color!</h2>
              <p className="lead"><i className="ri-double-quotes-l"/> Everything you need is in this template. Love the overall look and feel. Not too flashy, and still very professional and smart.
              </p>
              <p>
                - Admin User
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h2 className="mb-3">Flexibility !</h2>
              <p className="lead"><i className="ri-double-quotes-l"/> Pretty nice theme, hoping you guys could add more features to this. Keep up the good work.
              </p>
              <p>
                - Admin User
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h2 className="mb-3">Feature Availability!</h2>
              <p className="lead"><i className="ri-double-quotes-l"/> This is a great product, helped us a lot and very quick to work with and implement.
              </p>
              <p>
                - Admin User
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout2
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

import AuthLayout2 from "./AuthLayout2"

import mail from "../../assets/images/svg/mail_sent.svg"
import PageTitle from '../../components/PageTitle';

const BottomLink = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer footer-alt">
      <p className="text-muted">{year} © Attex - Coderthemes.com</p>
    </footer>
  )
}

const ConfirmMail2 = () => {
  return (
    <>
      <PageTitle pageTitle='Confirm Email' />
      <AuthLayout2>
        <div className="my-auto">
          <div className="text-center m-auto">
            <Image src={mail} alt="mail sent image" height="64" />
            <h4 className="text-dark-50 text-center mt-4 fw-bold">Please check your email</h4>
            <p className="text-muted mb-4">
              A email has been send to <b>youremail@domain.com</b>.
              Please check for an email from company and click on the included link to
              reset your password.
            </p>
          </div>

          <Link to='/ecommerce'>
            <div className="mb-0 d-grid text-center">
              <Button variant='primary' type="submit"><i className="ri-home-4-line me-1"/> Back to Home </Button>
            </div>
          </Link>

        </div>
        <BottomLink />
      </AuthLayout2>
    </>
  )
}

export default ConfirmMail2
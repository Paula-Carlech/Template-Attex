import { Link } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'

// components
import AuthLayout from './AuthLayout'

// images
import mailsenticon from '../../assets/images/svg/mail_sent.svg'
import PageTitle from '../../components/PageTitle'

const ConfirmMail = () => {
  return (
    <>
      <PageTitle pageTitle='Confirm Email' />
      <AuthLayout hasForm={false}>
        <div className="text-center m-auto">
          <Image src={mailsenticon} alt="mail sent icon" height="64" />
          <h4 className="text-dark-50 text-center mt-4 fw-bold">Please check your email</h4>
          <p className="text-muted mb-4">
            A email has been send to <b>youremail@domain.com</b>. Please check for an email from company and click on the included link to reset your password.
          </p>
        </div>
        <Link to='/ecommerce'>
          <div className="mb-0 text-center">
            <Button variant='primary' type="submit"><i className="ri-home-4-line me-1"/> Back to Home</Button>
          </div>
        </Link>
      </AuthLayout>
    </>
  )
}

export default ConfirmMail
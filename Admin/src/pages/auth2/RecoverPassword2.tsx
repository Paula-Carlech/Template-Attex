import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// components
import AuthLayout2 from "./AuthLayout2"
import { FormInput, VerticalForm } from '../../components';
import PageTitle from '../../components/PageTitle';

const BottomLink = () => {
  return (
    <footer className="footer footer-alt">
      <p className="text-muted">Back to <Link to="/auth/login2" className="text-muted ms-1"><b>Log In</b></Link></p>
    </footer>
  )
}

const RecoverPassword2 = () => {
  return (
    <>
      <PageTitle pageTitle='Recover Password' />
      <AuthLayout2>
        <div className="my-auto">
          <h4>Reset Password</h4>
          <p className="text-muted mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>

          <VerticalForm onSubmit={() => { }}>

            <FormInput
              label='Email address'
              type="email"
              name="email"
              placeholder={"Enter your email"}
              containerClass={"mb-3"}
            />

            <div className="mb-0 text-center d-grid">
              <Button variant='primary' type="submit">Reset Password </Button>
            </div>
          </VerticalForm>

        </div>
        <BottomLink />
      </AuthLayout2>
    </>
  )
}

export default RecoverPassword2
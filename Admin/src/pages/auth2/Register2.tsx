import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import AuthLayout2 from "./AuthLayout2"
import { FormInput, VerticalForm } from '../../components';
import SocialLinks from "./SocialLinks"
import PageTitle from '../../components/PageTitle';

const BottomLink = () => {
  return (
    <footer className="footer footer-alt">
      <p className="text-muted">Already have account? <Link to="/auth/login2" className="text-muted ms-1"><b>Log In</b></Link></p>
    </footer>
  )
}

const Register2 = () => {
  return (
    <>
      <PageTitle pageTitle='Register' />
      <AuthLayout2>
        <div className="my-auto">
          <h4 className="mt-3">Free Sign Up</h4>
          <p className="text-muted mb-4">Don't have an account? Create your account, it takes less than a minute</p>

          <VerticalForm onSubmit={() => { }} >

            <FormInput
              label='Full Name'
              type="text"
              name="fullname"
              placeholder={"Enter your name"}
              containerClass={"mb-3"}
            />

            <FormInput
              label='Email address'
              type="email"
              name="email"
              placeholder={"Enter your email"}
              containerClass={"mb-3"}
            />

            <FormInput
              label={"Password"}
              type="password"
              name="password"
              placeholder={"Enter your password"}
              containerClass={"mb-3"}
            />

            <FormInput
              isTerms={true}
              type='checkbox'
              name='checkbox'
              containerClass={'mb-3'}
            />

            <div className="mb-0 d-grid text-center">
              <Button variant='primary' className="fw-semibold" type="submit">Sign Up </Button>
            </div>

            <div className="text-center mt-4">
              <p className="text-muted fs-16">Create account using</p>
              <SocialLinks />
            </div>
          </VerticalForm>
        </div>
        <BottomLink />
      </AuthLayout2>
    </>
  )
}

export default Register2
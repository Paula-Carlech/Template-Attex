import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

import AuthLayout2 from "./AuthLayout2"
import { FormInput, VerticalForm } from '../../components';
import SocialLinks from "./SocialLinks"

import avatar1 from '../../assets/images/users/avatar-1.jpg'
import PageTitle from '../../components/PageTitle';

const BottomLink = () => {
  return (
    <footer className="footer footer-alt">
      <p className="text-muted">Not you? return <Link to="/auth/login2" className="text-muted ms-1"><b>Sign In</b></Link></p>
    </footer>
  )
}

const LockScreen2 = () => {
  return (
    <>
      <PageTitle pageTitle='Lock Screen' />
      <AuthLayout2>
        <div className="my-auto">
          <div className="text-center w-75 m-auto">
            <Image src={avatar1} height="64" alt="user-image" className="rounded-circle shadow" />
            <h4 className="text-dark-50 text-center mt-3 fw-bold">Hi ! Tosha </h4>
            <p className="text-muted mb-4">Enter your password to access the admin.</p>
          </div>

          <VerticalForm onSubmit={() => { }}>

            <FormInput
              label={"Password"}
              type="password"
              name="password"
              placeholder={"Enter your password"}
              containerClass={"mb-3"}
            />

            <div className="mb-0 text-center d-grid">
              <Button variant='primary' type="submit">Log In </Button>
            </div>

            <div className="text-center mt-4">
              <p className="text-muted fs-16">Authentication in with</p>
              <SocialLinks />
            </div>

          </VerticalForm>
        </div>
        <BottomLink />
      </AuthLayout2>
    </>
  )
}

export default LockScreen2
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

// components
import AuthLayout2 from './AuthLayout2';
import SocialLinks from './SocialLinks';
import { FormInput, VerticalForm } from '../../components'

// redux
import { AppDispatch, RootState } from '../../redux/store';
import { loginUser } from '../../redux/actions';
import PageTitle from '../../components/PageTitle';

interface UserData {
  username: string;
  password: string;
}

const BottomLink = () => {
  return (
    <footer className="footer footer-alt">
      <p className="text-muted">Don't have an account? <Link to="/auth/register2" className="text-muted ms-1"><b>Sign Up</b></Link></p>
    </footer>
  )
}

const Login2 = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector(
    (state: RootState) => ({
      user: state.Auth.user,
      loading: state.Auth.loading,
      error: state.Auth.error,
      userLoggedIn: state.Auth.userLoggedIn,
    })
  );

  /**
   * Form validator
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required("Please enter email address"),
      password: yup.string().required("Please enter Password"),
    })
  );

  /**
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    dispatch(loginUser(formData.username, formData.password))
  }

  return (
    <>
      <PageTitle pageTitle='Log In' />
      <AuthLayout2>
        <div className="my-auto">
          <h4 className="mt-0">Sign In</h4>
          <p className="text-muted mb-4">Enter your email address and password to access account.</p>

          <VerticalForm
            onSubmit={onSubmit}
            resolver={schemaResolver}
            defaultValues={{ username: 'attex@coderthemes.com', password: 'attex' }}
          >

            <FormInput
              label='Email address'
              type="email"
              name="username"
              placeholder={"Enter your email"}
              containerClass={"mb-3"}
            />

            <FormInput
              label={"Password"}
              type="password"
              name="password"
              placeholder={"Enter your password"}
              containerClass={"mb-3"}
            >
              <Link to='/auth/recover-password2' className="text-muted float-end"><small>Forgot your password?</small></Link>
            </FormInput>

            <FormInput
              label='Remember me'
              type='checkbox'
              name='checkbox'
              containerClass={'mb-3'}
            />

            <div className="d-grid mb-0 text-center">
              <Button variant='primary' type="submit" disabled={loading}> <i className="ri-login-box-line"/> Log In </Button>
            </div>

            {/* Social Links */}
            <div className="text-center mt-4">
              <p className="text-muted fs-16">Sign in with</p>
              <SocialLinks />
            </div>
          </VerticalForm>
        </div>
        <BottomLink />
      </AuthLayout2 >
    </>
  )
}

export default Login2
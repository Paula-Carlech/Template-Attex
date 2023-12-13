import React, { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";

// form validation
import { Navigate, Link, useLocation } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser, resetAuth } from "../../redux/actions";
import AuthLayout from "./AuthLayout";

// components
import { VerticalForm, FormInput } from "../../components";

interface UserData {
  username: string;
  password: string;
}

/* bottom links */
const BottomLink = () => {
  return (
    <Row className='mt-3'>
      <Col className='text-center'>
        <p className='text-muted bg-body'>
          Don't have an account?
          <Link
            to='/auth/register'
            className='text-muted ms-1 link-offset-3 text-decoration-underline'
          >
            <b>Sign Up</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoggedIn, loading} = useSelector(
    (state: RootState) => ({
      user: state.Auth.user,
      loading: state.Auth.loading,
      error: state.Auth.error,
      userLoggedIn: state.Auth.userLoggedIn,
    })
  );

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
  form validation schema
  */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required("Please enter Username"),
      password: yup.string().required("Please enter Password"),
    })
  );

  /*
  handle form submission
  */
  const onSubmit = (formData: UserData) => {
    dispatch(loginUser(formData["username"], formData["password"]));
  };

  const location = useLocation();

  // redirection back to where user got redirected from
  const redirectUrl = location?.search?.slice(6) || "/";

  return (
    <>
      {(userLoggedIn || user) && <Navigate to={redirectUrl} />}

      <AuthLayout
        authTitle='Sign In'
        helpText='Enter your email address and password to access admin panel.'
        bottomLinks={<BottomLink />}
      >
        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{ username: "attex@coderthemes.com", password: "attex" }}
        >
          <FormInput
            label='Username'
            type='text'
            name='username'
            placeholder='Enter your username'
            containerClass='mb-3'
            required
          />

          <FormInput
            label='Password'
            type='password'
            name='password'
            placeholder='Enter your password'
            containerClass='mb-3'
          />

          <FormInput
            label='Remember me'
            type='checkbox'
            name='checkbox'
            containerClass={'mb-3'}
          />

          <div className='mb-3 text-center'>
            <Button
              variant="primary"
              type='submit'
              disabled={loading}
            >

              Log In
            </Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default Login;

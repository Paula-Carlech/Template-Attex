import { useEffect } from "react";
import AuthLayout from './AuthLayout'
import { useSelector, useDispatch } from "react-redux";
import { FormInput, VerticalForm } from '../../components'
import { Link, Navigate } from 'react-router-dom'
import { Button, Row, Col, Alert } from 'react-bootstrap'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//actions
import { resetAuth, signupUser } from "../../redux/actions";
import { RootState, AppDispatch } from "../../redux/store";
import PageTitle from "../../components/PageTitle";

interface UserData {
  fullname: string;
  email: string;
  password: string;
}

const BottomLink = () => {
  return (
    <>
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <p className="text-muted bg-body">Already have account? <Link to="/auth/login" className="text-muted ms-1 link-offset-3 text-decoration-underline"><b>Log In</b></Link></p>
        </Col>
      </Row>
    </>
  )
}

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, userSignUp, error } = useSelector((state: RootState) => ({
    loading: state.Auth.loading,
    error: state.Auth.error,
    userSignUp: state.Auth.userSignUp,
  }));

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      fullname: yup.string().required(("Please enter Fullname")),
      email: yup
        .string()
        .required("Please enter Email")
        .email("Please enter valid Email"),
      password: yup.string().required(("Please enter Password")),
    })
  );

  /*
 * handle form submission
 */
  const onSubmit = (formData: UserData) => {
    dispatch(
      signupUser(formData["fullname"], formData["email"], formData["password"])
    );
  };

  return (
    <>
    <PageTitle pageTitle='Register' />
      {userSignUp ? <Navigate to={"/auth/confirm-mail"}></Navigate> : null}
      <AuthLayout
        authTitle='Free Sign Up'
        helpText='Don&apos;t have an account? Create your account, it takes less than a minute'
        bottomLinks={<BottomLink />}
      >
        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}
        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}

        >
          <FormInput
            label='Full Name'
            type='text'
            name='username'
            placeholder='Enter your name'
            containerClass='mb-3'
            required
          />
          <FormInput
            label='Email address'
            type='text'
            name='Email'
            placeholder='Enter your email'
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
            isTerms={true}
            type='checkbox'
            name='checkbox'
            containerClass={'mb-3'}
          />

          <div className="mb-3 text-center">
            <Button variant='primary' type="submit" disabled={loading}> Sign Up </Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  )
}

export default Register
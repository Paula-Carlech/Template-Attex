import { useEffect } from "react";
import AuthLayout from './AuthLayout'
import { FormInput, VerticalForm } from '../../components'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";

//actions
import { resetAuth, forgotPassword } from "../../redux/actions";
import { RootState, AppDispatch } from "../../redux/store";
import PageTitle from '../../components/PageTitle';

interface UserData {
  email: string;
}
const BottomLink = () => {
  return (
    <>
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <p className="text-muted bg-body">Back to <Link to="/auth/login" className="text-muted ms-1 link-offset-3 text-decoration-underline"><b>Log In</b></Link></p>
        </Col>
      </Row>
    </>
  )
}
const RecoverPassword = () => {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  const { loading, passwordReset, resetPasswordSuccess, error } = useSelector(
    (state: RootState) => ({
      loading: state.Auth.loading,
      user: state.Auth.user,
      error: state.Auth.error,
      passwordReset: state.Auth.passwordReset,
      resetPasswordSuccess: state.Auth.resetPasswordSuccess,
    })
  );
  /*
* form validation schema
*/
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required("Please enter email"),
    })
  );
  /*
 * handle form submission
 */
  const onSubmit = (formData: UserData) => {
    dispatch(forgotPassword(formData.email));
  };
  return (
    <>
    <PageTitle pageTitle='Recover Password' />
      <AuthLayout
        authTitle='Reset Password'
        helpText='Enter your email address and we&apos;ll send you an email with instructions to reset your password.'
        bottomLinks={<BottomLink />}
      >
        {resetPasswordSuccess && (
          <Alert variant="success">{resetPasswordSuccess.message}</Alert>
        )}

        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        {!passwordReset && (
          <VerticalForm<UserData>
            onSubmit={onSubmit}
            resolver={schemaResolver}
          >
            <FormInput
              label='Email Address'
              type='text'
              name='Email'
              placeholder='Enter your Email'
              containerClass='mb-3'
              required
            />
            <div className="mb-0 text-center">
              <Button variant='primary' type="submit" disabled={loading}>Reset Password</Button>
            </div>
          </VerticalForm>
        )}
      </AuthLayout>
    </>
  )
}

export default RecoverPassword
import AuthLayout from './AuthLayout'
import avatar1 from '../../assets/images/users/avatar-1.jpg'
import { FormInput, VerticalForm } from '../../components'
import { Button, Row, Col, Image } from 'react-bootstrap'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'

interface UserData {
  password: string;
}

/**
 * bottom links
 */
const BottomLink = () => {
  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-muted bg-body">Not you? return <Link to="/auth/login" className="text-muted ms-1 link-offset-3 text-decoration-underline"><b>Sign In</b></Link></p>
      </Col>
    </Row>
  )
}

const AvatarImg = () => {
  return (
    <Image src={avatar1} alt='user-avatar' height="64" className="rounded-circle shadow" />
  )
}

/*
 * form validation schema
 */
const schemaResolver = yupResolver(
  yup.object().shape({
    password: yup.string().required("Please enter Password"),
  })
);

const LockScreen = () => {

  /*
  * handle form submission
  */
  const onSubmit = (formData: UserData) => {
    console.log(formData.password);
  };

  return (
    <>
      <PageTitle pageTitle='Lock Screen' />
        <AuthLayout
        authTitle='Hi! Tosha'
        helpText='Enter your password to access the admin.'
        bottomLinks={<BottomLink />}
        pageImage={<AvatarImg />}
      >
        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
        >
          <FormInput
            label='Password'
            type='password'
            name='password'
            placeholder='Enter your password'
            containerClass='mb-3'
          />
          <div className="mb-0 text-center">
            <Button variant='primary' type="submit" >Log In</Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  )
}

export default LockScreen
import { Row, Col, } from 'react-bootstrap'
import AuthLayout from './AuthLayout'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { logoutUser, resetAuth } from '../../redux/actions'
import { useEffect } from 'react'

/**
 * Logout Icon
 */
const LogoutIcon = () => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 161.2 161.2" enableBackground="new 0 0 161.2 161.2" xmlSpace="preserve"> <path className="path" fill="none" stroke="#0acf97" strokeMiterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4 c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5 c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z" /> <circle className="path" fill="none" stroke="#0acf97" strokeWidth="4" strokeMiterlimit="10" cx="80.6" cy="80.6" r="62.1" /> <polyline className="path" fill="none" stroke="#0acf97" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="113,52.8 74.1,108.4 48.2,86.4 " /> <circle className="spin" fill="none" stroke="#0acf97" strokeWidth="4" strokeMiterlimit="10" strokeDasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9" /> </svg>
  )
}

/**
 * bottom links
 */
const BottomLink = () => {
  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-muted bg-body">Back to <Link to="/auth/login" className="text-muted ms-1 link-offset-3 text-decoration-underline"><b>Log In</b></Link></p>
      </Col>
    </Row>
  )
}

const Logout = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  return (
    <>
      <PageTitle pageTitle='Log Out' />
      <AuthLayout
        authTitle='See You Again !'
        helpText='You are now successfully sign out.'
        bottomLinks={<BottomLink />}
      >
        <div className="logout-icon m-auto">
          <LogoutIcon />
        </div>
      </AuthLayout>
    </>
  )
}

export default Logout
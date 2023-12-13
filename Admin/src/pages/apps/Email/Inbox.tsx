import { Button, ButtonGroup, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageTitle from '../../../components/PageTitle'
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import LeftSide from './LeftSide'
import { useToggle } from '../../../hooks'
import { useInbox } from './hooks/useInbox'
import { Email } from './types'
import ComposeEmail from './ComposeEmail'


const EmailsList = ({ emails }: { emails: Email[] }) => {
  return (
    <ul className="email-list">

      {emails.map((email, idx) => {
        return (
          <li className={(!email.is_read) ? 'unread' : ''} key={idx}>
            <div className="email-sender-info">
              <div className="checkbox-wrapper-mail">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id={'mail1' + email.id} />
                  <label className="form-check-label" htmlFor={'mail1' + email.id}></label>
                </div>
              </div>
              <span className={`star-toggle ri-star-line ${(email.is_important ? 'text-warning' : '')}`}></span>
              <Link to="#" className="email-title">
                {email.from_name}
                {email.number_of_reply > 1 && (email.number_of_reply)}
              </Link>
            </div>
            <div className="email-content">
              <Link to="#" className="email-subject">{email.subject}
              </Link>
              <div className="email-date">{email.time}</div>
            </div>
            <div className="email-action-icons">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="#"><i className="ri-archive-line email-action-icons-item"/></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="ri-delete-bin-6-line email-action-icons-item"/></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="ri-mail-open-line email-action-icons-item"/></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="ri-time-line email-action-icons-item"/></Link>
                </li>
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const EmailInbox = () => {
  // handle compose modal
  const [isModalOpen, toggleComposeModal] = useToggle(false);

  const {
    emails,
    totalEmails,
    startIndex,
    endIndex,
    page,
    totalPages,
    totalUnreadEmails,
    getPrevPage,
    getNextPage,
    showAllEmails,
    showStarredEmails,
  } = useInbox();

  return (
    <>
      <PageTitle pageTitle='Inbox' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apps', path: '/apps/email/inbox' },
          { label: "Email", path: "/apps/email/inbox", active: true },
        ]}
        title={"Inbox"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="page-aside-left">
                <LeftSide
                  totalUnreadEmails={totalUnreadEmails}
                  showAllEmails={showAllEmails}
                  showStarredEmails={showStarredEmails}
                  toggleComposeModal={toggleComposeModal}
                />
              </div>
              <div className="page-aside-right">
                <div className="d-flex flex-wrap gap-1">
                  <ButtonGroup>
                    <Button variant='secondary'><i className="ri-inbox-archive-line fs-16"/></Button>
                    <Button variant='secondary'><i className="ri-spam-2-line fs-16"/></Button>
                    <Button variant='secondary'><i className="ri-delete-bin-line fs-16"/></Button>
                  </ButtonGroup>

                  <ButtonGroup as={Dropdown}>
                    <Dropdown.Toggle variant='secondary' className="arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="ri-folder-2-line fs-16"/>&nbsp;
                      <i className="ri-arrow-down-s-line"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Move to:</Dropdown.Header>
                      <Dropdown.Item as="a" href="#">Social</Dropdown.Item>
                      <Dropdown.Item as="a" href="#">Promotions</Dropdown.Item>
                      <Dropdown.Item as="a" href="#">Updates</Dropdown.Item>
                      <Dropdown.Item as="a" href="#">Forums</Dropdown.Item>
                    </Dropdown.Menu>
                  </ButtonGroup>
                  <ButtonGroup as={Dropdown}>
                    <Dropdown.Toggle variant='secondary' className="arrow-none">
                      <i className="ri-price-tag-3-line fs-16"/>&nbsp;
                      <i className="ri-arrow-down-s-line"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Label as:</Dropdown.Header>
                      <Dropdown.Item href="#">Updates</Dropdown.Item>
                      <Dropdown.Item href="#">Social</Dropdown.Item>
                      <Dropdown.Item href="#">Promotions</Dropdown.Item>
                      <Dropdown.Item href="#">Forums</Dropdown.Item>
                    </Dropdown.Menu>
                  </ButtonGroup>

                  <ButtonGroup as={Dropdown}>
                    <Dropdown.Toggle variant='secondary' className="arrow-none">
                      <i className="ri-more-line fs-16"/> More&nbsp;
                      <i className="ri-arrow-down-s-line"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>More Options :</Dropdown.Header>
                      <Dropdown.Item href="#">Mark as Unread</Dropdown.Item>
                      <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
                      <Dropdown.Item href="#">Add Star</Dropdown.Item>
                      <Dropdown.Item href="#">Mute</Dropdown.Item>
                    </Dropdown.Menu>
                  </ButtonGroup>
                </div>
                <div className="mt-3">
                  <EmailsList emails={emails} />
                </div>
                <Row>
                  <div className="col-7 mt-1">
                    Showing {startIndex} - {endIndex} of {totalEmails}
                  </div>
                  <div className="col-5">
                    <ButtonGroup className="float-end">
                      {page === 1 ? (
                        <Button variant='light' size='sm' type="button" disabled>
                          <i className="ri-arrow-left-s-line" />
                        </Button>
                      ) : (
                        <Button variant='info' size='sm' type="button" onClick={getPrevPage}>
                          <i className="ri-arrow-left-s-line" />
                        </Button>
                      )}
                      {page < totalPages ? (
                        <Button variant='info' size='sm' type="button" onClick={getNextPage}>
                          <i className="ri-arrow-right-s-line" />
                        </Button>
                      ) : (
                        <Button variant='light' size='sm' type="button">
                          <i className="ri-arrow-right-s-line" />
                        </Button>
                      )}
                    </ButtonGroup>
                  </div>
                </Row>
              </div>
            </Card.Body>
            <div className="clearfix" />
          </Card>
        </Col>
      </Row>
      <ComposeEmail isModalOpen={isModalOpen} toggleComposeModal={toggleComposeModal} />
    </>
  )
}

export default EmailInbox

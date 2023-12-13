import { Badge, Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface LeftSideProps {
  totalUnreadEmails: number;
  showAllEmails?: () => void;
  showStarredEmails?: () => void;
  toggleComposeModal: () => void;
};

const LeftSide = ({ totalUnreadEmails, showAllEmails, showStarredEmails, toggleComposeModal }: LeftSideProps) => {
  return (
    <>

      <div className="d-grid">
        <Button variant='danger' onClick={toggleComposeModal}>Compose</Button>
      </div>
      <div className="email-menu-list mt-3">
        <Link to="#" onClick={showAllEmails} className="text-danger fw-bold">
          <i className="ri-inbox-line me-2" />
          Inbox
          <Badge color='danger' className="lighten float-end ms-2">{totalUnreadEmails}</Badge>
        </Link>
        <Link to="#" onClick={showStarredEmails}>
          <i className="ri-star-line me-2"/>
          Starred
        </Link>
        <Link to="#">
          <i className="ri-time-line me-2"/>
          Snoozed
        </Link>
        <Link to="#">
          <i className="ri-article-line me-2"/>
          Draft
          <Badge className="badge badge-info-lighten float-end ms-2">32</Badge></Link>
        <Link to="#">
          <i className="ri-mail-send-line me-2"/>
          Sent Mail
        </Link>
        <Link to="#">
          <i className="ri-delete-bin-line me-2"/>
          Trash
        </Link>
        <Link to="#">
          <i className="ri-price-tag-3-line me-2"/>
          Important
        </Link>
        <Link to="#">
          <i className="ri-alert-line me-2"/>
          Spam
        </Link>
      </div>

      <div className="mt-4">
        <h6 className="text-uppercase">Labels</h6>
        <div className="email-menu-list labels-list mt-2">
          <Link to="#"><i className="ri-checkbox-blank-circle-fill fs-13 text-info me-2"/>
            Updates
          </Link>
          <Link to="#"><i className="ri-checkbox-blank-circle-fill fs-13 text-warning me-2"/>
            Friends
          </Link>
          <Link to="#"><i className="ri-checkbox-blank-circle-fill fs-13 text-success me-2"/>
            Family
          </Link>
          <Link to="#"><i className="ri-checkbox-blank-circle-fill fs-13 text-primary me-2"/>
            Social
          </Link>
          <Link to="#"><i className="ri-checkbox-blank-circle-fill fs-13 text-danger me-2"/>
            Important
          </Link>
          <Link to="#"><i className="ri-checkbox-blank-circle-fill fs-13 text-secondary me-2"/>
            Promotions
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <h4><Badge pill className="p-1 px-2 badge-secondary-lighten">FREE</Badge></h4>
        <h6 className="text-uppercase mt-3">Storage</h6>
        <ProgressBar now={46} variant='success' className="my-2 progress-sm" />
        <p className="text-muted fs-13 mb-0">7.02 GB (46%) of 15 GB used</p>
      </div>
    </>
  )
}

export default LeftSide
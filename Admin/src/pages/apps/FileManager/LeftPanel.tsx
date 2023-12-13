import React from 'react'
import { Button, Dropdown, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LeftPanel = () => {
  return (
    <>
      <Dropdown className="btn-group d-block mb-2">
        <Dropdown.Toggle as={Button} variant='success' type="button" className="dropdown-toggle w-100" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ri-file-add-line"/> Create New </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="#"><i className="ri-folder-5-line me-1"/> Folder</Dropdown.Item>
          <Dropdown.Item as={Link} to="#"><i className="ri-file-2-line me-1"/> File</Dropdown.Item>
          <Dropdown.Item as={Link} to="#"><i className="ri-file-list-3-line me-1"/> Document</Dropdown.Item>
          <Dropdown.Item as={Link} to="#"><i className="ri-upload-line me-1"/> Choose File</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="email-menu-list mt-3">
        <Link to="#" className="list-group-item border-0"><i className="ri-folders-line fs-18 align-middle me-2"/>My Files</Link>
        <Link to="#" className="list-group-item border-0"><i className="ri-drive-line fs-18 align-middle me-2"/>Google Drive</Link>
        <Link to="#" className="list-group-item border-0"><i className="ri-dropbox-line fs-18 align-middle me-2"/>Dropbox</Link>
        <Link to="#" className="list-group-item border-0"><i className="ri-user-voice-line fs-18 align-middle me-2"/>Share with me</Link>
        <Link to="#" className="list-group-item border-0"><i className="ri-time-line fs-18 align-middle me-2"/>Recent</Link>
        <Link to="#" className="list-group-item border-0"><i className="ri-star-line fs-18 align-middle me-2"/>Starred</Link>
        <Link to="#" className="list-group-item border-0"><i className="ri-delete-bin-line fs-18 align-middle me-2"/>Deleted Files</Link>
      </div>

      <div className="mt-5">
        <h4><span className="badge rounded-pill p-1 px-2 bg-dark-subtle text-dark">FREE</span></h4>
        <h6 className="text-uppercase mt-3">Storage</h6>
        <ProgressBar now={46} variant='success' className="my-2 progress-sm" />
          {/* <div className="progress-bar progress-lg bg-success" role="progressbar" style={{ width: '46%' }} aria-valuenow={46} aria-valuemin={0} aria-valuemax={100}></div> */}
        <p className="text-muted fs-13 mb-0">7.02 GB (46%) of 15 GB used</p>
      </div>
    </>
  )
}

export default LeftPanel
import React from 'react';
import { Form } from "react-bootstrap";

interface SideBarUserInfoProps {
  handleToggleSideBarUserInfo: (value: any) => void;
  showSideBarUserInfo: boolean
}

const SideBarUserInfo = ({
  handleToggleSideBarUserInfo,
  showSideBarUserInfo,
}: SideBarUserInfoProps) => {
  return (
    <>
      <div id='sidebar-user'>
        <Form.Check className='d-flex justify-content-between align-items-center mt-3'>
          <Form.Check.Label
            className='fs-16 fw-bold m-0'
            htmlFor='sidebaruser-check'
          >
            Sidebar User Info
          </Form.Check.Label>
          <div className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='checkbox'
              name='sidebar-user'
              id='sidebaruser-check'
              onChange={(e) => handleToggleSideBarUserInfo(e.target.checked)}
              checked={showSideBarUserInfo}
            />
          </div>
        </Form.Check>
      </div>
    </>
  )
}

export default SideBarUserInfo
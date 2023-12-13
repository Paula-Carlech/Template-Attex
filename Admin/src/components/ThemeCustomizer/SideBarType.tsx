import React from 'react';
import { Form } from "react-bootstrap";
import * as LayoutConstants from "../../constants/layout";

interface SideBarTypeProps {
  handleChangeSideBarType: (value: any) => void;
  sideBarType?: string;
  layoutConstants: typeof LayoutConstants.SideBarType;
}

const SideBarType = ({
  handleChangeSideBarType,
  sideBarType,
  layoutConstants,
}: SideBarTypeProps) => {
  return (
    <>
      <div id='sidebar-size'>
        <h5 className='my-3 fs-16 fw-bold'>Sidebar Size</h5>

        <div className='d-flex flex-column gap-2'>
          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-sidenav-size'
              id='leftbar-size-default'
              value={layoutConstants.LEFT_SIDEBAR_TYPE_DEFAULT}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_DEFAULT}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='leftbar-size-default'
            >
              Default
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-sidenav-size'
              id='leftbar-size-compact'
              value={layoutConstants.LEFT_SIDEBAR_TYPE_COMPACT}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_COMPACT}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='leftbar-size-compact'
            >
              Compact
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-sidenav-size'
              id='leftbar-size-small'
              value={layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='leftbar-size-small'
            >
              Condensed
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-sidenav-size'
              id='leftbar-size-small-hover'
              value={layoutConstants.LEFT_SIDEBAR_TYPE_HOVER}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_HOVER}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='leftbar-size-small-hover'
            >
              Hover View
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-sidenav-size'
              id='leftbar-size-full'
              value={layoutConstants.LEFT_SIDEBAR_TYPE_FULL}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_FULL}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='leftbar-size-full'
            >
              Full Layout
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-sidenav-size'
              id='leftbar-size-fullscreen'
              value={layoutConstants.LEFT_SIDEBAR_TYPE_FULLSCREEN}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_FULLSCREEN}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='leftbar-size-fullscreen'
            >
              Fullscreen Layout
            </Form.Check.Label>
          </Form.Check>
        </div>
      </div>
    </>
  )
}

export default SideBarType
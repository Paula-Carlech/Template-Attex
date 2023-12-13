import React from 'react';
import { Form } from "react-bootstrap";
import * as LayoutConstants from "../../constants/layout";

interface LayoutPositionProps {
  handleChangeLayoutPosition: (value: any) => void;
  layoutPosition?: string;
  layoutConstants: typeof LayoutConstants.LayoutPosition;
}

const LayoutPosition = ({
  handleChangeLayoutPosition,
  layoutPosition,
  layoutConstants,
}: LayoutPositionProps) => {
  return (
    <>
      <div id='layout-position'>
        <h5 className='my-3 fs-16 fw-bold'>Layout Position</h5>

        <div className='btn-group checkbox' role='group'>
          <Form.Check.Input
            type='radio'
            className='btn-check'
            name='data-layout-position'
            id='layout-position-fixed'
            value={layoutConstants.POSITION_FIXED}
            onChange={(e) => handleChangeLayoutPosition(e.target.value)}
            checked={layoutPosition === layoutConstants.POSITION_FIXED}
          />
          <Form.Check.Label
            className='btn btn-soft-primary w-sm'
            htmlFor='layout-position-fixed'
          >
            Fixed
          </Form.Check.Label>

          <Form.Check.Input
            type='radio'
            className='btn-check'
            name='data-layout-position'
            id='layout-position-scrollable'
            value={layoutConstants.POSITION_SCROLLABLE}
            onChange={(e) => handleChangeLayoutPosition(e.target.value)}
            checked={layoutPosition === layoutConstants.POSITION_SCROLLABLE}
          />
          <Form.Check.Label
            className='btn btn-soft-primary w-sm ms-0'
            htmlFor='layout-position-scrollable'
          >
            Scrollable
          </Form.Check.Label>
        </div>
      </div>
    </>
  )
}

export default LayoutPosition
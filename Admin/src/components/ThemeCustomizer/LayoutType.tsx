import React from 'react'
import { Form } from 'react-bootstrap'
import * as LayoutConstants from "../../constants/layout";

interface LayoutTypeProps {
  handleChangeLayoutType: (value: any) => void;
  layoutType?: string;
  layoutConstants: typeof LayoutConstants.LayoutType;
}

const LayoutType = ({
  handleChangeLayoutType,
  layoutType,
  layoutConstants,
}: LayoutTypeProps) => {
  return (
    <>
      <h5 className='mt-0 fs-16 fw-bold mb-3'>Choose Layout</h5>
      <div className='d-flex flex-column gap-2'>
        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-layout'
            id='customizer-layout01'
            value={layoutConstants.LAYOUT_VERTICAL}
            onChange={(e) => handleChangeLayoutType(e.target.value)}
            checked={layoutType === layoutConstants.LAYOUT_VERTICAL}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='customizer-layout01'
          >
            Vertical
          </Form.Check.Label>
        </Form.Check>
        <Form.Check className='form-check form-switch'>
          <input
            className='form-check-input'
            type='radio'
            name='data-layout'
            id='customizer-layout02'
            value={layoutConstants.LAYOUT_HORIZONTAL}
            onChange={(e) => handleChangeLayoutType(e.target.value)}
            checked={layoutType === layoutConstants.LAYOUT_HORIZONTAL}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='customizer-layout02'
          >
            Horizontal
          </Form.Check.Label>
        </Form.Check>
      </div>
    </>
  )
}

export default LayoutType
import React from 'react';
import { Form } from 'react-bootstrap';
import * as LayoutConstants from "../../constants/layout";

interface LayoutWidthProps {
  handleChangeLayoutWidth: (value: any) => void;
  layoutWidth?: string;
  layoutConstants: typeof LayoutConstants.LayoutWidth;
}

const LayoutWidth = ({
  handleChangeLayoutWidth,
  layoutWidth,
  layoutConstants,
}: LayoutWidthProps) => {
  return (
    <div id='layout-width'>
      <h5 className='my-3 fs-16 fw-bold'>Layout Mode</h5>

      <div className='d-flex flex-column gap-2'>
        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-layout-mode'
            id='layout-mode-fluid'
            value={layoutConstants.LAYOUT_WIDTH_FLUID}
            onChange={(e) => handleChangeLayoutWidth(e.target.value)}
            checked={layoutWidth === layoutConstants.LAYOUT_WIDTH_FLUID}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='layout-mode-fluid'
          >
            Fluid
          </Form.Check.Label>
        </Form.Check>

        <div id='layout-boxed'>
          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-layout-mode'
              id='layout-mode-boxed'
              value={layoutConstants.LAYOUT_WIDTH_BOXED}
              onChange={(e) => handleChangeLayoutWidth(e.target.value)}
              checked={layoutWidth === layoutConstants.LAYOUT_WIDTH_BOXED}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='layout-mode-boxed'
            >
              Boxed
            </Form.Check.Label>
          </Form.Check>
        </div>

        <div id='layout-detached'>
          <Form.Check className='form-check form-switch'>
            <Form.Check.Input
              className='form-check-input'
              type='radio'
              name='data-layout-mode'
              id='data-layout-detached'
              value={layoutConstants.LAYOUT_WIDTH_DETACHED}
              onChange={(e) => handleChangeLayoutWidth(e.target.value)}
              checked={layoutWidth === layoutConstants.LAYOUT_WIDTH_DETACHED}
            />
            <Form.Check.Label
              className='form-check-label'
              htmlFor='data-layout-detached'
            >
              Detached
            </Form.Check.Label>
          </Form.Check>
        </div>
      </div>
    </div>
  )
}

export default LayoutWidth
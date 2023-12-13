import React from 'react';
import { Form } from 'react-bootstrap';
import * as LayoutConstants from "../../constants/layout";

interface TopBarThemeProps {
  handleChangeTopBarTheme: (value: any) => void;
  topBarTheme?: string;
  layoutConstants: typeof LayoutConstants.TopBarTheme;
};

const TopBarTheme = ({
  handleChangeTopBarTheme,
  topBarTheme,
  layoutConstants,
}: TopBarThemeProps) => {
  return (
    <>
      <h5 className='my-3 fs-16 fw-bold'>Topbar Color</h5>

      <div className='d-flex flex-column gap-2'>
        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-topbar-color'
            id='topbar-color-light'
            value={layoutConstants.TOPBAR_LIGHT}
            onChange={(e) => handleChangeTopBarTheme(e.target.value)}
            checked={topBarTheme === layoutConstants.TOPBAR_LIGHT}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='topbar-color-light'
          >
            Light
          </Form.Check.Label>
        </Form.Check>

        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-topbar-color'
            id='topbar-color-dark'
            value={layoutConstants.TOPBAR_DARK}
            onChange={(e) => handleChangeTopBarTheme(e.target.value)}
            checked={topBarTheme === layoutConstants.TOPBAR_DARK}
          />
          <Form.Check.Label className='form-check-label' htmlFor='topbar-color-dark'>
            Dark
          </Form.Check.Label>
        </Form.Check>

        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-topbar-color'
            id='topbar-color-brand'
            value={layoutConstants.TOPBAR_BRAND}
            onChange={(e) => handleChangeTopBarTheme(e.target.value)}
            checked={topBarTheme === layoutConstants.TOPBAR_BRAND}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='topbar-color-brand'
          >
            Brand
          </Form.Check.Label>
        </Form.Check>
      </div>

    </>
  )
}

export default TopBarTheme
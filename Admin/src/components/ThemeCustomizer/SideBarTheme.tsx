import React from 'react';
import { Form } from "react-bootstrap";
import * as LayoutConstants from "../../constants/layout";

interface SideBarThemeProps {
  handleChangeSideBarTheme: (value: any) => void;
  sideBarTheme?: string;
  layoutConstants: typeof LayoutConstants.SideBarTheme;
}

const SideBarTheme = ({
  handleChangeSideBarTheme,
  sideBarTheme,
  layoutConstants,
}: SideBarThemeProps) => {
  return (
    <div>
      <h5 className='my-3 fs-16 fw-bold'>Menu Color</h5>

      <div className='d-flex flex-column gap-2'>
        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-menu-color'
            id='leftbar-color-light'
            value={layoutConstants.LEFT_SIDEBAR_THEME_LIGHT}
            onChange={(e) => handleChangeSideBarTheme(e.target.value)}
            checked={sideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='leftbar-color-light'
          >
            Light
          </Form.Check.Label>
        </Form.Check>

        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-menu-color'
            id='leftbar-color-dark'
            value={layoutConstants.LEFT_SIDEBAR_THEME_DARK}
            onChange={(e) => handleChangeSideBarTheme(e.target.value)}
            checked={sideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_DARK}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='leftbar-color-dark'
          >
            Dark
          </Form.Check.Label>
        </Form.Check>
        <Form.Check className='form-check form-switch'>
          <Form.Check.Input
            className='form-check-input'
            type='radio'
            name='data-menu-color'
            id='leftbar-color-brand'
            value={layoutConstants.LEFT_SIDEBAR_THEME_BRAND}
            onChange={(e) => handleChangeSideBarTheme(e.target.value)}
            checked={sideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_BRAND}
          />
          <Form.Check.Label
            className='form-check-label'
            htmlFor='leftbar-color-brand'
          >
            Brand
          </Form.Check.Label>
        </Form.Check>
      </div>
    </div>
  )
}

export default SideBarTheme
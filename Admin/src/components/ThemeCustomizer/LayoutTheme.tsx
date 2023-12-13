import React from "react";
import { Form } from "react-bootstrap";
import * as LayoutConstants from "../../constants/layout";

interface LayoutThemeProps {
  handleChangeLayoutTheme: (value: any) => void;
  layoutTheme?: string;
  layoutConstants: typeof LayoutConstants.LayoutTheme;
}

const LayoutTheme = ({
  handleChangeLayoutTheme,
  layoutTheme,
  layoutConstants,
}: LayoutThemeProps) => {
  return (
    <>
      <h5 className="my-3 fs-16 fw-bold">Color Scheme</h5>

      <div className="d-flex flex-column gap-2">
        <Form.Check className="form-check form-switch">
          <Form.Check.Input
            className="form-check-input"
            type="radio"
            name="data-bs-theme"
            id="layout-color-light"
            value={layoutConstants.THEME_LIGHT}
            onChange={(e) => handleChangeLayoutTheme(e.target.value)}
            checked={layoutTheme === layoutConstants.THEME_LIGHT}
          />

          <Form.Check.Label className="form-check-label" htmlFor="layout-color-light">
            Light
          </Form.Check.Label>
        </Form.Check>

        <Form.Check className="form-check form-switch">
          <Form.Check.Input
            className="form-check-input"
            type="radio"
            name="data-bs-theme"
            id="layout-color-dark"
            value={layoutConstants.THEME_DARK}
            onChange={(e) => handleChangeLayoutTheme(e.target.value)}
            checked={layoutTheme === layoutConstants.THEME_DARK}
          />
          <Form.Check.Label className="form-check-label" htmlFor="layout-color-dark">
            Dark
          </Form.Check.Label>
        </Form.Check>
      </div>
    </>
  );
};

export default LayoutTheme;

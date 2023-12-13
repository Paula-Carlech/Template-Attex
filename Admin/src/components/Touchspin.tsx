import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-touchspin/lib/dist/styles.css";

import { CSSProperties } from "react";
import TouchSpin from 'react-bootstrap-touchspin/lib/esm/TouchSpin';
import { Alignment } from "react-bootstrap-touchspin/lib/esm/Type";

interface TouchspinProps {
  inputStyle?: CSSProperties | undefined;
  sign?: string;
  signAlignment?: Alignment
  step?: number;
  initValue?: number;
  max?: number;
  min?: number;
  decimals?: number;
  counterHandler?: (e: number) => void;
}

const CustomTouchspin = ({ inputStyle, sign, signAlignment, step, initValue, max, min, decimals, counterHandler = () => { } }: TouchspinProps) => {


  return (
    <>
      <TouchSpin
        inputStyle={inputStyle}
        sign={sign}
        signAlignment={signAlignment}
        step={step}
        initValue={initValue}
        max={max}
        min={min}
        decimals={decimals}
        counterHandler={counterHandler} />
    </>
  )
}

export default CustomTouchspin
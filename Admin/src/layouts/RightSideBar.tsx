import React, { FormEvent, useCallback, useEffect, useRef } from "react";
import { Offcanvas } from "react-bootstrap";

// redux
import { RootState } from "../redux/store";
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { hideRightSidebar } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

// components
import ThemeCustomizer from "../components/ThemeCustomizer";

const RightSideBar = () => {
  const dispatch = useDispatch();
  const rightBarNodeRef: any = useRef(null);
  // const [showRightSideNav, setShowRightSideNav] = useState<boolean>(rightBarNodeRef);
  const { isOpenRightSideBar } = useSelector((state: RootState) => ({
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  }));

  /**
   * Handle the click anywhere in doc
   */
  const handleOtherClick = useCallback(
    (e: FormEvent) => {
      if (isOpenRightSideBar) {
        if (
          rightBarNodeRef &&
          rightBarNodeRef.current &&
          rightBarNodeRef.current.contains(e.target)
        ) {
          return;
        } else {
          dispatch(hideRightSidebar());
        }
      }
    },
    [rightBarNodeRef, dispatch, isOpenRightSideBar]
  );

  /**
   * Toggles the right sidebar
   */
  const handleRightSideBar = () => {
    // setShowRightSideNav(false);
    dispatch(hideRightSidebar());
  };

  useEffect(() => {
    // document.addEventListener("mousedown", handleOtherClick, false);
    return () => {
      // document.removeEventListener("mousedown", handleOtherClick, false)
    };
  }, [handleOtherClick]);

  return (
    <React.Fragment>
      <Offcanvas
        show={isOpenRightSideBar}
        onHide={handleRightSideBar}
        placement='end'
        id='theme-settings-offcanvas'
      >
        <ThemeCustomizer
          handleRightSideBar={handleRightSideBar}
          rightBarNodeRef={rightBarNodeRef}
        />
      </Offcanvas>
    </React.Fragment>
  );
};

export default RightSideBar;

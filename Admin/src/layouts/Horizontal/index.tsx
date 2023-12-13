import React, { Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// redux
import { AppDispatch, RootState } from "../../redux/store";

// hoooks
import { changeHTMLAttribute } from "../../utils";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("../Topbar"));
const NavBar = React.lazy(() => import('./NavBar'));
const Footer = React.lazy(() => import("../Footer"));
const RightSideBar = React.lazy(() => import("../RightSideBar"));

// const loading = () => <div />;

interface HorizontaLayoutProps {
  children?: any;
}

const HorizontalLayout = ({ children }: HorizontaLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    // layoutType,
    layoutTheme,
    layoutWidth,
    topBarTheme,
    sideBarTheme,
    // sideBarType,
    layoutPosition,
    // showSideBarUserInfo,
    // isOpenRightSideBar,
  } = useSelector((state: RootState) => ({
    layoutType: state.Layout.layoutType,
    layoutTheme: state.Layout.layoutTheme,
    layoutWidth: state.Layout.layoutWidth,
    topBarTheme: state.Layout.topBarTheme,
    sideBarTheme: state.Layout.sideBarTheme,
    sideBarType: state.Layout.sideBarType,
    layoutPosition: state.Layout.layoutPosition,
    showSideBarUserInfo: state.Layout.showSideBarUserInfo,
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  }));

  /**
   * Layout defaults
   */

  useEffect(() => {
    changeHTMLAttribute('data-layout', 'topnav')
  }, [dispatch]);

  useEffect(() => {
    changeHTMLAttribute('data-bs-theme', layoutTheme)
  }, [layoutTheme]);

  useEffect(() => {
    changeHTMLAttribute('data-layout-mode', layoutWidth)
  }, [layoutWidth])

  useEffect(() => {
    changeHTMLAttribute('data-topbar-color', topBarTheme)
  }, [topBarTheme])

  useEffect(() => {
    changeHTMLAttribute('data-menu-color', sideBarTheme)
  }, [sideBarTheme])

  useEffect(() => {
    changeHTMLAttribute('data-layout-position', layoutPosition)
  }, [layoutPosition])

  return (
    <>
      <Suspense fallback={<div />}>
        <div className='wrapper'>
          <Suspense fallback={<div />}>
            <Topbar />
          </Suspense>

          <Suspense fallback={<div />}>
            <NavBar />
          </Suspense>

          <div className='content-page'>
            <div className='content'>
              <Container fluid>
                <Suspense fallback={<div />}>{children}</Suspense>
              </Container>
            </div>
            <Footer />
          </div>
        </div>

        <Suspense fallback={<div />}>
          <RightSideBar />
        </Suspense>
      </Suspense >
    </>
  );
};

export default HorizontalLayout;

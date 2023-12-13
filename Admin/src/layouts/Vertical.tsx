import React, { Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import * as layoutConstants from "../constants/layout";

// hooks
import { useViewPort } from "../hooks";
import { changeHTMLAttribute } from "../utils";
import { changeSideBarType } from "../redux/actions";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("./Topbar"));
const LeftSideBar = React.lazy(() => import("./LeftSideBar"));
const Footer = React.lazy(() => import("./Footer"));
const RightSideBar = React.lazy(() => import("./RightSideBar"));

// const loading = () => <div />;

interface VerticalLayoutProps {
  children?: any;
}

const VerticalLayout = ({ children }: VerticalLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewPort();

  const {
    layoutTheme,
    layoutWidth,
    topBarTheme,
    sideBarTheme,
    sideBarType,
    layoutPosition,
    showSideBarUserInfo,
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
    changeHTMLAttribute('data-bs-theme', layoutTheme)
  }, [layoutTheme])

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
    changeHTMLAttribute('data-sidenav-size', sideBarType)
  }, [sideBarType])

  useEffect(() => {
    changeHTMLAttribute('data-layout-position', layoutPosition)
  }, [layoutPosition])

  useEffect(() => {
    changeHTMLAttribute('data-sidenav-user', showSideBarUserInfo)
  }, [showSideBarUserInfo])

  useEffect(() => {
    document.getElementsByTagName('html')[0].removeAttribute('data-layout')
  }, [])

  // const updateDimensions = useCallback(() => {
  //   // activate the condensed sidebar if smaller devices like ipad or tablet
  //   if (width > 767 && width <= 1140) {
  //     dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED));
  //   } else if (width > 1140) {
  //     dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
  //   }
  // }, [dispatch, width])

  // useEffect(() => {
  //   window.addEventListener('resize', updateDimensions);

  //   return () => {
  //     window.removeEventListener('resize', updateDimensions);
  //   }
  // }, [dispatch, updateDimensions])


  useEffect(() => {
    if (width < 768) {
      dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_FULL))
    }
    else if (width < 1140) {
      dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED));
    }
    else if (width >= 1140) {
      dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
    }
  }, [width, dispatch])

  const isCondensed = sideBarType === layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED;
  const isLight = sideBarTheme === layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT;

  return (
    <>
      <Suspense fallback={<div />}>
        <div className='wrapper'>
          <Suspense fallback={<div />}>
            <Topbar />
          </Suspense>

          <Suspense fallback={<div />}>
            <LeftSideBar isCondensed={isCondensed} isLight={isLight} hideUserProfile={true} />
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

        {/* {isOpenRightSideBar && ( */}
        <Suspense fallback={<div />}>
          <RightSideBar />
        </Suspense>
        {/*   )}*/}
      </Suspense>
    </>
  );
};

export default VerticalLayout;

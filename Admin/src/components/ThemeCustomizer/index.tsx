import React, { LegacyRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

// redux
import { AppDispatch, RootState } from "../../redux/store";
import { changeLayoutPosition, changeLayoutTheme, changeLayoutType, changeLayoutWidth, changeSideBarTheme, changeSideBarType, changeTopBarTheme, toggleSideBarUserInfo } from "../../redux/actions";

// constants
import * as layoutConstants from "../../constants/layout";

// components
import LayoutTheme from "./LayoutTheme";
import LayoutType from "./LayoutType";
import LayoutWidth from "./LayoutWidth";
import TopBarTheme from "./TopBarTheme";
import SideBarTheme from "./SideBarTheme";
import SideBarType from "./SideBarType";
import LayoutPosition from "./LayoutPosition";
import SideBarUserInfo from "./SideBarUserInfo";
import { Row } from "react-bootstrap";

interface ThemeCustomizerProps {
  handleRightSideBar: (value: any) => void;
  rightBarNodeRef: LegacyRef<HTMLDivElement> | undefined;
}

const ThemeCustomizer = ({
  handleRightSideBar,
  rightBarNodeRef,
}: ThemeCustomizerProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    layoutType,
    layoutTheme,
    layoutWidth,
    topBarTheme,
    sideBarTheme,
    sideBarType,
    layoutPosition,
    showSideBarUserInfo,
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
   * change state based on props changes
   */
  // const _loadStateFromProps = useCallback(() => { }, [layoutType, width]);

  // useEffect(() => {
  //   _loadStateFromProps();
  // }, [_loadStateFromProps]);

  /**
   * Changes the layout type
   */
  const handleChangeLayoutType = (value: string) => {
    let type = value;
    switch (type) {
      case 'horizontal':
        dispatch(changeLayoutType(layoutConstants.LayoutType.LAYOUT_HORIZONTAL));
        break;
      default:
        dispatch(changeLayoutType(layoutConstants.LayoutType.LAYOUT_VERTICAL));
        break;
    }
  }

  /**
   * Changes the layout theme
   */
  const handleChangeLayoutTheme = (value: string) => {
    let theme = value;
    switch (theme) {
      case 'dark':
        dispatch(changeLayoutTheme(layoutConstants.LayoutTheme.THEME_DARK));
        break;
      default: dispatch(changeLayoutTheme(layoutConstants.LayoutTheme.THEME_LIGHT));
        break;
    }
  }

  /**
   * Changes the layout width
   */
  const handleChangeLayoutWidth = (value: string) => {
    let layoutWidth = value;
    switch (layoutWidth) {
      case 'boxed':
        dispatch(changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_BOXED));
        break;
      case 'detached':
        dispatch(changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_DETACHED));
        break;
      default:
        dispatch(changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID));
        break;
    }
  }

  /**
   * Changes the topbar theme
   */
  const handleChangeTopBarTheme = (value: string) => {
    let theme = value;
    switch (theme) {
      case 'dark':
        dispatch(changeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_DARK));
        break;
      case 'brand':
        dispatch(changeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_BRAND));
        break;
      default:
        dispatch(changeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_LIGHT));
        break;
    }
  }

  /**
   * Changes the left sidebar theme
   */
  const handleChangeSideBarTheme = (value: string) => {
    let theme = value;
    switch (theme) {
      case 'light':
        dispatch(changeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT));
        break;
      case 'brand':
        dispatch(changeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_BRAND));
        break;
      default:
        dispatch(changeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_DARK));
        break;
    };
  };

  /**
   * Changes the left sidebar type
   */
  const handleChangeSideBarType = (value: string) => {
    let type = value;
    switch (type) {
      case 'compact':
        dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_COMPACT));
        break;
      case 'condensed':
        dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED));
        break;
      case 'sm-hover':
        dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVER));
        break;
      case 'full':
        dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_FULL));
        break;
      case 'fullscreen':
        dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_FULLSCREEN));
        break;
      default:
        dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
        break;
    }
  };

  /**
   * Changes the layout position
   */
  const handleChangeLayoutPosition = (value: string) => {
    let position = value;
    switch (position) {
      case 'scrollable':
        dispatch(changeLayoutPosition(layoutConstants.LayoutPosition.POSITION_SCROLLABLE));
        break;
      default:
        dispatch(changeLayoutPosition(layoutConstants.LayoutPosition.POSITION_FIXED));
        break;
    };
  };

  /** 
   * Toggles the sidebar user info
   */
  const handleToggleSideBarUserInfo = (value: boolean) => {
    let checked = value;
    dispatch(toggleSideBarUserInfo(checked))
  }

  /**
   * Reset Layout
   */
  const reset = () => {
    handleChangeLayoutType(layoutConstants.LayoutType.LAYOUT_VERTICAL);
    handleChangeLayoutTheme(layoutConstants.LayoutTheme.THEME_LIGHT);
    handleChangeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID);
    handleChangeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_LIGHT);
    handleChangeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_DARK);
    handleChangeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT);
    handleChangeLayoutPosition(layoutConstants.LayoutPosition.POSITION_FIXED);
    handleToggleSideBarUserInfo(false);
  };

  return (
    <React.Fragment>
      <div
        className='d-flex align-items-center bg-primary p-3 offcanvas-header'
        ref={rightBarNodeRef}
      >
        <h5 className='text-white m-0'>Theme Settings</h5>
        <button
          type='button'
          className='btn-close btn-close-white ms-auto'
          onClick={handleRightSideBar}
        ></button>
      </div>
      <div className='offcanvas-body p-0'>
        <SimpleBar scrollbarMaxSize={320} className='h-100'>
          <div className='card mb-0 p-3'>
            <div className='alert alert-warning' role='alert'>
              <strong>Customize </strong> the overall color scheme, sidebar
              menu, etc.
            </div>

            {/* layout type */}
            <LayoutType
              handleChangeLayoutType={handleChangeLayoutType}
              layoutType={layoutType}
              layoutConstants={layoutConstants.LayoutType}
            />

            {/* layout theme */}
            <LayoutTheme
              handleChangeLayoutTheme={handleChangeLayoutTheme}
              layoutTheme={layoutTheme}
              layoutConstants={layoutConstants.LayoutTheme}
            />

            {/* layout width */}
            <LayoutWidth
              handleChangeLayoutWidth={handleChangeLayoutWidth}
              layoutWidth={layoutWidth}
              layoutConstants={layoutConstants.LayoutWidth}
            />

            {/* top bar theme */}
            <TopBarTheme
              handleChangeTopBarTheme={handleChangeTopBarTheme}
              topBarTheme={topBarTheme}
              layoutConstants={layoutConstants.TopBarTheme}
            />

            {/* side bar theme */}
            <SideBarTheme
              handleChangeSideBarTheme={handleChangeSideBarTheme}
              sideBarTheme={sideBarTheme}
              layoutConstants={layoutConstants.SideBarTheme}
            />

            {/* side bar type */}
            <SideBarType
              handleChangeSideBarType={handleChangeSideBarType}
              sideBarType={sideBarType}
              layoutConstants={layoutConstants.SideBarType}
            />

            {/* layout position */}
            <LayoutPosition
              handleChangeLayoutPosition={handleChangeLayoutPosition}
              layoutPosition={layoutPosition}
              layoutConstants={layoutConstants.LayoutPosition}
            />

            {/* side bar user info */}
            <SideBarUserInfo
              handleToggleSideBarUserInfo={handleToggleSideBarUserInfo}
              showSideBarUserInfo={showSideBarUserInfo}
            />

          </div>
        </SimpleBar>
      </div>
      <div className='offcanvas-footer border-top p-3 text-center'>
        <Row>
          <div className='col-6'>
            <button
              type='button'
              className='btn btn-light w-100'
              id='reset-layout'
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
          <div className='col-6'>
            <Link to='#' role='button' className='btn btn-primary w-100'>
              Buy Now
            </Link>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ThemeCustomizer;

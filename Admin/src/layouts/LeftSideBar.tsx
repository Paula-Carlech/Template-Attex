import React, { useRef } from "react";
import { Link } from "react-router-dom";

// assets
import avatar1 from '../assets/images/users/avatar-1.jpg';
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";
import logoSm from "../assets/images/logo-sm.png";
import SimpleBar from "simplebar-react";
import AppMenu from "./Menu";
import { getMenuItems } from "../helpers/menu";

/* User box */
const UserBox = () => {
  return (
    <div className='leftbar-user'>
      <Link to='/pages/profile'>
        <img
          src={avatar1}
          alt='user-avatar'
          height='42'
          className='rounded-circle shadow-sm'
        />
        <span className='leftbar-user-name mt-2'>Tosha Minner</span>
      </Link>
    </div>
  );
};

/* Sidebar content */
const SideBarContent = () => {
  return (
    <>
      <UserBox />
      <AppMenu menuItems={getMenuItems()} />
      <div className='clearfix' />
    </>
  )
}

interface LeftSideBarProps {
  isCondensed: boolean;
  isLight: boolean;
  hideUserProfile: boolean;
  hideLogo?: boolean;
}

const LeftSideBar = ({ isCondensed, isLight, hideUserProfile, hideLogo }: LeftSideBarProps) => {

  const menuNodeRef = useRef<HTMLDivElement>(null);

  // const {
  //   // layoutType,
  //   // layoutTheme,
  //   // layoutWidth,
  //   // topBarTheme,
  //   // sideBarTheme,
  //   // sideBarType,
  //   // layoutPosition,
  //   // showSideBarUserInfo,
  //   // isOpenRightSideBar,
  // } = useSelector((state: RootState) => ({
  //   layoutType: state.Layout.layoutType,
  //   layoutTheme: state.Layout.layoutTheme,
  //   layoutWidth: state.Layout.layoutWidth,
  //   topBarTheme: state.Layout.topBarTheme,
  //   sideBarTheme: state.Layout.sideBarTheme,
  //   sideBarType: state.Layout.sideBarType,
  //   layoutPosition: state.Layout.layoutPosition,
  //   showSideBarUserInfo: state.Layout.showSideBarUserInfo,
  //   isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  // }));

  function closeLeftSideBar() {
    document.getElementsByTagName('html')[0].classList.remove('sidebar-enable');
    let backdrop = document.getElementById('custom-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
      document.body.style.removeProperty('overflow');
    }
  }

  return (
    <React.Fragment>
      <div className="leftside-menu" ref={menuNodeRef}>
        {!hideLogo && (
          <>
            <Link to='/' className='logo logo-light'>
              <span className='logo-lg'>
                <img src={logo} alt='logo' />
              </span>
              <span className='logo-sm'>
                <img src={logoSm} alt='small logo' />
              </span>
            </Link>

            <Link to='/' className='logo logo-dark'>
              <span className='logo-lg'>
                <img src={logoDark} alt='dark logo' />
              </span>
              <span className='logo-sm'>
                <img src={logoSm} alt='small logo' />
              </span>
            </Link>
          </>
        )}

        {!isCondensed && (
          <>
            <div
              className='button-sm-hover'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label="Show Full Sidebar"
              data-bs-original-title='Show Full Sidebar'
            >
              <i className='ri-checkbox-blank-circle-line align-middle'/>
            </div>

            <div className='button-close-fullsidebar'>
              <i className='ri-close-fill align-middle' onClick={() => closeLeftSideBar()} />
            </div>
            <SimpleBar
              className='h-100'
              id='leftside-menu-container'
            >
              <SideBarContent />
            </SimpleBar>
          </>
        )}
        {isCondensed && <SideBarContent />}
      </div>
    </React.Fragment>

  );
};

export default LeftSideBar;

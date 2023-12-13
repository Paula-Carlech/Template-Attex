import React from 'react';
import { Link } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { changeLayoutTheme, changeSideBarType, showRightSidebar } from '../redux/actions';

// hooks
import { useViewPort } from '../hooks';

// constants
import { SideBarType, LayoutTheme } from '../constants';

// assets
import logo from '../assets/images/logo.png';
import logoSm from '../assets/images/logo-sm.png';
import logoDark from '../assets/images/logo-dark.png';
import profilePic from '../assets/images/users/avatar-1.jpg'
import avatar2 from '../assets/images/users/avatar-2.jpg'
import avatar4 from '../assets/images/users/avatar-4.jpg'

import TopBarSearch from '../components/TopBarSearch';
import LanguageDropdown from '../components/LanguageDropdown';
import NotificationDropdown from '../components/NotificationDropDown';
import AppsDropDown from '../components/AppsDropDown';
import MaximizeScreen from '../components/MaximizeScreen';
import ProfileDropDown from '../components/ProfileDropDown';
import SearchDropDown from '../components/SearchDropDown';

export interface NotificationItem {
  id: number;
  text: string;
  subText: string;
  icon?: string;
  avatar?: string;
  bgColor?: string;
  createdAt: Date;
}

/**
 * notification items
 */
const Notifications: NotificationItem[] = [
  {
    id: 1,
    text: "Datacorp",
    subText: "Caleb Flakelar commented on Admin",
    icon: 'ri-message-3-line fs-18',
    bgColor: 'primary',
    createdAt: subtractHours(new Date(), 1),
  },
  {
    id: 2,
    text: "Admin",
    subText: "New user registered",
    icon: "ri-user-add-line fs-18",
    bgColor: "info",
    createdAt: subtractHours(new Date(), 60),
  },
  {
    id: 3,
    text: "Cristina Pride",
    subText: "Hi, How are you? What about our next meeting",
    avatar: avatar2,
    createdAt: subtractHours(new Date(), 1440),
  },
  {
    id: 4,
    text: "Datacorp",
    subText: "Caleb Flakelar commented on Admin",
    icon: "ri-discuss-line fs-18",
    bgColor: 'primary',
    createdAt: subtractHours(new Date(), 2880),
  },
  {
    id: 5,
    text: "Karen Robinson",
    subText: "Wow ! this admin looks good and awesome design",
    avatar: avatar4,
    createdAt: subtractHours(new Date(), 2880),
  },
]

/**
 * profile menu itesms
 */
const ProfileMenus = [
  {
    label: "My Account",
    icon: "ri-account-circle-line",
    redirectTo: "/pages/profile",
  },
  {
    label: "Settings",
    icon: "ri-settings-4-line",
    redirectTo: "/pages/profile",
  },
  {
    label: "Support",
    icon: "ri-customer-service-2-line",
    redirectTo: "/pages/faq",
  },
  {
    label: "Lock Screen",
    icon: "ri-lock-password-line",
    redirectTo: "/auth/lock-screen",
  },
  {
    label: "Logout",
    icon: "ri-logout-box-line",
    redirectTo: "/auth/logout",
  },
];

/**
 * for subtraction minutes
 */
function subtractHours(date: Date, minutes: number) {
  date.setMinutes(date.getMinutes() - minutes);
  return date;
}

const Topbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewPort();

  const {
    // layoutType,
    layoutTheme,
    // layoutWidth,
    // topBarTheme,
    // sideBarTheme,
    sideBarType,
    // layoutPosition,
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
 * Toggle the leftmenu when having mobile screen
 */
  const handleLeftMenuCallBack = () => {
    if (width < 1140) {
      if (sideBarType === 'full') {
        showLeftSideBarBackdrop();
        document.getElementsByTagName('html')[0].classList.add('sidebar-enable');
      } else {
        dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_FULL));
      }
    } else if (sideBarType === 'condensed') {
      dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
    } else if (sideBarType === 'full') {
      showLeftSideBarBackdrop();
      document.getElementsByTagName('html')[0].classList.add('sidebar-enable');
    } else if (sideBarType === 'fullscreen') {
      dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
      document.getElementsByTagName('html')[0].classList.add('sidebar-enable');
    } else {
      dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED))
    }
  }

  /**
   * creates backdrop for leftsidebar
   */

  function showLeftSideBarBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.id = 'custom-backdrop';
    backdrop.className = 'offcanvas-backdrop fade show';
    document.body.appendChild(backdrop);

    backdrop.addEventListener('click', function (e) {
      document.getElementsByTagName('html')[0].classList.remove('sidebar-enable');
      dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_FULL));
      hideLeftSideBarBackdrop();
    });
  };

  function hideLeftSideBarBackdrop() {
    let backdrop = document.getElementById('custom-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
      document.body.style.removeProperty('overflow');
    }
  }

  /**
   * Toggle Dark Mode
   */
  const toggleDarkMode = () => {
    if (layoutTheme === 'dark') {
      dispatch(changeLayoutTheme(LayoutTheme.THEME_LIGHT));
    } else {
      dispatch(changeLayoutTheme(LayoutTheme.THEME_DARK));
    }
  }

  /**
   * Toggles the right sidebar
   */
  const handleRightSideBar = () => {
    dispatch(showRightSidebar());
  };

  return (
    <React.Fragment>
      <div className='navbar-custom'>
        <div className='topbar container-fluid'>
          <div className='d-flex align-items-center gap-lg-2 gap-1'>
            <div className='logo-topbar'>
              <Link to='/' className='logo-light'>
                <span className='logo-lg'>
                  <img src={logo} alt='logo' />
                </span>
                <span className='logo-sm'>
                  <img src={logoSm} alt='small logo' />
                </span>
              </Link>

              <Link to='/' className='logo-dark'>
                <span className='logo-lg'>
                  <img src={logoDark} alt='dark logo' />
                </span>
                <span className='logo-sm'>
                  <img src={logoSm} alt='small logo' />
                </span>
              </Link>
            </div>

            <button
              className='button-toggle-menu'
              onClick={handleLeftMenuCallBack}
            >
              <i className='ri-menu-2-fill' />
            </button>

            <button
              className='navbar-toggle'
              data-bs-toggle='collapse'
              data-bs-target='#topnav-menu-content'
            >
              <div className='lines'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div className='app-search dropdown d-none d-lg-block'>
              <TopBarSearch />
            </div>
          </div>

          <ul className='topbar-menu d-flex align-items-center gap-3'>
            <li className='dropdown d-lg-none'>
              <SearchDropDown />
            </li>

            <li className='dropdown'>
              <LanguageDropdown />
            </li>

            <li className='dropdown notification-list'>
              <NotificationDropdown notifications={Notifications} />
            </li>

            <li className='dropdown d-none d-sm-inline-block'>
              <AppsDropDown />
            </li>

            <li className='d-none d-sm-inline-block'>
              <button className='nav-link' onClick={handleRightSideBar}>
                <i className='ri-settings-3-line fs-22' />
              </button>
            </li>

            <li className='d-none d-sm-inline-block'>
              <div
                className='nav-link'
                id='light-dark-mode'
                data-bs-toggle='tooltip'
                data-bs-placement='left'
                title='Theme Mode'
                onClick={toggleDarkMode}
              >
                <i className='ri-moon-line fs-22' />
              </div>
            </li>

            <li className='d-none d-md-inline-block'>
              <MaximizeScreen />
            </li>

            <li className='dropdown'>
              <ProfileDropDown
                profiliePic={profilePic}
                menuItems={ProfileMenus}
                username='Tosha Minner'
                userTitle='Founder'
              />
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;

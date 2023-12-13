import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface ProfileMenuItem {
  label: string;
  icon: string;
  redirectTo: string;
}

interface ProfileDropDownProps {
  menuItems: Array<ProfileMenuItem>;
  profiliePic?: string;
  username: string;
  userTitle?: string;
}

const ProfileDropDown = (props: ProfileDropDownProps) => {

  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const profilePic = props.profiliePic;

  /**
   * Toggle Profile DropDown
   */
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  }

  return (
    <Dropdown show={dropDownOpen} onToggle={toggleDropDown}>
      <Dropdown.Toggle
        as='a'
        onClick={toggleDropDown}
        className='nav-link dropdown-toggle arrow-none nav-user px-2'
        role='button'
      >
        <span className='account-user-avatar'>
          <img
            src={profilePic}
            alt='user-avatar'
            width='32'
            className='rounded-circle'
          />
        </span>
        <span className='d-lg-flex flex-column gap-1 d-none'>
          <h5 className='my-0'>{props.username}</h5>
          <h6 className='my-0 fw-normal'>{props.userTitle}</h6>
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown'>

        <div className='dropdown-header noti-title'>
          <h6 className='text-overflow m-0'>Welcome !</h6>
        </div>

        {(props.menuItems || []).map((item, idx) => {
          return (
            <Link to={item.redirectTo} className='dropdown-item' key={idx}>
              <i className={`${item.icon} fs-18 align-middle me-1`}/>
              <span>{item.label}</span>
            </Link>
          )
        })}

      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProfileDropDown
import React, { useState } from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// utils
import { splitArray } from '../../utils';

// images
import githubIcon from "./icons/github.png";
import bitbucketIcon from "./icons/bitbucket.png";
import dropboxIcon from "./icons/dropbox.png";
import slackIcon from "./icons/slack.png";
import dribbbleIcon from "./icons/dribbble.png";
import behanceIcon from "./icons/behance.png";

/**
 * Get the apps
 */
const Apps = [
  {
    name: "GitHub",
    icon: githubIcon,
    redirectTo: "#",
  },
  {
    name: "Bitbucket",
    icon: bitbucketIcon,
    redirectTo: "#",
  },
  {
    name: "Dropbox",
    icon: dropboxIcon,
    redirectTo: "#",
  },
  {
    name: "Slack",
    icon: slackIcon,
    redirectTo: "#",
  },
  {
    name: "Dribbble",
    icon: dribbbleIcon,
    redirectTo: "#",
  },
  {
    name: "Behance",
    icon: behanceIcon,
    redirectTo: "#",
  },
]

const AppsDropDown = () => {

  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const apps = Apps || [];
  const chunk_size = 3;
  const appsChunks = splitArray(apps, chunk_size);
  /*
   * toggle apps-dropdown
   */
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <Dropdown show={dropDownOpen} onToggle={toggleDropDown}>
      <Dropdown.Toggle
        as="a"
        className='nav-link dropdown-toggle arrow-none'
        role='button'
        onClick={toggleDropDown}
      >
        <i className='ri-apps-2-line fs-22'/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0'>
        <div className='p-2'>
          {(appsChunks || []).map((chunk, idx) => (
            <Row className='g-0' key={idx}>
              {(chunk || []).map((item, i) => (
                <div className='col' key={i}>
                  <Link to={item.redirectTo} className='dropdown-icon-item'>
                    <img
                      src={item.icon}
                      alt={item.name}
                    />
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
            </Row>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown >
  )
}

export default AppsDropDown
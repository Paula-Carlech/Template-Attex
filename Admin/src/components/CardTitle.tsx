import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type MenuItem = {
  label: string;
  icon?: string;
  variant?: string;
  hasDivider?: boolean;
};

type CardTitleProps = {
  menuItems: Array<MenuItem>;
  title: string | React.ReactNode;
  containerClass: string;
  icon?: string;
};

const CardTitle = ({ title, containerClass, icon, menuItems }: CardTitleProps) => {
  return (
    <div className={containerClass}>
      {typeof title === 'string' ? <h4 className="header-title mb-0">{title}</h4> : title}
      <Dropdown>
        <Dropdown.Toggle as={Link} to="#" className="arrow-none card-drop">
          <i className={icon ? icon : 'mdi mdi-dots-vertical'} />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          {(menuItems || []).map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                {item.hasDivider && <Dropdown.Divider as="div" />}
                <Dropdown.Item className={item.variant}>
                  {item.icon && <i className={`me-1 ${item.icon}`} />}
                  {item.label}
                </Dropdown.Item>
              </React.Fragment>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CardTitle;

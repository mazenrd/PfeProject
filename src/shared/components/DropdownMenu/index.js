import React from "react";

import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import "./styles.scss";
import PropTypes from "prop-types";

const DropdownMenu = ({ logout }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={logout}>
        <a target="_blank" rel="noopener noreferrer">
          Logout
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>
        3rd menu item（disabled）
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <DownOutlined className="down" />
      </a>
    </Dropdown>
  );
};
DropdownMenu.propTypes = {
  logout: PropTypes.func,
};
export default DropdownMenu;

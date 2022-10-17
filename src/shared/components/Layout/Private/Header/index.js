import { React, useState } from "react";

import {
  VideoCameraOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Drawer, Image, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import DropdownMenu from "shared/components/DropdownMenu";
// import Logo from "shared/components/Logo";
import SearchInput from "shared/components/SearchInput";
import { useStore } from "shared/hooks/useStore";
import { PATHS } from "utils/constants";

import { Subtraction } from "../../../../../assets";

import "./styles.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { clearStore } = useStore();
  const history = useHistory();
  const logout = () => {
    clearStore();
    history.push(PATHS.PUBLIC.LOGIN);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header--wrap">
          <div className="left-header">
            <Link to={PATHS.PRIVATE.DASHBOARD}>
              <img src={Subtraction} className="SurekateLogo-container" />
            </Link>
            <div className="header-search">
              <SearchInput />
            </div>
          </div>
          <div className="right-header">
            <div className="header-items">
              <div className="icon-container">
                <VideoCameraOutlined />
              </div>
              <div className="icon-container">
                <BellOutlined />
                <div className="notif" />
              </div>
              <div className="icon-container">
                <SettingOutlined />
              </div>
            </div>
            <div className="header-dropdown">
              <div className="icon">
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      className="avatar"
                    />
                  }
                />
              </div>
              <div>user</div>
              <div>
                <DropdownMenu logout={logout} />
              </div>
            </div>
          </div>
          <Button className="barsMenu" type="primary" onClick={showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
            height="bottom">
            <Menu>
              <Menu.Item key="mail">
                <SearchInput />
              </Menu.Item>
              <Menu.Item key="app">
                <a href="">Notifications</a>
              </Menu.Item>
              <Menu.Item key="app">
                <a href="">Settings</a>
              </Menu.Item>
              <Menu.Item key="app">
                <a href="">Call</a>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

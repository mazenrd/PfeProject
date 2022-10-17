import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./assets/style.scss";
import { useHistory } from "react-router-dom";

const { Sider } = Layout;

const Component = ({ mainIcon, display, menus, mainNavigation }) => {
  const history = useHistory();
  const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(localStorageKey)),
    );
    useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
    return [value, setValue];
  };
  const [collapsed, setCollapsed] = useStateWithLocalStorage("collapseSider");
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={onCollapse}
      className="main-sider"
      theme={"light"}
      style={{
        display,
      }}>
      <div onClick={mainNavigation} className={"main-sider-home"}>
        {mainIcon}
      </div>
      <Menu mode="inline" theme={"light"} className={"main-sider-menu"}>
        {menus.map(({ icon, key, title, redirectTo }) => (
          <Menu.Item
            icon={icon}
            key={key}
            onClick={() => history.push(redirectTo)}
            className={"main-sider-item"}>
            {title}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
Component.propTypes = {
  display: PropTypes.string,
  mainNavigation: PropTypes.func,
  mainIcon: PropTypes.node,
  collapsed: PropTypes.bool,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      key: PropTypes.string,
      onClick: PropTypes.func,
      title: PropTypes.string,
    }),
  ),
};
Component.defaultProps = {
  display: "block",
  mainIcon: null,
  collapsed: true,
  menus: [],
  mainNavigation: () => {},
};
export default Component;

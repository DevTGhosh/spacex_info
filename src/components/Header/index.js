import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/rocket.png";
import "./Header.css";

const { Header } = Layout;

const useKey = () => {
  let location = useLocation();
  if (location.pathname === "/") {
    return ["1"];
  } else if (location.pathname === "/payloads") {
    return ["2"];
  } else {
    return null;
  }
};

export default function Navbar(props) {
  return (
    <Header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        selectedKeys={useKey()}
      >
        <Menu.Item key="1">
          <Link to="/">SpaceX History</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/payloads">SpaceX Payloads</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

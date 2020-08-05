import React from "react";
import { Layout, Menu } from "antd";
import logo from "../assets/rocket.png";
import "./Header.css";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header>
      <img src={logo} alt="Logo" className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">SpaceX History</Menu.Item>
        <Menu.Item key="2">SpaceX Payload</Menu.Item>
      </Menu>
    </Header>
  );
}

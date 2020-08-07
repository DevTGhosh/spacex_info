import React from "react";
import "fontsource-roboto";
import { Layout } from "antd";
import "antd/dist/antd.dark.css";
import Header from "../Header";
import "./Layout.css";

const { Content, Footer } = Layout;

export default function Layouts(props) {
  return (
    <Layout className="layout">
      <Header />
      <Content className="content">{props.children}</Content>
      <Footer className="footer">
        SpaceX Info ©2020 Created by Devjyoti Ghosh
      </Footer>
    </Layout>
  );
}

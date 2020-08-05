import React from "react";
import "fontsource-roboto";
import { Layout } from "antd";
import SpaceHistory from "./pages/SpaceHistory";
import Header from "./components/Header";
import "./App.css";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header />
      <Content className="content">
        <SpaceHistory />
      </Content>
      <Footer className="footer">
        SpaceX Info ©2020 Created by Devjyoti Ghosh
      </Footer>
    </Layout>
  );
}

export default App;

import React from "react";
import "fontsource-roboto";
import { Layout } from "antd";
import SpaceHistory from "./pages/SpaceHistory";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Layout className="layout">
      <Header />
      <SpaceHistory />
    </Layout>
  );
}

export default App;

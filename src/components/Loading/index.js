import React from "react";
import { Spin, Space } from "antd";
import "./Loading.css";

export default function loading() {
  return (
    <Space size="middle" className="spin">
      <Spin size="large" />
    </Space>
  );
}

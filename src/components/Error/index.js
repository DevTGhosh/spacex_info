import React from "react";
import { Alert } from "antd";

export default function Error({ errorMessage }) {
  return (
    <Alert
      message="Please check your Internet Connection and reload the page"
      description={errorMessage}
      type="error"
    />
  );
}

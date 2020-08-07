import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function index() {
  return (
    <Layout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    </Layout>
  );
}

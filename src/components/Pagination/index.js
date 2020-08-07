import React from "react";
import { Pagination } from "antd";

export default function Paginate(props) {
  const onChange = (page) => {
    props.setCurrentPage(page);
  };
  return (
    <Pagination
      defaultPageSize={props.pageSize}
      total={props.length}
      onChange={onChange}
      style={{ margin: "2.5rem" }}
    />
  );
}

import React from "react";
import { Pagination } from "antd";
import "./Pagination.css";

export default function Paginate(props) {
  const onChange = (page) => {
    props.setCurrentPage(page);
  };
  return (
    <Pagination
      showSizeChanger={false}
      defaultPageSize={props.pageSize}
      total={props.length}
      onChange={onChange}
      className="pagination"
    />
  );
}

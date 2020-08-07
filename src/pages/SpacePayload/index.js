import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPayload,
  changePayloadActiveTabKey,
} from "../../redux/slices/payload";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import "./SpacePayload.css";

export default function SpacePayload() {
  const dispatch = useDispatch();
  const payload = useSelector((state) => state.payload);
  const [currentPage, setCurrentPage] = useState([1]);
  const [pageSize] = useState(3);

  useEffect(() => {
    dispatch(fetchPayload());
  }, [dispatch]);

  return (
    <div className="space-payload">
      <h1 className="heading">SpaceX Payloads</h1>
      {payload.isLoading ? (
        <Loading />
      ) : (
        <>
          <Card
            data={payload.data}
            currentPage={currentPage}
            pageSize={pageSize}
            dispatch={dispatch}
            changePayloadActiveTabKey={changePayloadActiveTabKey}
          />
          <div className="pagination">
            <Pagination
              pageSize={pageSize}
              length={payload.data.length}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
    </div>
  );
}

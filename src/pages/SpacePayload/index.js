import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPayload,
  changePayloadActiveTabKey,
} from "../../redux/slices/payload";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import "./SpacePayload.css";

export default function SpacePayload() {
  const dispatch = useDispatch();
  const payload = useSelector((state) => state.payload);
  const [currentPage, setCurrentPage] = useState([1]);
  const [pageSize] = useState(3);

  useEffect(() => {
    if (payload.data.length === 0) {
      dispatch(fetchPayload());
    }
  }, [dispatch, payload.data.length]);

  return (
    <Layout>
      <div className="space-payload">
        <h1 className="heading">SpaceX Payloads</h1>
        {/* Checks first if Loading is true then checks if Api call returns error
        and then finally returns Card if everyting is fine */}
        {payload.isLoading ? (
          <Loading />
        ) : payload.error ? (
          <Error errorMessage={payload.error} />
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
    </Layout>
  );
}

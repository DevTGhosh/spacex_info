import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory } from "../../redux/slices/history";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import Accordian from "../../components/Accordian";
import Loading from "../../components/Loading";
import "./SpaceHistory.css";

export default function SpaceHistory() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  const [currentPage, setCurrentPage] = useState([1]);
  const [pageSize] = useState(5);

  useEffect(() => {
    if (history.data.length === 0) {
      dispatch(fetchHistory());
    }
  }, [dispatch, history.data.length]);

  return (
    <Layout>
      <div className="space-history">
        <h1>SpaceX History</h1>
        {history.isLoading ? (
          <Loading />
        ) : (
          <>
            <Accordian
              data={history.data}
              currentPage={currentPage}
              pageSize={pageSize}
            />
            <Pagination
              pageSize={pageSize}
              length={history.data.length}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

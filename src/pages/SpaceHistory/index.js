import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory } from "../../redux/slices/history";
import Pagination from "../../components/Pagination";
import Panel from "../../components/Panel";
import "./SpaceHistory.css";

export default function SpaceHistory() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  const [currentPage, setCurrentPage] = useState([1]);
  const [pageSize] = useState(5);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  return (
    <div className="space-history">
      <h1>SpaceX History</h1>
      <Panel
        data={history.data}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Pagination
        pageSize={pageSize}
        length={history.data.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

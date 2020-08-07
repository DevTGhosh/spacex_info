import React from "react";
import { Collapse } from "antd";
import reddit from "../../assets/reddit.png";
import article from "../../assets/link.png";
import wikipedia from "../../assets/wikipedia.png";
import "./Accordian.css";

const { Panel } = Collapse;

const getDate = (unixTimeCode) => {
  const date = new Date(unixTimeCode * 1000)
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, "/")
    .replace("T", " ");
  return date;
};

const displayPanel = (data, currentPage, pageSize) => {
  const startingIndex = (currentPage - 1) * pageSize;
  const endingIndex = startingIndex + pageSize;
  const slicedData = data.slice(startingIndex, endingIndex);

  return slicedData.map((item) => {
    return (
      <Panel header={item.title} key={item.id}>
        Launch Date: {getDate(item.event_date_unix)}
        <br />
        {item.details}
        <br />
        <div className="links">
          {item.links.reddit ? (
            <a
              href={item.links.reddit}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={reddit} alt="reddit icon" className="link-img" />
            </a>
          ) : null}
          {item.links.article ? (
            <a
              href={item.links.article}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={article} alt="article icon" className="link-img" />
            </a>
          ) : null}
          {item.links.wikipedia ? (
            <a
              href={item.links.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={wikipedia} alt="wikipedia icon" className="link-img" />
            </a>
          ) : null}
        </div>
      </Panel>
    );
  });
};

export default function Accordian({ data, currentPage = 1, pageSize = 5 }) {
  return (
    <Collapse
      defaultActiveKey={["1"]}
      accordion={true}
      className="collapse-accordian"
    >
      {displayPanel(data, currentPage, pageSize)}
    </Collapse>
  );
}

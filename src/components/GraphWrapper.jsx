import { useState } from "react";
import graphData from "../pages/graphData.json";

const GraphWrapper = ({ graphId, children, last }) => {
  const [showGraph, setShowGraph] = useState(false);
  const graphInfo = graphData.find((graph) => graph.id === graphId);
  null;
  return (
    <>
      <div className="all">
        <div>
          <h1>{graphInfo.title}</h1>
        </div>
        <div className="center-button">
          <button
            className="btn m-2 btn-outline-primary"
            onClick={() => setShowGraph(!showGraph)}
          >
            {showGraph ? "Hide" : "Show"}
          </button>
          {showGraph && children}
        </div>
        <h2 className="mb-5 mt-3">
          Ultimo dato: <span className="text-danger">{last}</span>
        </h2>
        <p className="text-center fs-4 ms-5 me-5 ">{graphInfo.description}</p>
      </div>
    </>
  );
};

export default GraphWrapper;

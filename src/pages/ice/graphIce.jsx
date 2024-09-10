import { useIceData } from "./iceAPI";
import ChartLine from "../../components/LineChart.jsx";
import GraphWrapper from "../../components/GraphWrapper.jsx";
export default function GraphIce() {
  const { isLoading, error, data } = useIceData();
  let last = data && data.length > 0 ? data[data.length - 1] : null;
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <GraphWrapper graphId="ice" last={last.value}>
        <ChartLine
          data={data}
          dataY="value"
          dataX="yearMonth"
          domain={[10, 30]}
        />
      </GraphWrapper>{" "}
    </>
  );
}

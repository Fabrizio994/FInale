import { useIceData } from "./iceAPI";
import Chart from "../../components/Chart.jsx";
import GraphWrapper from "../../components/GraphWrapper.jsx";
import Spinner from "../../components/spinner.jsx";
export default function GraphIce() {
  const { isLoading, error, data } = useIceData();
  let last = data && data.length > 0 ? data[data.length - 1] : null;
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <GraphWrapper graphId="ice" last={last.value}>
        <Chart
          type="line"
          data={data}
          dataY="value"
          dataX="yearMonth"
          domain={[10, 30]}
        />
      </GraphWrapper>{" "}
    </>
  );
}

import { useNo2Data } from "./no2APi.jsx";
import ChartArea from "../../components/AreaChart.jsx";
import GraphWrapper from "../../components/GraphWrapper.jsx";
export default function GraphNo2() {
  const { isLoading, error, data } = useNo2Data();
  const last = data && data.length > 0 ? data[data.length - 1] : null;
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <GraphWrapper graphId="no2" last={last.average}>
        <ChartArea
          data={data}
          dataY="average"
          dataX="date"
          domain={["dataMin", "dataMax"]}
        />
      </GraphWrapper>
    </>
  );
}

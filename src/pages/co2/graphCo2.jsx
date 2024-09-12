import { useCo2Data } from "./co2API.jsx";
import ChartArea from "../../components/AreaChart.jsx";
import GraphWrapper from "../../components/GraphWrapper.jsx";
import Spinner from "../../components/spinner.jsx";

export default function GraphCo290() {
  const { isLoading, error, data } = useCo2Data();
  const last = data && data.length > 0 ? data[data.length - 1] : null;
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <GraphWrapper graphId="co2" last={last.cycle}>
        <ChartArea
          data={data}
          dataY="trend"
          dataX="yearMonth"
          domain={["dataMin", "dataMax"]}
        />
      </GraphWrapper>
    </>
  );
}

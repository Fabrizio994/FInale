import { useMethaneData } from "./methaneApi.jsx";
import ChartLine from "../../components/LineChart.jsx";
import GraphWrapper from "../../components/GraphWrapper.jsx";

export default function GraphMethane() {
  const { isLoading, error, data } = useMethaneData();
  const last = data && data.length > 0 ? data[data.length - 1] : null;
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <GraphWrapper graphId="methane" last={last.average}>
        <ChartLine
          data={data}
          dataY="average"
          dataX="date"
          domain={["dataMin", "dataMax"]}
        />
      </GraphWrapper>
    </>
  );
}

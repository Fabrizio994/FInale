import { useTemperatureData } from "./tempAPI.jsx";
import ChartLine from "../../components/LineChart.jsx";
import GraphWrapper from "../../components/GraphWrapper.jsx";
import Spinner from "../../components/spinner.jsx";
export default function GraphTemperature() {
  const { isLoading, error, data } = useTemperatureData();
  const last = data && data.length > 0 ? data[data.length - 1] : null;
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <GraphWrapper graphId="temperature" last={last.station}>
        <ChartLine
          data={data}
          dataY="station"
          dataX="time"
          domain={[-1.5, "dataMax"]}
        />
      </GraphWrapper>
    </>
  );
}

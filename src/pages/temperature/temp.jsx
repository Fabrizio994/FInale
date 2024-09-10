import TemperatureGraph from "./tempgraph.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/navBar";
export default function Temperature() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <TemperatureGraph />
      </QueryClientProvider>
    </>
  );
}

import MethaneGraph from "./methaneGraph.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/navBar";
export default function Methane() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <MethaneGraph />
      </QueryClientProvider>
    </>
  );
}

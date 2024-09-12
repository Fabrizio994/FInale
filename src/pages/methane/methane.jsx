import MethaneGraph from "./methaneGraph.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/Navbarfold/navBar.jsx";
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

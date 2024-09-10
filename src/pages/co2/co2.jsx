import { QueryClient, QueryClientProvider } from "react-query";
import GraphCo2 from "./graphCo2";
import Navbar from "../../components/navBar";
function Co2() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <GraphCo2 />
      </QueryClientProvider>
    </>
  );
}

export default Co2;

import No2Graph from "./no2Graph.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/navBar";
export default function Methane() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <No2Graph />
      </QueryClientProvider>
    </>
  );
}

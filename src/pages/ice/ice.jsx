import { QueryClient, QueryClientProvider } from "react-query";
import GraphIce from "./graphIce.jsx";
import Navbar from "../../components/navBar";
const queryClient = new QueryClient();

export default function Ice() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <GraphIce />
      </QueryClientProvider>
    </>
  );
}

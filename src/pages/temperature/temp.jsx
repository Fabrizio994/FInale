import TemperatureGraph from "./tempgraph.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
export default function Temperature() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <TemperatureGraph />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

import MethaneGraph from "./methaneGraph.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
export default function Methane() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <MethaneGraph />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

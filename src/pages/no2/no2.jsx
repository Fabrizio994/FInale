import No2Graph from "./no2Graph.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
export default function Methane() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <No2Graph />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

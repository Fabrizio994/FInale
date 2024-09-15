import { QueryClient, QueryClientProvider } from "react-query";
import GraphCo2 from "./graphCo2";
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
function Co2() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={new QueryClient()}>
        <GraphCo2 />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

export default Co2;

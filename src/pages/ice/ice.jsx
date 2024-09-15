import { QueryClient, QueryClientProvider } from "react-query";
import GraphIce from "./graphIce.jsx";
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
const queryClient = new QueryClient();

export default function Ice() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <GraphIce />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

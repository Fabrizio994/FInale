import GraphIce from "./graphIce.jsx";
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
import Helmet from "../../components/Helmet.jsx";

export default function Ice() {
  return (
    <>
      <Helmet description="Ice graph">GhiaccioPoalre</Helmet>
      <Navbar />
      <GraphIce />
      <Footer />
    </>
  );
}

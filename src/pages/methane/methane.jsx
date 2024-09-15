import MethaneGraph from "./methaneGraph.jsx";
("react-query");
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
import Helmet from "../../components/Helmet.jsx";
export default function Methane() {
  return (
    <>
      <Helmet description="Methane graph">Metano</Helmet>
      <Navbar />
      <MethaneGraph />
      <Footer />
    </>
  );
}

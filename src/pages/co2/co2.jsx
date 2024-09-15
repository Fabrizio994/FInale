import GraphCo2 from "./graphCo2";
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
import Helmet from "../../components/Helmet.jsx";
function Co2() {
  return (
    <>
      <Helmet description="Co2 graph">Co2</Helmet>
      <Navbar />
      <GraphCo2 />
      <Footer />
    </>
  );
}

export default Co2;

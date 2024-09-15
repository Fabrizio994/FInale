import No2Graph from "./no2Graph.jsx";
("react-query");
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";
import Helmet from "../../components/Helmet.jsx";
export default function No2() {
  return (
    <>
      <Helmet description="No2 graph">No2</Helmet>
      <Navbar />
      <No2Graph />
      <Footer />
    </>
  );
}

import TemperatureGraph from "./tempgraph.jsx";
("react-query");
import Navbar from "../../components/Navbarfold/navBar.jsx";
import Footer from "../../components/FooterFold/footer.jsx";

import Helmet from "../../components/Helmet.jsx";
export default function Temperature() {
  return (
    <>
      <Helmet description="Temperature graph">Temperature</Helmet>
      <Navbar />
      <TemperatureGraph />
      <Footer />
    </>
  );
}

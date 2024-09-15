import Navbar from "../../components/Navbarfold/navBar.jsx";
import graphData from "../graphData.json";
import Footer from "../../components/FooterFold/footer.jsx";
import "./home.css";
function Home() {
  const homeData = graphData.find((graph) => graph.id === "home");
  return (
    <>
      <Navbar />
      <div className="homePage">
        <h1 className="mt-5 display-1 ">GlobalStats</h1>
        <div className="homeCont">
          <p className=" homeP">{homeData.description}</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;

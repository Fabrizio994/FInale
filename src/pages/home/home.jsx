import Navbar from "../../components/Navbarfold/navBar.jsx";
import graphData from "../graphData.json";
import "./home.css";
function Home() {
  const homeData = graphData.find((graph) => graph.id === "home");
  return (
    <>
      <Navbar />
      <div className="homePage">
        <div className="homeCont">
          <p className=" homeP">{homeData.description}</p>
        </div>
      </div>
    </>
  );
}
export default Home;

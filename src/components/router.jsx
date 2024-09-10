import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home.jsx";
import Co2 from "../pages/co2/co2.jsx";
import Ice from "../pages/ice/ice.jsx";
import Methane from "../pages/methane/methane.jsx";
import No2 from "../pages/no2/no2.jsx";
import Temperature from "../pages/temperature/temp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/co2",
    element: <Co2></Co2>,
  },
  {
    path: "/ice",
    element: <Ice></Ice>,
  },
  {
    path: "/methane",
    element: <Methane></Methane>,
  },
  {
    path: "/no2",
    element: <No2></No2>,
  },
  {
    path: "/temperature",
    element: <Temperature></Temperature>,
  },
]);

export default router;

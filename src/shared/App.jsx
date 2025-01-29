import React from "react";
import Applelogo from "../assets/apple.png";
import Googlelogo from "../assets/google-play.png";
import useHomeData from "../hooks/useHomeData";
import { Link } from "react-router-dom";

const App = () => {
  const { data, section } = useHomeData("Home", "Download App");

  return (
    <>
        <Link
          to={section?.downloadsApp[0]?.download_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Applelogo} alt="App Store" />
        </Link>
        <Link
          to={section?.downloadsApp[1]?.download_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Googlelogo} alt="Google Play" />
        </Link>
    </>
  );
};

export default App;

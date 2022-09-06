import GlobalStyles from "./components/GlobalStyles";
import Header from "./layout/Header";
import { ThemeContext } from "./Theme";
import { useContext, useEffect, useState } from "react";
import BackgroundMotivation from "./components/BackgroundMotivation";
import MotivationSong from "./components/MotivationSong";
import VideoMotivation from "./components/VideoMotivation";
import Footer from "./layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const noData = () => {
    return (
      <div
        style={{
          fontSize: 20,
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "20px",
          right: "20px",
          boxShadow: "1px 4px 4px 2px rgba(0,0,0,0.4)",
          padding: "10px 5px",
          borderRadius: 5,
          fontWeight: "500",
          color: "#eb4d4b",
          animation: "error-mes 2s ease",
        }}
      >
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ marginRight: 5 }}
        />
        No data response, please use this app in mobile
      </div>
    );
  };
  const dataResponse = () => {
    return (
      <>
        <Header />
        <BackgroundMotivation />
        <MotivationSong />
        <VideoMotivation />
        <Footer />
      </>
    );
  };
  const [showApp, setShowApp] = useState(false);
  useEffect(() => {
    const handleSetShowApp = () => {
      if (window.innerWidth >= 560) {
        setShowApp(false);
      } else {
        setShowApp(true);
      }
    };
    window.addEventListener("load", handleSetShowApp());
    window.addEventListener("resize", handleSetShowApp);

    return () => {
      window.removeEventListener("load", handleSetShowApp());
      window.removeEventListener("resize", handleSetShowApp);
    };
  }, []);

  const theme = useContext(ThemeContext);
  const [themeValue] = theme;
  return (
    <GlobalStyles>
      <div
        className="App"
        data-theme={themeValue.theme}
        style={{
          minHeight: "100vh",
          transition: "all 0.5s ease",
          position: "relative",
        }}
      >
        {showApp ? dataResponse() : noData()}
      </div>
    </GlobalStyles>
  );
}

export default App;

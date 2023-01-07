import GlobalStyles from "./components/GlobalStyles";
import Header from "./layout/Header";
import { ThemeContext } from "./Theme";
import { useContext } from "react";
import BackgroundMotivation from "./components/BackgroundMotivation";
import MotivationSong from "./components/MotivationSong";
import VideoMotivation from "./components/VideoMotivation";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
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
        <Header />
        <BackgroundMotivation />
        <MotivationSong />
        <VideoMotivation />
        <Footer />
      </div>
    </GlobalStyles>
  );
}

export default App;

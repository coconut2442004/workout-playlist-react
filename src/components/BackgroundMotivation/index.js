import classNames from "classnames/bind";
import styles from "./BackgroundMotivation.module.scss";
import bg3 from "../../imgs/bg3.jpg";
import lightbg from "../../imgs/lightbg.jpg";
import bg2 from "../../imgs/bg2.jpg";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
const cx = classNames.bind(styles);
function BackgroundMotivation() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={cx("wrapper")}>
      <img
        src={theme.theme === "dark" ? bg2 : lightbg}
        style={
          theme.theme === "dark"
            ? { transform: "translate(0 , -29%)" }
            : { transform: "translate(0 , 0)" }
        }
        alt="Background"
        className={cx("background-motivation")}
      />
    </div>
  );
}

export default BackgroundMotivation;

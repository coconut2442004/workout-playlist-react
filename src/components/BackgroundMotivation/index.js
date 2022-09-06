import classNames from "classnames/bind";
import styles from "./BackgroundMotivation.module.scss";
import lightbg from "../../imgs/lightbg.jpg";
import bg4 from "../../imgs/bg4.jpg";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import { motion } from "framer-motion";
const cx = classNames.bind(styles);
function BackgroundMotivation() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={cx("wrapper")}>
      <motion.div
        key={theme.theme === "dark" ? bg4 : lightbg}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
      >
        <img
          src={theme.theme === "dark" ? bg4 : lightbg}
          alt="Background"
          className={cx("background-motivation")}
        />
      </motion.div>
    </div>
  );
}

export default BackgroundMotivation;

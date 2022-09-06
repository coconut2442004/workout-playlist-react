import { faMoon, faSliders, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState } from "react";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import { changeTheme } from "../../Theme";
import { ShowMenuContext } from "../../Menu/ShowMenu";

const cx = classNames.bind(styles);

function Header() {
  const [showMenu, setShowMenu] = useContext(ShowMenuContext);
  const [themeContext, setThemeContext] = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeContext.theme);
  const [icon, setIcon] = useState(theme === "light" ? faMoon : faSun);
  const handleChangeTheme = () => {
    setTheme((theme) => {
      if (theme === "light") {
        theme = "dark";
        setIcon(icon === faMoon ? faSun : faMoon);
        setThemeContext(changeTheme(theme));
      } else {
        theme = "light";
        setIcon(icon === faMoon ? faSun : faMoon);
        setThemeContext(changeTheme(theme));
      }
      localStorage.setItem("theme", theme);
      return theme;
    });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu")}>
        <FontAwesomeIcon
          icon={icon}
          className={cx("menu-item", "icon-hover")}
          onClick={handleChangeTheme}
        />
        <FontAwesomeIcon
          icon={faSliders}
          className={cx("menu-item", "icon-hover")}
          placement="bottom-end"
          onClick={() => {
            setShowMenu(showMenu ? false : true);
          }}
        />
      </div>
    </div>
  );
}

export default Header;

import Auth from "../../components/Auth/Auth";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <Auth />
    </div>
  );
}

export default Footer;

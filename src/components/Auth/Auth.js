import {
  faFacebook,
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
const cx = classNames.bind(styles);
function Auth() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("social-media")}>
        <a href="https://github.com">
          <FontAwesomeIcon
            icon={faGithub}
            className={cx("icon-social-media", "icon-media-github")}
          />
        </a>
        <a href="https://www.facebook.com/TienDat2442004">
          <FontAwesomeIcon
            icon={faFacebook}
            className={cx("icon-social-media", "icon-media-facebook")}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faTwitter}
            className={cx("icon-social-media", "icon-media-twitter")}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faYoutube}
            className={cx("icon-social-media", "icon-media-youtube")}
          />
        </a>
      </div>
      <div className={cx("auth")}>
        <p>&#169;</p>
        <p>Nguyen Tien Dat</p>
      </div>
    </div>
  );
}

export default Auth;

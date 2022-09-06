import classNames from "classnames/bind";
import styles from "./VideoMotivation.module.scss";
import { listVideo } from "./Videos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);
let currentVideo = 0;
function VideoMotivation() {
  const [video, setVideo] = useState({
    src: listVideo[currentVideo].src,
  });
  const handleChangeNextYt = () => {
    currentVideo += 1;
    if (currentVideo > listVideo.length - 1) {
      currentVideo = 0;
      setVideo((video) => {
        return {
          src: listVideo[currentVideo].src,
        };
      });
    } else {
      setVideo((video) => {
        return {
          src: listVideo[currentVideo].src,
        };
      });
    }
  };

  const handleChangePrevYt = () => {
    currentVideo -= 1;
    if (currentVideo < 0) {
      currentVideo = listVideo.length - 1;
      setVideo((video) => {
        return {
          src: listVideo[currentVideo].src,
        };
      });
    } else {
      setVideo((video) => {
        return {
          src: listVideo[currentVideo].src,
        };
      });
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("motivation-yt")}>
        <h2>Best Gym Training Motivation</h2>
        <FontAwesomeIcon
          icon={faCircleLeft}
          className={cx("icon-left")}
          onClick={handleChangePrevYt}
        />
        <iframe
          src={video.src}
          frameBorder="0"
          title={listVideo[0].id}
        ></iframe>
        <FontAwesomeIcon
          icon={faCircleRight}
          className={cx("icon-right")}
          onClick={handleChangeNextYt}
        />
      </div>
    </div>
  );
}

export default VideoMotivation;

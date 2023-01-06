import styles from "./Nowplaying.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function NowPlayingAnimation({ audio }) {
  return (
    <>
      <div className={cx("icon")}>
        <span className={cx({ paused: !audio.isPlaying })} />
        <span className={cx({ paused: !audio.isPlaying })} />
        <span className={cx({ paused: !audio.isPlaying })} />
      </div>
      <div className={cx("icon")}>
        <span className={cx({ paused: !audio.isPlaying })} />
        <span className={cx({ paused: !audio.isPlaying })} />
        <span className={cx({ paused: !audio.isPlaying })} />
      </div>
      <div className={cx("icon")}>
        <span className={cx({ paused: !audio.isPlaying })} />
        <span className={cx({ paused: !audio.isPlaying })} />
        <span className={cx({ paused: !audio.isPlaying })} />
      </div>
    </>
  );
}

export default NowPlayingAnimation;

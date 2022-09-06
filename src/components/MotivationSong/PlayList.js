import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlay, faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext } from "react";
import styles from "./MotivationSong.module.scss";
import { listSongGym } from "./Song";
import { ShowMenuContext } from "../../Menu/ShowMenu";
import { ThemeContext } from "../../Theme";
const cx = classNames.bind(styles);

function PlayList({ audio, setAudio }) {
  const theme = useContext(ThemeContext);
  const [themeValue] = theme;
  const [ShowMenu, setShowMenu] = useContext(ShowMenuContext);
  return (
    <div
      data-theme={themeValue.theme}
      className={cx("play-list")}
      style={
        ShowMenu
          ? { transform: "translateX(0)" }
          : { transform: "translateX(-200%)" }
      }
    >
      <FontAwesomeIcon
        icon={faRectangleXmark}
        className={cx("btn-close-playlist", "icon-hover")}
        onClick={() => {
          setShowMenu(false);
        }}
      />
      <ul className={cx("list")}>
        {listSongGym.map((e, i) => {
          return (
            <li className={cx("item")} key={i}>
              <div style={{ flex: 1 }}>
                <p className={cx("name-song")}>{e.titleSong}</p>
                <p className={cx("name-src")}>Src: NSC</p>
              </div>
              <FontAwesomeIcon
                icon={faCompactDisc}
                className={cx("icon-playlist", "isplaying", "small-CD")}
                style={
                  audio.title === e.titleSong
                    ? { display: "block", color: "var(--color-hover)" }
                    : { display: "none" }
                }
              />
              <FontAwesomeIcon
                onClick={() => {
                  setAudio((audio) => {
                    return {
                      ...audio,
                      src: listSongGym[i].src,
                      isPlaying: true,
                      title: listSongGym[i].titleSong,
                    };
                  });
                }}
                icon={faCirclePlay}
                className={cx("icon-playlist")}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayList;

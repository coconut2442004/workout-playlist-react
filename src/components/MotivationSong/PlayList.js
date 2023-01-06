import {
  faCirclePlay,
  faCompactDisc,
  faDeleteLeft,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import styles from "./MotivationSong.module.scss";
import { listSongGym } from "./Song";
import { ShowMenuContext } from "../../Menu/ShowMenu";
import { ThemeContext } from "../../Theme";
import NowPlayingAnimation from "../Animations/Music/Playing";
const cx = classNames.bind(styles);

function PlayList({ audio, setAudio }) {
  const theme = useContext(ThemeContext);
  const [themeValue] = theme;
  const [ShowMenu, setShowMenu] = useContext(ShowMenuContext);
  const [iconPlay, setIconPlay] = useState(
    audio.isPlaying ? faCirclePause : faCirclePlay
  );
  useEffect(() => {
    setIconPlay(audio.isPlaying ? faCirclePause : faCirclePlay);
  }, [audio.isPlaying]);

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
      <div className={cx("view-song-playlist")}>
        <p className={cx("view-song-playlist__title")}>{audio.title}</p>
        <div className={cx("view-song-playlist__current-song")}>
          <FontAwesomeIcon
            icon={faDeleteLeft}
            className={cx("btn-close-playlist", "icon-hover")}
            onClick={() => {
              setShowMenu(false);
            }}
          />
          <NowPlayingAnimation audio={audio} />
          <FontAwesomeIcon
            icon={iconPlay}
            className={cx("icon-hover")}
            onClick={() => {
              if (!audio.isPlaying) {
                setIconPlay(faCirclePause);
                setAudio((audio) => {
                  return {
                    ...audio,
                    isPlaying: true,
                  };
                });
              } else {
                setIconPlay(faCirclePlay);
                setAudio((audio) => {
                  return {
                    ...audio,
                    isPlaying: false,
                  };
                });
              }
            }}
          />
        </div>
      </div>
      <ul className={cx("list")}>
        {listSongGym.map((e, i) => {
          return (
            <li
              className={cx("item", { active: audio.title === e.titleSong })}
              key={e.id}
              onClick={(e) => {
                setAudio((audio) => {
                  return {
                    ...audio,
                    src: listSongGym[i].src,
                    isPlaying: true,
                    title: listSongGym[i].titleSong,
                  };
                });
              }}
            >
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

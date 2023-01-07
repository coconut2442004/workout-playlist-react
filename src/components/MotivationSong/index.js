import {
  faBackward,
  faForward,
  faPlay,
  faVolumeLow,
  faPause,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from "./MotivationSong.module.scss";
import { listSongGym } from "./Song";
import ReactPlayer from "react-player";
import PlayList from "./PlayList";
const cx = classNames.bind(styles);
let currentSong = 0;

function MotivationSong() {
  const audioRef = useRef();
  const [iconPlay, setIconPlay] = useState(faPlay);
  const [iconVolume, setIconVolume] = useState(faVolumeLow);
  const [audio, setAudio] = useState({
    title: listSongGym[currentSong].titleSong,
    src: listSongGym[currentSong].src,
    isPlaying: false,
    muted: false,
    minutes: 0,
    seconds: 0,
    trackProgress: 0,
  });

  const [timer, setTimer] = useState({
    minutes: audio.minutes,
    seconds: audio.seconds,
  });

  useEffect(() => {
    const timer = audio.minutes * 60 + audio.seconds - audio.trackProgress;

    const minutes = Math.floor(timer / 60);
    const seconds = Math.floor(timer % 60);
    setTimer({ minutes: minutes, seconds: seconds });

    const handleProgress = () => {
      setAudio((audio) => {
        return {
          ...audio,
          trackProgress: audioRef.current.getCurrentTime(),
        };
      });
    };

    const startTimer = setInterval(handleProgress, 1000);
    return () => {
      clearInterval(startTimer);
    };
  }, [audio]);

  // handle play and pause song
  const handleTogglePlay = () => {
    if (!audio.isPlaying) {
      setIconPlay(faPause);
      setAudio((audio) => {
        return {
          ...audio,
          isPlaying: true,
        };
      });
    } else {
      setIconPlay(faPlay);
      setAudio((audio) => {
        return {
          ...audio,
          isPlaying: false,
        };
      });
    }
  };
  // handle change next song
  const handleChangeNextSong = () => {
    currentSong += 1;
    if (currentSong > listSongGym.length - 1) {
      currentSong = 0;
      setAudio((audio) => {
        return {
          ...audio,
          isPlaying: true,
          src: listSongGym[currentSong].src,
          title: listSongGym[currentSong].titleSong,
        };
      });
    } else {
      setAudio((audio) => {
        return {
          ...audio,
          isPlaying: true,
          src: listSongGym[currentSong].src,
          title: listSongGym[currentSong].titleSong,
        };
      });
    }
  };

  // handle change prevous song
  const handlePrevSong = () => {
    currentSong -= 1;
    if (currentSong < 0) {
      currentSong = listSongGym.length - 1;
      setAudio((audio) => {
        return {
          ...audio,
          isPlaying: true,
          src: listSongGym[currentSong].src,
          title: listSongGym[currentSong].titleSong,
        };
      });
    } else {
      setAudio((audio) => {
        return {
          ...audio,
          isPlaying: true,
          src: listSongGym[currentSong].src,
          title: listSongGym[currentSong].titleSong,
        };
      });
    }
  };
  // handle muted audio
  const handleMuted = () => {
    if (audio.muted) {
      setIconVolume(faVolumeLow);
      setAudio((audio) => {
        return {
          ...audio,
          muted: false,
        };
      });
    } else {
      setIconVolume(faVolumeXmark);
      setAudio((audio) => {
        return {
          ...audio,
          muted: true,
        };
      });
    }
  };

  // handle auto change next song when ended
  const handleEnded = () => {
    setAudio((audio) => {
      return {
        ...audio,
        isPlaying: false,
        minutes: 0,
        seconds: 0,
      };
    });
    setTimeout(() => {
      handleChangeNextSong();
    }, 2000);
  };

  const handleOnduration = (duration) => {
    setAudio((audio) => {
      return {
        ...audio,
        minutes: Math.floor(duration / 60),
        seconds: Math.floor(duration % 60),
      };
    });
  };

  return (
    <div className={cx("wrapper")}>
      <PlayList audio={audio} setAudio={setAudio} />
      <div className={cx("motivation-song")}>
        <h2>Best Playlist For Workout</h2>
        <p className={cx("note")}>
          Please wear headphones for the best experience
        </p>
        <div className={cx("view-song")}>
          <div className={cx("view-CD")}>
            <div
              className={cx("CD", "animationCircle", {
                paused: !audio.isPlaying,
              })}
            ></div>
          </div>
          <div className={cx("view-controller")}>
            <p className={cx("name-song-playing")}>{audio.title}</p>
            <div className={cx("song-process")}>
              <ReactPlayer
                onPlay={() => {
                  setIconPlay(faPause);
                }}
                onEnded={handleEnded}
                onDuration={handleOnduration}
                muted={audio.muted}
                playing={audio.isPlaying}
                ref={audioRef}
                hidden
                url={audio.src}
                type="audio/mp3"
              />
              <input
                step={1}
                type="range"
                min={0}
                max={audio.minutes * 60 + audio.seconds}
                value={audio.trackProgress}
                onChange={(e) => {
                  setAudio((audio) => {
                    audioRef.current.seekTo(e.target.value);
                    return {
                      ...audio,
                      trackProgress: audioRef.current.getCurrentTime(),
                    };
                  });
                }}
              />
              <span className={cx({ paused: !audio.isPlaying })}>
                {timer.minutes >= 0 && timer.seconds >= 0
                  ? `${timer.minutes}:${timer.seconds}`
                  : `0:0`}
              </span>
            </div>
            <div className={cx("controll")}>
              <FontAwesomeIcon
                icon={faBackward}
                className={cx("icon-hover")}
                onClick={handlePrevSong}
              />
              <FontAwesomeIcon
                icon={iconPlay}
                className={cx("icon-hover")}
                onClick={handleTogglePlay}
              />
              <FontAwesomeIcon
                icon={faForward}
                className={cx("icon-hover")}
                onClick={handleChangeNextSong}
              />
              <FontAwesomeIcon
                icon={iconVolume}
                className={cx("icon-hover")}
                onClick={handleMuted}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotivationSong;

import React, { useRef, useState } from "react";
import '../../asstes/styles/podcast.scss'
import { Link } from "react-router-dom";

const PodcastPlay = ({ audioSrc, link }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handlePlayPause = async () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  const handleRewind = () => {
    audioRef.current.currentTime -= 30;
  };

  const handleFastForward = () => {
    audioRef.current.currentTime += 30;
  };

  const handleNext = () => {
    console.log("Next Track");
  };

  const handlePrev = () => {
    console.log("Previous Track");
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />
      </div>
      <div className="time-display">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      <div className="exce-podcast-control-outer">
        <div className="controls">
          <button onClick={handlePrev} className="btn btn-light">
            <i className="bi bi-skip-backward-fill"></i>
          </button>
          <button onClick={handleRewind} className="btn btn-light">
            <i className="bi bi-arrow-counterclockwise"></i>
          </button>
          <Link to={`${link}`} target="_blank">
            <button onClick={handlePlayPause} className="btn btn-light">
              {isPlaying ? (
                <i className="bi bi-pause-fill"></i>
              ) : (
                <i className="bi bi-play-fill"></i>
              )}
            </button>
          </Link>
          <button onClick={handleFastForward} className="btn btn-light">
            <i className="bi bi-arrow-clockwise"></i>
          </button>
          <button onClick={handleNext} className="btn btn-light">
            <i className="bi bi-skip-forward-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlay;

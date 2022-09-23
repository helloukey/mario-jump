import "./Mario.css";
import MarioCharacter from "../assets/mario-run.gif";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import jumpAudio from "../assets/audio/mario-jump.mp3";
import backgroundMusic from "../assets/audio/running-about.mp3";
// redux
import { useDispatch, useSelector } from "react-redux";
import { marioPosition } from "../redux/marioSlice";
import { setReady, setDie, setScore } from "../redux/engineSlice";

// die
import dieAudio from "../assets/audio/mario-died.mp3";

const Mario = () => {
  const [isJumping, setIsJumping] = useState(false);
  const marioRef = useRef();
  const dispatch = useDispatch();
  const die = useSelector((state) => state.engine.die);

  const obstacle1 = useSelector((state) => state.obstacle.obstacle1);
  const obstacle2 = useSelector((state) => state.obstacle.obstacle2);
  const mario = useSelector((state) => state.mario.value);
  const isPlay = useSelector((state) => state.engine.play);

  // Jump audio
  const jump = useMemo(() => {
    return new Audio(jumpAudio);
  }, []);

  // Die
  const marioDie = useMemo(() => {
    return new Audio(dieAudio);
  }, []);

  const bgMusic = useMemo(() => {
    return new Audio(backgroundMusic);
  }, []);

  // Handling key press event.
  const handleKey = useCallback(
    (e) => {
      if (isJumping === false) {
        if(!isPlay) {
          dispatch(setReady(true));
        }
        setIsJumping(true);
        jump.play();
        setTimeout(() => {
          setIsJumping(false);
        }, 300);
      }
    },
    [isJumping, jump, dispatch, isPlay]
  );

  useEffect(() => {
    if (mario < 200 && obstacle1 < 100 && obstacle1 > 0) {
      dispatch(setDie(true));
      marioDie.play();
      dispatch(setReady(false));
      setTimeout(() => {
        dispatch(setDie(false));
      }, 2000);
      setTimeout(() => {
        dispatch(setScore(0));
      }, 100);
    }
    if (mario < 200 && obstacle2 < 100 && obstacle2 > 20) {
      dispatch(setDie(true));
      marioDie.play();
      dispatch(setReady(false));
      setTimeout(() => {
        dispatch(setDie(false));
      }, 2000);
      setTimeout(() => {
        dispatch(setScore(0));
      }, 100);
    }
  }, [dispatch, mario, marioDie, obstacle1, obstacle2]);

  // Monitor key press.
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    dispatch(
      marioPosition(
        parseInt(
          window.getComputedStyle(marioRef.current).getPropertyValue("bottom")
        )
      )
    );

    if (isPlay) {
      bgMusic.play();
    } else {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
  }, [handleKey, dispatch, bgMusic, isPlay]);

  return (
    <div className="mario-container">
      {!die && (
        <img
          src={MarioCharacter}
          alt=""
          className={`mario ${isJumping ? "jump" : ""}`}
          ref={marioRef}
        />
      )}
      {die && (
        <img
          src={MarioCharacter}
          alt=""
          className={`mario ${die ? "die" : ""}`}
          ref={marioRef}
        />
      )}
    </div>
  );
};
export default Mario;

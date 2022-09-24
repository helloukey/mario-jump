import "./Mario.css";
import MarioCharacter from "../assets/mario-run.gif";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import jumpAudio from "../assets/audio/mario-jump.mp3";
import backgroundMusic from "../assets/audio/running-about.mp3";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  marioHeight,
  marioLeft,
  marioTop,
  marioWidth,
} from "../redux/marioSlice";
import { setReady, setDie, setScore } from "../redux/engineSlice";

// die
import dieAudio from "../assets/audio/mario-died.mp3";

const Mario = () => {
  const [isJumping, setIsJumping] = useState(false);
  const marioRef = useRef();
  const dispatch = useDispatch();
  const die = useSelector((state) => state.engine.die);

  const isPlay = useSelector((state) => state.engine.play);
  // Mario positions
  const mario_height = useSelector((state) => state.mario.height);
  const mario_left = useSelector((state) => state.mario.left);
  const mario_top = useSelector((state) => state.mario.top);
  const mario_width = useSelector((state) => state.mario.width);
  // Obstacle1 positions
  const obs1_height = useSelector((state) => state.obstacle.obs1Height);
  const obs1_left = useSelector((state) => state.obstacle.obs1Left);
  const obs1_top = useSelector((state) => state.obstacle.obs1Top);
  const obs1_width = useSelector((state) => state.obstacle.obs1Width);
    // Obstacle2 positions
    const obs2_height = useSelector((state) => state.obstacle.obs2Height);
    const obs2_left = useSelector((state) => state.obstacle.obs2Left);
    const obs2_top = useSelector((state) => state.obstacle.obs2Top);
    const obs2_width = useSelector((state) => state.obstacle.obs2Width);

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
      if (e.code === "Enter" && !isPlay) {
        dispatch(setReady(true));
      }
      if (isJumping === false && e.code === "Space") {
        setIsJumping(true);
        jump.play();
        setTimeout(() => {
          setIsJumping(false);
          jump.pause();
          jump.currentTime = 0;
        }, 400);
      }
    },
    [isJumping, jump, dispatch, isPlay]
  );

  useEffect(() => {
    // if (mario < 200 && obstacle1 < 100 && obstacle1 > 0) {
    //   dispatch(setDie(true));
    //   marioDie.play();
    //   dispatch(setReady(false));
    //   setTimeout(() => {
    //     dispatch(setDie(false));
    //   }, 2000);
    //   setTimeout(() => {
    //     dispatch(setScore(0));
    //   }, 100);
    // }
    // if (mario < 200 && obstacle2 < 100 && obstacle2 > 20) {
    //   dispatch(setDie(true));
    //   marioDie.play();
    //   dispatch(setReady(false));
    //   setTimeout(() => {
    //     dispatch(setDie(false));
    //   }, 2000);
    //   setTimeout(() => {
    //     dispatch(setScore(0));
    //   }, 100);
    // }

    if (
      mario_left < obs1_left + obs1_width &&
      mario_left + mario_width > obs1_left &&
      mario_top < obs1_top + obs1_height &&
      mario_top + mario_height > obs1_top
    ) {
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

    if (
      mario_left < obs2_left + obs2_width &&
      mario_left + mario_width > obs2_left &&
      mario_top < obs2_top + obs2_height &&
      mario_top + mario_height > obs2_top
    ) {
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
  }, [
    mario_left,
    obs1_left,
    obs1_width,
    mario_width,
    mario_top,
    obs1_top,
    obs1_height,
    mario_height,
    dispatch,
    marioDie,
    obs2_left,
    obs2_width,
    obs2_top,
    obs2_height,
  ]);

  // Monitor key press.
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    dispatch(marioHeight(marioRef.current.getBoundingClientRect().height));
    dispatch(marioLeft(marioRef.current.getBoundingClientRect().left));
    dispatch(marioTop(marioRef.current.getBoundingClientRect().top));
    dispatch(marioWidth(marioRef.current.getBoundingClientRect().width));

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

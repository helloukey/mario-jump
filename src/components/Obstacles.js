import "./Obstacles.css";
import obstacle1 from "../assets/goombla.gif";
import obstacle2 from "../assets/koopa.gif";
import { useRef, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { obstacle1Position, obstacle2Position } from "../redux/obstacleSlice";
import { setSpeed } from "../redux/engineSlice";

const Obstacles = () => {
  const dispatch = useDispatch();
  const isPlay = useSelector((state) => state.engine.play);
  const speed = useSelector(state => state.engine.speed);
  const obstacle1Ref = useRef();
  const obstacle2Ref = useRef();

  useEffect(() => {
    setInterval(() => {
      dispatch(
        obstacle1Position(
          parseInt(
            window
              .getComputedStyle(obstacle1Ref.current)
              .getPropertyValue("left")
          )
        )
      );
      dispatch(
        obstacle2Position(
          parseInt(
            window
              .getComputedStyle(obstacle2Ref.current)
              .getPropertyValue("left")
          )
        )
      );
    }, 100);
  }, [dispatch]);

  useEffect(() => {
    if(speed >= 0) {
      setTimeout(() => {
        dispatch(setSpeed(0.0001));
      }, 1000);
    }
  },[speed, dispatch])

  return (
    <div className="obstacles-container">
      <img
        src={obstacle1}
        alt=""
        className={isPlay ? "obstacle1 obstacle1-move" : "obstacle1"}
        style={isPlay ? {animationDuration: `${3 - speed}s`}: {animationDuration: `3s`}}
        ref={obstacle1Ref}
      />
      <img
        src={obstacle2}
        alt=""
        className={isPlay ? "obstacle2 obstacle2-move" : "obstacle2"}
        style={isPlay ? {animationDuration: `${6 - speed}s`}: {animationDuration: `6s`}}
        ref={obstacle2Ref}
      />
    </div>
  );
};
export default Obstacles;

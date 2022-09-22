import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore, setLastScore } from "../redux/engineSlice";
import "./Score.css";

const Score = () => {
  const score = useSelector(state => state.engine.score);
  const lastScore = useSelector(state => state.engine.lastScore);
  const play = useSelector(state => state.engine.play);
  const dispatch = useDispatch();

  useEffect(() => {
    if(play) {
      setTimeout(() => {
        dispatch(setScore(score + 1));
      }, 100);
     }
     if(score && !play) {
        dispatch(setLastScore(score));
     }
  },[dispatch, play, score, lastScore]);
  return (
    <div className="score-container">
        {play && <p className="score">Score: {score}</p>}
        {!play && <p className="score">Score: {lastScore}</p>}
    </div>
  )
}
export default Score
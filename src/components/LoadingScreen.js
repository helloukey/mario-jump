import { useEffect, useState } from "react";
import MarioCharacter from "../assets/mario.png";
import "./LoadingScreen.css";
import { setLoadingScreen } from "../redux/engineSlice";
import { useDispatch } from "react-redux";

const LoadingScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  return (
    <div className="loading-screen-container">
      <img src={MarioCharacter} alt="" className="loading-mario" data-cy="loading-mario" />
      {!isReady && <h1 className="loading-title" data-cy="loading-loading-text">Loading...</h1>}
      {isReady && (
        <button
          className="enter-button"
          onClick={() => dispatch(setLoadingScreen(false))}
          data-cy="loading-enter-button"
        >
          ENTER
        </button>
      )}
    </div>
  );
};
export default LoadingScreen;

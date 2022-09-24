import "./App.css";
import Birds from "./components/Birds";
import Bricks from "./components/Bricks";
import Clouds from "./components/Clouds";
import Mario from "./components/Mario";
import Obstacles from "./components/Obstacles";
import Sun from "./components/Sun";
import KeyMessage from "./components/KeyMessage";
import LoadingScreen from "./components/LoadingScreen";

// redux
import { useSelector } from "react-redux";
import Score from "./components/Score";
import MobileControls from "./components/MobileControls";

function App() {
  const isPlay = useSelector((state) => state.engine.play);
  const isLoading = useSelector((state) => state.engine.loadingScreen);
  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="App">
        {!isPlay && <KeyMessage />}
        <Bricks />
        <Mario />
        <Sun />
        <Clouds />
        <Birds />
        <Obstacles />
        <Score />
      </div>
      <MobileControls />
    </>
  );
}

export default App;

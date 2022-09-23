import "./App.css";
import Birds from "./components/Birds";
import Bricks from "./components/Bricks";
import Clouds from "./components/Clouds";
import Mario from "./components/Mario";
import Obstacles from "./components/Obstacles";
import Sun from "./components/Sun";
import PressAnyKey from "./components/PressAnyKey";

// redux
import { useSelector } from "react-redux";
import Score from "./components/Score";

function App() {
  const isPlay = useSelector((state) => state.engine.play);
  return (
    <div className="App">
      { !isPlay && <PressAnyKey /> }
      <Bricks />
      <Mario />
      <Sun />
      <Clouds />
      <Birds />
      <Obstacles />
      <Score />
    </div>
  );
}

export default App;
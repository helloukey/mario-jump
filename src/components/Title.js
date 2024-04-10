import "./Title.css";

// assets
import Mario from "../assets/mario.png";

const Title = () => {
  return (
    <div className="title-container">
      <img
        src={Mario}
        alt=""
        className="mario-logo"
        data-cy="title-mario-logo"
      />
      <h1 className="title" data-cy="title-mario-jump">
        Mario Jump
      </h1>
    </div>
  );
};
export default Title;

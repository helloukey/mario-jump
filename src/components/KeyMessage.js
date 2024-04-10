import "./KeyMessage.css";

const PressAnyKey = () => {
  return (
    <div className="press-container">
      <p className="press-title" data-cy="press-title">
        ENTER KEY - START GAME
      </p>
      <p className="press-subtitle" data-cy="press-subtitle">
        SPACE KEY - JUMP!
      </p>
    </div>
  );
};
export default PressAnyKey;

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Res() {
  const [position, setPosition] = useState({ top: "60%", left: "60%" });
  const navigate = useNavigate();

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // Random % between 10% and 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Random % between 10% and 90%
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYesClick = () => {
    navigate("/yes"); // Redirect to /yes
  };

  return (
    <div className="res-container">
      <h1>Question</h1>
      <div className="button-group">
        <button className="res-button" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="res-button no-button"
          style={{ top: position.top, left: position.left, position: "absolute" }}
          onMouseEnter={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Res;

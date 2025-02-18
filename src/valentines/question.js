import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/valentines.scss";

function Question() {
  const [position, setPosition] = useState({ top: "60%", left: "60%" });
  const [hoverCount, setHoverCount] = useState(0);
  const navigate = useNavigate();

  const moveButton = () => {
    setHoverCount((prevCount) => prevCount + 1);

    const randomTop = Math.floor(Math.random() * 80) + 10; 
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYesClick = () => {
    // do it manually
    navigate("/yes");
  };

  return (
    <div className="res-container">
      <h1 className="h1-tag">Will you be my valentines??? :o</h1>
      <img
        src="https://ffsvgv.csb.app/assets/images/togepi-love.gif"
        className="gif"
      />
      <div className="button-group">
        <button className="res-button" onClick={handleYesClick}>
          Yes!!
        </button>
        {hoverCount <= 7 && (
          <button
            className="res-button no-button"
            style={{
              top: position.top,
              left: position.left,
              position: "absolute",
            }}
            onMouseEnter={moveButton}
          >
            No...
          </button>
        )}
      </div>
      {hoverCount >= 3 && hoverCount < 6 && (
        <p className="hover-warning">why are you trying to click no...</p>
      )}
      {hoverCount >= 6 && hoverCount <= 7 && (
        <p className="hover-warning">pain :(</p>
      )}
    </div>
  );
}

export default Question;

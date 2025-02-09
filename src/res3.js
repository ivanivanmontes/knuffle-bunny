import React from "react";
// import "./styles/global.scss"; // Assuming global.scss includes the above SCSS
import "./styles/global.scss"

function Res3() {

    const sendGCalInvite = () => {
        //TODO: we gonna be mad ghetto and do this manually LMAO
    }

    return (
        <div className="yes-container">
          <h1>Yoooooo lets goo</h1>
          <p className="subtitle">res</p>
          <button
            className="yes-button"
            onClick={sendGCalInvite}
          >
            See You Soon! 💌
          </button>
        </div>
      );

}
export default Res3;

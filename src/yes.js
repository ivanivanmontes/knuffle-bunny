import React from "react";
import "./styles/global.scss"

function Yes() {

    const sendGCalInvite = () => {
        //TODO: we gonna be mad ghetto and do this manually LMAO
    }

    return (
        <div className="yes-container">
          <h1>YAYYYYYYY</h1>
          <img
          src="https://ffsvgv.csb.app/assets/images/togepi-and-pikachu.gif"
          className="gif"
          />
          <p className="subtitle">Thanks for being my valentines!</p>
          <button
            className="yes-button"
            onClick={sendGCalInvite}
          >
            Send gcal invite for more deets
          </button>
        </div>
      );

}
export default Yes;

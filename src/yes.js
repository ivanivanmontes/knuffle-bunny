import React from "react";
import "./styles/global.scss"

function Yes() {

    const sendGCalInvite = async () => {
      try {
        const response = await fetch("https://luna-backend-production-0459.up.railway.app/invite", {
          method: "GET"
        })
        const data = response.json();
        console.log(data)
        alert(data)
        
      } catch (error) {
        console.error(error)
      }
    };

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

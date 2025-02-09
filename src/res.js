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

  // Start OAuth2 Authorization
  const handleAuthorize = () => {
    // Redirect the browser to the backend's /authorize route
    window.location.href = "https://luna-backend-production-0459.up.railway.app/authorize";
  };
  

// Create Google Calendar Event
  const handleCreateEvent = async () => {
    const eventDetails = {
      summary: "Team Meeting",
      location: "Zoom",
      description: "Discuss project updates",
      start_datetime: "2025-02-10T10:00:00-05:00",
      end_datetime: "2025-02-10T11:00:00-05:00",
      time_zone: "America/New_York",
      attendees: ["invitee1@example.com", "invitee2@example.com"],
    };

    try {
      const response = await fetch("http://localhost:8000/create-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventDetails),
        credentials: "include", // Include cookies for session management
      });
      const data = await response.json();
      console.log("Event created:", data);
    } catch (error) {
      console.error("Failed to create event:", error);
    }
  };

  


  const handleYesClick = () => {
    // console.log("res")
    handleAuthorize();
    
    // navigate("/yes"); // Redirect to /yes
  };

  const handleRes = () => {
    handleCreateEvent();
  }

  return (
    <div className="res-container">
      <h1>Question</h1>
      <div className="button-group">
        <button className="res-button" onClick={handleYesClick}>
          Yes
        </button>
        <button className="res-button" onClick={handleRes}>
          cafter
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

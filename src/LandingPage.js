import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/global.scss";

const LandingPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = "030403";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate("/question");
    } else {
      setError("Wrong person...yikes!");
    }
  };

  return (
    <div className="landing-container">
      <h1>Are you Jeanette Marie Luna?</h1>
      <p className="subtitle">If so, enter the password to continue :p</p>
      <form onSubmit={handleSubmit} className="password-form">
        <input
          type="password"
          placeholder="hint: birthday"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          className="password-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error if password is wrong */}
    </div>
  );
};

export default LandingPage;

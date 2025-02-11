import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Question from "./question";
import Yes from "./yes";
import LandingPage from "./LandingPage";
import GitHubLink from "./link";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
      <GitHubLink />
    </Router>
  );
}

export default App;

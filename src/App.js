import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Question from "./valentines/question";
import Yes from "./valentines/yes";
import LandingPage from "./valentines/LandingPage";
import MainPage from "./mainPage/mainPage";
import GitHubLink from "./link";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/valentines" element={<LandingPage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
      <GitHubLink />
    </Router>
  );
}

export default App;

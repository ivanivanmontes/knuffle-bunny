import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Res from "./res";
import Res2 from "./res2";
import Res3 from "./res3";
import LandingPage from "./LandingPage";
import GitHubLink from "./link";



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/question" element={<Res />} />
        {/* <Route path="/no" element={<Res2 />} /> */}
        <Route path="/yes" element={<Res3 />} />
        
      </Routes>
      <GitHubLink />
    </Router>
  );
}

export default App;

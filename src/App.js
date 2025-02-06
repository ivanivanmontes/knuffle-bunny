import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Res from "./res";
import Res2 from "./res2";
import Res3 from "./res3";



function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">question</Link> | <Link to="/no">no</Link> | <Link to="/yes">yes</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Res />} />
        <Route path="/no" element={<Res2 />} />
        <Route path="/yes" element={<Res3 />} />
      </Routes>
    </Router>
  );
}

export default App;

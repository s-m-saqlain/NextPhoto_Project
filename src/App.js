import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./Pages/Works";
import Reviews from "./Pages/Reviews";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Works />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

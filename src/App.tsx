import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import MapView from "./pages/MapView";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#222" }}>
        <Link to="/" style={{ margin: 10, color: "white" }}>Home</Link>
        <Link to="/jobs" style={{ margin: 10, color: "white" }}>Jobs</Link>
        <Link to="/map" style={{ margin: 10, color: "white" }}>Map</Link>
        <Link to="/contact" style={{ margin: 10, color: "white" }}>Contact</Link>
        <Link to="/pricing" style={{ margin: 10, color: "white" }}>Pricing</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

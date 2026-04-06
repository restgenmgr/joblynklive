import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`nimport Privacy from "./pages/Privacy";
import Navbar from "./components/Navbar";`nimport Privacy from "./pages/Privacy";
import Footer from "./components/Footer";`nimport Privacy from "./pages/Privacy";
import Chatbot from "./components/Chatbot";`nimport Privacy from "./pages/Privacy";
import Toast from "./components/Toast";`nimport Privacy from "./pages/Privacy";
import Home from "./pages/Home";`nimport Privacy from "./pages/Privacy";
import About from "./pages/About";`nimport Privacy from "./pages/Privacy";
import Jobs from "./pages/Jobs";`nimport Privacy from "./pages/Privacy";
import Pricing from "./pages/Pricing";`nimport Privacy from "./pages/Privacy";
import ResumeTools from "./pages/ResumeTools";`nimport Privacy from "./pages/Privacy";
import SamplesVault from "./pages/samplesvault";`nimport Privacy from "./pages/Privacy";
import EmployerPortal from "./pages/employerportal";`nimport Privacy from "./pages/Privacy";
import PayPortal from "./pages/PayPortal";`nimport Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";`nimport Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";`nimport Privacy from "./pages/Privacy";
import SignUp from "./pages/SignUp";`nimport Privacy from "./pages/Privacy";
import Support from "./pages/Support";`nimport Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";`nimport Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resumebuilder" element={<ResumeTools />} />
            <Route path="/samplesvault" element={<SamplesVault />} />
            <Route path="/employerportal" element={<EmployerPortal />} />
            <Route path="/payportal" element={<PayPortal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />`n      </Routes>
        </main>
        <Footer />
        <Chatbot />
        <Toast />
      </div>
    </Router>
  );
}
export default App;


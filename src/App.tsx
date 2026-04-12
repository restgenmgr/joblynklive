import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SitemapPage from './pages/SitemapPage';
import Navbar from "./components/Navbar";
import SitemapPage from './pages/SitemapPage';
import Footer from "./components/Footer";
import SitemapPage from './pages/SitemapPage';
import Chatbot from "./components/Chatbot";
import SitemapPage from './pages/SitemapPage';
import Toast from "./components/Toast";
import SitemapPage from './pages/SitemapPage';
import Home from "./pages/Home";
import SitemapPage from './pages/SitemapPage';
import About from "./pages/About";
import SitemapPage from './pages/SitemapPage';
import Jobs from "./pages/Jobs";
import SitemapPage from './pages/SitemapPage';
import Pricing from "./pages/Pricing";
import SitemapPage from './pages/SitemapPage';
import ResumeTools from "./pages/ResumeTools";
import SitemapPage from './pages/SitemapPage';
import SamplesVault from "./pages/samplesvault";
import SitemapPage from './pages/SitemapPage';
import EmployerPortal from "./pages/employerportal";
import SitemapPage from './pages/SitemapPage';
import PayPortal from "./pages/PayPortal";
import SitemapPage from './pages/SitemapPage';
import Contact from "./pages/Contact";
import SitemapPage from './pages/SitemapPage';
import Disclaimer from "./pages/Disclaimer";
import SitemapPage from './pages/SitemapPage';
import SignUp from "./pages/SignUp";
import SitemapPage from './pages/SitemapPage';
import Support from "./pages/Support";
import SitemapPage from './pages/SitemapPage';
import Blog from "./pages/Blog";
import SitemapPage from './pages/SitemapPage';
import Privacy from "./pages/Privacy";
import SitemapPage from './pages/SitemapPage';

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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sitemap" element={<SitemapPage />} />`n    </Routes>
        </main>
        <Footer />
        <Chatbot />
        <Toast />
      </div>
    </Router>
  );
}
export default App;



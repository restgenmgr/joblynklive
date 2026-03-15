import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrainChain from './BrainChain';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import PayPortal from './pages/PayPortal';
import ResumeTools from './pages/ResumeTools';
import EmployersData from './pages/EmployersData';
import SignUp from './pages/SignUp';
import Support from './pages/Support';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Router>
      <BrainChain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payportal" element={<PayPortal />} />
        <Route path="/resumetools" element={<ResumeTools />} />
        <Route path="/employersdata" element={<EmployersData />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}

export default App;

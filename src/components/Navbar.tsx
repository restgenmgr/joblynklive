import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{background:"#0f172a", padding:"12px", display:"flex", flexWrap:"wrap", gap:"8px"}}>
      <Link to="/" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Home</Link>
      <Link to="/about" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>About</Link>
      <Link to="/jobs" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Jobs</Link>
      <Link to="/pricing" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Pricing</Link>
      <Link to="/resumebuilder" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Resume Builder</Link>
      <Link to="/samplesvault" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Samples Vault</Link>
      <Link to="/employerportal" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Employer Portal</Link>
      <Link to="/payportal" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Pay Portal</Link>
      <Link to="/contact" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Contact</Link>
      <Link to="/disclaimer" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Disclaimer</Link>
      <Link to="/signup" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Sign Up</Link>
      <Link to="/support" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Support</Link>
      <Link to="/blog" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Blog</Link>
      <Link to="/privacy" style={{color:"#fbbf24", padding:"8px 12px", border:"1px solid #b45309", borderRadius:"6px", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>Privacy</Link>
    </nav>
  );
}
export default Navbar;

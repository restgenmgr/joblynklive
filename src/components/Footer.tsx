import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white text-center p-6">
      <p>Joblynk.live | Career support made practical. | Connecting Employers with Job-Ready Talent.</p>
      <p style={{marginTop: "8px", fontSize: "12px"}}>
        <a href="/privacy" style={{color: "#fbbf24", textDecoration: "none", marginLeft: "1rem"}}>Privacy Policy</a>
      </p>
    </footer>
  );
};
export default Footer;

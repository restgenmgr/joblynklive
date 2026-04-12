import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white text-center p-6">
      <div style={{ marginBottom: "1rem" }}>
        <p><strong>🌐 Web Master:</strong> Nigel Thomas | 📧 joblynklive@gmail.com | 📞 +91 97693 51231</p>
        <p><strong>💾 Data Engineer:</strong> Das Subaraj | 📧 Das8369372112@gmail.com | 📞 +91 83693 72112</p>
      </div>
      <p>Joblynk.live | Career support made practical. | Connecting Employers with Job-Ready Talent.</p>
      <p style={{ marginTop: "8px", fontSize: "12px" }}>
        <a href="/privacy" style={{ color: "#fbbf24" }}>Privacy Policy</a>
      </p>
    </footer>
  );
};
export default Footer;

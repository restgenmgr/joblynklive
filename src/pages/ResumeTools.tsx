import React, { useState } from 'react';

const ResumeTools = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    skills: '',
    experience: ''
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: '#f1f5f9', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '900px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Resume Builder</h1>

        {/* FORM */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handle}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handle}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />

          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={form.skills}
            onChange={handle}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />

          <textarea
            name="experience"
            placeholder="Experience"
            value={form.experience}
            onChange={handle}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        {/* PRINT BUTTON */}
        <button
          onClick={() => window.print()}
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🖨️ Download / Print Resume
        </button>

        {/* RESUME PREVIEW */}
        <div id="resume" style={{
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '5px' }}>{form.name || "Your Name"}</h2>
          <p style={{ color: '#555', marginBottom: '20px' }}>{form.email}</p>

          <h3 style={{ borderBottom: '2px solid #2563eb' }}>Skills</h3>
          <ul>
            {form.skills.split(',').map((s, i) => (
              <li key={i}>{s.trim()}</li>
            ))}
          </ul>

          <h3 style={{ borderBottom: '2px solid #2563eb', marginTop: '20px' }}>Experience</h3>
          <p>{form.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTools;
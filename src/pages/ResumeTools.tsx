import React, { useState } from 'react';

const ResumeTools = () => {
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', position: '', experience: '', skills: '', education: '', summary: '' });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const inp = { width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box', fontSize: '1rem' };

  if (showPreview) return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <button onClick={() => setShowPreview(false)} style={{ padding: '10px 24px', background: '#f1f5f9', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>Back</button>
          <button onClick={() => window.print()} style={{ padding: '10px 24px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>Print / Save PDF</button>
        </div>
        <div style={{ background: 'white', borderRadius: '16px', padding: '40px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '2rem', color: '#0f172a', borderBottom: '3px solid #b45309', paddingBottom: '16px' }}>{form.name}</h1>
          <p style={{ color: '#b45309', fontWeight: '600', fontSize: '1.1rem' }}>{form.position}</p>
          <p style={{ color: '#475569' }}>{form.email} | {form.phone} | {form.location}</p>
          {form.summary && <><h3 style={{ color: '#b45309', marginTop: '20px' }}>PROFESSIONAL SUMMARY</h3><p>{form.summary}</p></>}
          <h3 style={{ color: '#b45309', marginTop: '20px' }}>PROFESSIONAL EXPERIENCE</h3><p style={{ whiteSpace: 'pre-wrap' }}>{form.experience}</p>
          <h3 style={{ color: '#b45309', marginTop: '20px' }}>CORE SKILLS</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>{form.skills.split(',').map((s, i) => <span key={i} style={{ background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px' }}>{s.trim()}</span>)}</div>
          <h3 style={{ color: '#b45309', marginTop: '20px' }}>EDUCATION</h3><p>{form.education}</p>
        </div>
        <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h2 style={{ color: '#0f172a', marginBottom: '20px' }}>Cover Letter</h2>
          <p>Dear Hiring Manager,</p>
          <p style={{ lineHeight: '1.8', margin: '16px 0' }}>I am writing to express my strong interest in the {form.position} position. With expertise in {form.skills.split(',')[0]} and {form.skills.split(',')[1]}, I am confident I would be a valuable addition to your team.</p>
          <p style={{ lineHeight: '1.8', margin: '16px 0' }}>{form.summary || form.experience.substring(0, 200)}</p>
          <p style={{ lineHeight: '1.8', margin: '16px 0' }}>Thank you for considering my application. I look forward to discussing how my experience can benefit your team.</p>
          <p style={{ marginTop: '30px' }}>Sincerely,<br /><strong>{form.name}</strong><br />{form.phone} | {form.email}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', textAlign: 'center', marginBottom: '10px' }}>Resume Builder</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>Fill in your details and get a professional resume instantly!</p>
        <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          {step === 1 && <>
            <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Personal Information</h2>
            <input name="name" placeholder="Full Name *" value={form.name} onChange={handle} style={inp} />
            <input name="email" placeholder="Email Address *" value={form.email} onChange={handle} style={inp} />
            <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handle} style={inp} />
            <input name="location" placeholder="City, State" value={form.location} onChange={handle} style={inp} />
            <input name="position" placeholder="Position Applying For *" value={form.position} onChange={handle} style={inp} />
            <textarea name="summary" placeholder="Professional Summary (optional)" value={form.summary} onChange={handle} rows={3} style={inp} />
            <button onClick={() => setStep(2)} style={{ width: '100%', padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>Next</button>
          </>}
          {step === 2 && <>
            <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Experience and Skills</h2>
            <textarea name="experience" placeholder="Work Experience" value={form.experience} onChange={handle} rows={5} style={inp} />
            <textarea name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handle} rows={3} style={inp} />
            <textarea name="education" placeholder="Education" value={form.education} onChange={handle} rows={2} style={inp} />
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', background: '#f1f5f9', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>Back</button>
              <button onClick={() => setShowPreview(true)} style={{ flex: 2, padding: '14px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>Generate Resume</button>
            </div>
          </>}
        </div>
      </div>
    </div>
  );
};

export default ResumeTools;

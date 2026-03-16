import React from 'react';

const Home = () => {
  return (
    <>
      {/* ===== HERO BANNER SECTION ===== */}
      <div style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden'
      }}>
        {/* Background image - make sure this file exists in public/images/ */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/aibm.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 1
        }}></div>
        
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,41,59,0.8) 100%)',
          zIndex: 2
        }}></div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>JobLynk.live</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '2rem' }}>
            Bridging Jobs & Talent
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button style={{
              padding: '14px 32px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '40px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              White · ₹49
            </button>
            <button style={{
              padding: '14px 32px',
              background: '#b45309',
              color: 'white',
              border: 'none',
              borderRadius: '40px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Gold · ₹99
            </button>
          </div>
          <p style={{ marginTop: '2rem', color: '#94a3b8' }}>
            📧 tech-support@joblynk.live
          </p>
        </div>
      </div>

      {/* ===== ABOUT PAGE SECTION ===== */}
      <div style={{
        padding: '80px 40px',
        background: '#ffffff',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '40px' }}>
          <span style={{
            background: '#2563eb',
            color: 'white',
            padding: '4px 16px',
            borderRadius: '40px',
            fontSize: '0.9rem',
            display: 'inline-block'
          }}>
            About Us
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#0f172a',
            marginTop: '20px',
            marginBottom: '20px'
          }}>
            Bridging the Gap Between Jobs & Talent
          </h2>
        </div>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#334155',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              JobLynk.live was born from a simple observation: millions of skilled Indian workers—
              from factory floors to home offices—struggle to present themselves professionally to
              employers. Either resumes are too expensive, or job platforms are too complicated.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#334155',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              We started in 2024 with a clear mission:{' '}
              <strong>make job application tools affordable (₹49/₹99) and brutally simple.</strong>{' '}
              No confusing dashboards. No hidden fees. Just your resume, cover letter, and a direct
              line to employers who are actually hiring.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '30px'
            }}>
              <div>
                <h3 style={{ color: '#2563eb', fontSize: '2rem', margin: 0 }}>500+</h3>
                <p style={{ color: '#475569' }}>Job seekers placed</p>
              </div>
              <div>
                <h3 style={{ color: '#2563eb', fontSize: '2rem', margin: 0 }}>200+</h3>
                <p style={{ color: '#475569' }}>Verified employers</p>
              </div>
            </div>
          </div>
          
          <div style={{
            flex: '1',
            minWidth: '280px',
            background: '#e6f0ff',
            borderRadius: '32px',
            padding: '30px'
          }}>
            <h3 style={{ color: '#1e40af', marginBottom: '20px' }}>🎯 Our Promise</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{
                marginBottom: '18px',
                display: 'flex',
                gap: '12px'
              }}>
                <span style={{
                  background: '#2563eb',
                  color: 'white',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>✓</span>
                <span><strong>No monthly fees</strong> – Pay once, get your documents. That's it.</span>
              </li>
              <li style={{
                marginBottom: '18px',
                display: 'flex',
                gap: '12px'
              }}>
                <span style={{
                  background: '#2563eb',
                  color: 'white',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>✓</span>
                <span><strong>Real human support</strong> – tech-support@joblynk.live</span>
              </li>
              <li style={{
                marginBottom: '18px',
                display: 'flex',
                gap: '12px'
              }}>
                <span style={{
                  background: '#2563eb',
                  color: 'white',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>✓</span>
                <span><strong>Privacy first</strong> – Your data is encrypted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== TEAM SECTION ===== */}
      <div style={{
        padding: '60px 40px',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#0f172a',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Meet the Team
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center'
          }}>
            {[
              { initials: 'VK', name: 'Vikram Khanna', role: 'Founder' },
              { initials: 'NP', name: 'Neha Patel', role: 'Head of Operations' },
              { initials: 'AR', name: 'Abdul Rahman', role: 'Tech Lead' }
            ].map((person, i) => (
              <div key={i} style={{ textAlign: 'center', minWidth: '200px' }}>
                <div style={{
                  background: '#2563eb',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 15px'
                }}>
                  {person.initials}
                </div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>{person.name}</strong>
                <span style={{ color: '#64748b' }}>{person.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CONTACT BANNER ===== */}
      <div style={{
        background: '#1e293b',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#facc15', fontSize: '1.5rem', marginBottom: '15px' }}>
          📞 We're here to help
        </h3>
        <p style={{ fontSize: '1.1rem' }}>
          Email us at <strong style={{ color: '#facc15' }}>tech-support@joblynk.live</strong>
        </p>
      </div>
    </>
  );
};

export default Home;

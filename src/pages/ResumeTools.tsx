import React, { useState } from 'react';

const ResumeTools = () => {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Resume Builder</h1>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '100%' }}
      />

      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h2>{name || "Your Name"}</h2>
        <p>This is your resume preview</p>
      </div>
    </div>
  );
};

export default ResumeTools;
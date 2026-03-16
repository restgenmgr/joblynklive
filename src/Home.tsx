import React from 'react';
import { Link } from 'react-router-dom';
import BrainGrid from './BrainGrid'; // Import BrainGrid (not BrainChain)

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* BrainGrid is already in App.tsx, so we don't need it here */}
      
      {/* Your existing hero section and other content */}
      <section className="bg-slate-900 dark:bg-black text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Connect with India's <span className="text-yellow-500">Top Employers</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            Elevate your career with Joblynk.live.
          </p>
          <div className="flex gap-5">
            <Link to="/pay" className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-xl font-black">
              Get Started
            </Link>
            <Link to="/builder" className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-xl font-bold">
              Build Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of your home page content */}
      <section className="bg-white dark:bg-slate-900 py-16 px-6">
        {/* ... your existing content ... */}
      </section>
    </div>
  );
};

export default Home;

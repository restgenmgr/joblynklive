import React from 'react';
import { Link } from 'react-router-dom';
import './BrainChain.css'; // Make sure CSS is imported

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
  { name: 'Team', path: '/team' },
  { name: 'FAQ', path: '/faq' }
];

const BrainChain: React.FC = () => {
  return (
    <div className="brain-chain">
      {pages.map((page) => (
        <Link to={page.path} key={page.name} className="brain-link">
          <div className="brain-icon">
            <img 
              src="/public/images/brain.jpg" 
              alt={page.name}
            />
          </div>
          <span className="page-name">{page.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BrainChain;

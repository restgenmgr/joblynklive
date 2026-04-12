import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  // List of all important pages on the site
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resume Builder", path: "/resumebuilder" },
    { name: "Samples Vault", path: "/samplesvault" },
    { name: "Employer Portal", path: "/employerportal" },
    { name: "Pay Portal", path: "/payportal" },
    { name: "Contact", path: "/contact" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Sign Up", path: "/signup" },
    { name: "Support", path: "/support" },
    { name: "Blog", path: "/blog" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Sitemap (XML)", path: "/sitemap.xml" },
  ];

  // Blog posts (static HTML files) – you can add more as needed
  const blogPosts = [
    { name: "Non‑Tech Careers 2026", path: "/blog-pages/non-tech-careers-2026.html" },
    { name: "Customer Service Jobs Guide", path: "/blog-pages/customer-service-jobs-guide.html" },
    { name: "Data Pipeline Architecture", path: "/blog-pages/data-pipeline-architecture-patterns.html" },
    { name: "Data Scientist Guide", path: "/blog-pages/data-scientist-guide.html" },
    { name: "dbt Modern Data Stack", path: "/blog-pages/dbt-modern-data-stack-guide.html" },
    { name: "Scalable Data Pipelines", path: "/blog-pages/scalable-data-pipelines-guide.html" },
    { name: "SQL Filtering Guide", path: "/blog-pages/sql-filtering-where-and-or-in-between.html" },
    { name: "SQL Beginners Guide", path: "/blog-pages/sql-select-beginners-guide.html" },
    { name: "Silence Isn't Peace", path: "/blog-pages/silence-isnt-peace.html" },
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sitemap – All Pages</h1>
      <p style={{ marginBottom: '2rem', color: '#4b5563' }}>
        This page lists all important sections of JobLynk.live. Use the links below to navigate.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>📄 Main Pages</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
        {pages.map(page => (
          <li key={page.path} style={{ marginBottom: '0.5rem' }}>
            <Link to={page.path} style={{ color: '#2563eb', textDecoration: 'none' }}>{page.name}</Link>
          </li>
        ))}
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>📝 Blog Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
        {blogPosts.map(post => (
          <li key={post.path} style={{ marginBottom: '0.5rem' }}>
            <a href={post.path} style={{ color: '#2563eb', textDecoration: 'none' }}>{post.name}</a>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#6b7280' }}>
        For search engines: <a href="/sitemap.xml" style={{ color: '#2563eb' }}>XML Sitemap</a>
      </p>
    </div>
  );
};

export default SitemapPage;

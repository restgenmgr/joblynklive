import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: 'Tech' | 'Non-Tech';
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}

const allPosts: BlogPost[] = [
  { id: 1, title: 'How to Build Scalable Data Pipelines – Data Engineer\'s Guide 2026', slug: 'scalable-data-pipelines-guide', category: 'Tech', date: 'April 5, 2026', readTime: '10 min read', excerpt: 'Complete guide to building scalable data pipelines: ETL vs ELT, orchestration with Airflow, dbt, Snowflake, and best practices for data engineers.', tags: ['Data Engineering', 'ETL', 'Airflow', 'dbt'] },
  { id: 2, title: 'dbt and the Modern Data Stack – Complete Guide 2026', slug: 'dbt-modern-data-stack-guide', category: 'Tech', date: 'April 5, 2026', readTime: '12 min read', excerpt: 'Master dbt and the modern data stack: transformation, testing, documentation, and production best practices for data engineers.', tags: ['dbt', 'Data Stack', 'ELT', 'Snowflake'] },
  { id: 3, title: 'Data Pipeline Architecture Patterns', slug: 'data-pipeline-architecture-patterns', category: 'Tech', date: 'April 4, 2026', readTime: '8 min read', excerpt: 'Explore data pipeline architecture patterns: batch, streaming, lambda, kappa. Learn when to use each for your data engineering projects.', tags: ['Data Pipeline', 'Architecture', 'Streaming'] },
  { id: 4, title: 'SQL Filtering Data – WHERE, AND, OR, IN, BETWEEN', slug: 'sql-filtering-where-and-or-in-between', category: 'Tech', date: 'April 3, 2026', readTime: '6 min read', excerpt: 'SQL filtering tutorial: WHERE, AND, OR, IN, BETWEEN clauses. Examples for beginners to master data querying.', tags: ['SQL', 'Database', 'Querying'] },
  { id: 5, title: 'SQL for Beginners – How to Write Your First SELECT Query', slug: 'sql-select-beginners-guide', category: 'Tech', date: 'April 2, 2026', readTime: '5 min read', excerpt: 'SQL SELECT statement tutorial for beginners. Learn how to query databases with real examples and best practices.', tags: ['SQL', 'Beginner', 'SELECT'] },
  { id: 6, title: 'What Does a Data Scientist Do? – Beginner\'s Guide 2026', slug: 'data-scientist-guide', category: 'Tech', date: 'April 1, 2026', readTime: '7 min read', excerpt: 'Complete beginner\'s guide covering skills, tools, responsibilities, and career path for data scientists in 2026.', tags: ['Data Science', 'Career', 'AI/ML'] },
  { id: 7, title: 'Silence Isn\'t Peace. It\'s a Slow Poison.', slug: 'silence-isnt-peace', category: 'Non-Tech', date: 'March 30, 2026', readTime: '4 min read', excerpt: 'Personal growth and mental health insights – why silence in the wrong situations can be harmful.', tags: ['Personal Growth', 'Mental Health'] }
];

const Blog: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Tech' | 'Non-Tech'>('All');
  const filteredPosts = filter === 'All' ? allPosts : allPosts.filter(p => p.category === filter);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f1f3d' }}>JobLynk Blog</h1>
        <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0.5rem auto 0' }}>Insights on data engineering, SQL, career growth, and personal development.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {(['All', 'Tech', 'Non-Tech'] as const).map(btn => (
          <button key={btn} onClick={() => setFilter(btn)} style={{ background: filter === btn ? '#0f1f3d' : 'white', color: filter === btn ? 'white' : '#0f1f3d', border: '1px solid #0f1f3d', borderRadius: '30px', padding: '0.5rem 1.5rem', cursor: 'pointer', fontWeight: 'bold' }}>{btn}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filteredPosts.map(post => (
          <div key={post.id} style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e0d8ce', overflow: 'hidden', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
            <div style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ background: post.category === 'Tech' ? '#e8a02020' : '#0f1f3d20', color: post.category === 'Tech' ? '#b45b0a' : '#0f1f3d', fontSize: '0.7rem', fontWeight: 'bold', padding: '0.2rem 0.6rem', borderRadius: '20px' }}>{post.category}</span>
                <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#0f1f3d' }}>{post.title}</h2>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.75rem 0' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {post.tags.slice(0, 3).map(tag => <span key={tag} style={{ fontSize: '0.7rem', background: '#f3f0eb', padding: '0.2rem 0.6rem', borderRadius: '20px', color: '#4b5563' }}>#{tag}</span>)}
              </div>
              <a href={`/blog-pages/${post.slug}.html`} style={{ display: 'inline-block', background: '#0f1f3d', color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold' }} onMouseEnter={e => e.currentTarget.style.background = '#e8a020'} onMouseLeave={e => e.currentTarget.style.background = '#0f1f3d'}>Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;



import blogPosts from '../data/blogPosts.json';

export default function Blog() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>JobLynk Blog</h1>
      {blogPosts.map(post => (
        <div key={post.id} style={{ borderLeft: '4px solid blue', paddingLeft: '1rem', marginBottom: '2rem' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>Published: {post.publishedDate}</small>
        </div>
      ))}
    </div>
  );
}
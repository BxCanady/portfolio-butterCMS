import React, { useEffect, useState } from 'react';

const BlogList = () => {






   const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://app.daily.dev/upvoted');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const blogNodes = doc.querySelectorAll('.card h3.title a');
        const blogList = Array.from(blogNodes).map(node => ({
          title: node.textContent,
          url: node.getAttribute('href')
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Upvoted Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.url}>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogList;
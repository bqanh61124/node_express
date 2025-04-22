import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostLists() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));

    fetch("http://localhost:8080/count")
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) => console.error("Error fetching post count:", error));
  }, []);

  return (
    <ul className="post-list">
      <h2 className="post-list-title">Blog Posts</h2>
      <p>Tổng số bài viết: {count}</p>
      <hr />
      {posts.map((post) => (
        <li key={post.id} className="post-item">
          <Link to={`/posts/${post.slug}`}>
            <h3 className="post-title">{post.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostLists;

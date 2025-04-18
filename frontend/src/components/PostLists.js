import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostLists() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <ul className="post-list">
      <h2 className="post-list-title">Blog Posts</h2>
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

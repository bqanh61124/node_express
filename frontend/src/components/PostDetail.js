import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/blogs/${slug}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [slug]);

  if (!post) {
    return <span>Loading...</span>;
  }

  return (
    <div className="post-detail">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-description">{post.description}</p>
      <div className="post-content">
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default PostDetail;

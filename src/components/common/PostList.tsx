import React from "react";
import Post from "../common/Post";
import data from "../../data/data.json";
import "../../styles/PostList.css";

const PostList: React.FC = () => {
  return (
    <div className="postList-container">
      {/* <div className="postList-detail">
        <div className="postList-heading">
          <h1>Home</h1>
        </div>
        <div className="postList-content">
          <div className="postList-image">
            <img src="../../../public/images/elizabeth.jpeg" alt="" />
          </div>
          <div className="postList-input">
            <input type="text" placeholder="What is happening?" />
          </div>
          <div className="postList-upload">
            <input type="file" />
            <button>
              <a href="">Post</a>
            </button>
          </div>
        </div>
      </div> */}
      <div>
        {data.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            name={post.name}
            tag={post.tag}
            time={post.time}
            content={post.content}
            imageUrl={post.imageUrl}
            like={post.like}
            reply={post.reply}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;

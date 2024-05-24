import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import "../../styles/Post.css";

interface PostProps {
  image: string;
  name: string;
  tag: string;
  time: string;
  content: string;
  imageUrl?: string;
  like: number;
  reply: number;
}

const Post: FC<PostProps> = ({
  image,
  name,
  tag,
  time,
  content,
  imageUrl,
  like,
  reply,
}) => {
  return (
    <div className="post-container">
      <div className="post-content">
        <div className="post-detail">
          <div className="post-image">
            <img src={image} alt="..." />
          </div>
          <div className="post-card">
            <div className="post-user">
              <p className="name">{name}</p>
              <span className="tag">@{tag}</span>
              <span className="time">• {time}</span>
            </div>
            <div className="post-text">
              <p>{content}</p>
            </div>
            {imageUrl && (
              <div className="post-imageUrl">
                <img src={imageUrl} alt="..." />
              </div>
            )}
            <div className="post-reaction">
              <div className="like">
                <FontAwesomeIcon className="icon" icon={faHeart} />
                <span>{like}</span>
              </div>
              <div className="comment">
                <FontAwesomeIcon className="icon" icon={faComment} />
                <span>{reply}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

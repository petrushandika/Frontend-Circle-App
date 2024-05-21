import "../assets/css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

interface CardProps {
  profile: string;
  name: string;
  username: string;
  time: string;
  content: string;
  image?: string;
  like: number;
  reply: number;
}

export function Card(props: CardProps) {
  const { profile, name, username, time, content, image, like, reply } = props;

  return (
    <div className="card-container">
      <div className="card-display">
        <div className="card-image">
          <img src={profile} alt="..." />
        </div>
        <div className="card-user">
          <div className="card-name">
            <p className="name">{name}</p>
            <p className="username">@{username}</p>
            <p className="time">{time}</p>
          </div>
          <div className="card-content">
            <p className="content">{content}</p>
            <p className="image">{image}</p>
          </div>
          <div className="card-opinion">
            <p className="like">
              <FontAwesomeIcon className="icon" icon={faHeart} />
              {like}
            </p>
            <p className="reply">
              <FontAwesomeIcon className="icon" icon={faComment} />
              {reply}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

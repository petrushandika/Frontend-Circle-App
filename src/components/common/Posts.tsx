import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import "../../styles/Posts.css"

const Posts = () => {
  return (
    <div className="post-container">
      <div className="post-heading">
        <h1>Home</h1>
      </div>
      <div className="post-content">
        <div className="post-detail">
          <div className="post-image">
            <img src="../../../public/images/curry.jpeg" alt="..." />
          </div>
          <div className="post-card">
            <div className="post-user">
              <p className="name">Stephen Curry</p>
              <span className="tag">@Stephen Curry</span>
              <span className="time">• 4H</span>
            </div>
            <div className="post-text">
              <p>
                Kalian pernah ga sih bet on saving? Jadi by calculation
                sebenernya kita ga survive sampe tanggal tertentu. Tapi entah
                gimana bisa aja gitu. Ada aja jalannya augmented reality real
                time puppet I made. You can try it now went below in the thread.
              </p>
            </div>
            <div className="post-reaction">
              <div className="like">
                <FontAwesomeIcon className="icon" icon={faHeart} />
                <span>36</span>
              </div>
              <div className="comment">
                <FontAwesomeIcon className="icon" icon={faComment} />
                <span>Comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

import "../../styles/Card.css"

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-heading">
        <h1>My Profile</h1>
      </div>
      <div className="card-content">
        <div className="card-image">
          <img src="../../../public/images/elizabeth.jpeg" alt="" />
        </div>
        <div className="card-button">
          <button>
            <a href="">Edit Profile</a>
          </button>
        </div>
        <div className="card-user">
          <div className="card-name">
            <h1>Alizabeth Umpel</h1>
            <span>@elizabethump</span>
            <p>picked over by the worms, and weird fishes</p>
          </div>
          <div className="card-follow">
            <p>
              291 <span className="following">Following</span>
            </p>
            <p>
              20 <span className="followers">Followers</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h1>Circle</h1>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-home content">
          <a href="">
            <span >
              <FontAwesomeIcon className="icon" icon={faHouse} />
              Home
            </span>
          </a>
        </div>
        <div className="sidebar-search content">
          <a href="">
            <span >
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              Search
            </span>
          </a>
        </div>
        <div className="sidebar-follow content">
          <a href="">
            <span >
              <FontAwesomeIcon className="icon" icon={faHeart} />
              Follows
            </span>
          </a>
        </div>
        <div className="sidebar-profile content">
          <a href="" >
            <span>
              <FontAwesomeIcon className="icon" icon={faUser} />
              Profile
            </span>
          </a>
        </div>
      </div>
      <div className="sidebar-button">
        <button>
          <a href="#">Create Post</a>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

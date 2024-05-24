import Sidebar from "../../components/common/Sidebar"
import PostList from "../../components/common/PostList"
import RightPanel from "../../components/common/RightPanel"
import "../../styles/HomePages.css"

const HomePages = () => {
  return (
    <div className="homepages-container">
      <div className="homepages-grid">
        <div>
          <Sidebar/>
        </div>
        <div>
          <PostList/>
        </div>
        <div>
          <RightPanel/>
        </div>
      </div>
    </div>
  );
};

export default HomePages;

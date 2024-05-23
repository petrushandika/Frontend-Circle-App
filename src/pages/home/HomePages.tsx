import Sidebar from "../../components/common/Sidebar"
import Posts from "../../components/common/Posts"
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
          <Posts/>
        </div>
        <div>
          <RightPanel/>
        </div>
      </div>
    </div>
  );
};

export default HomePages;

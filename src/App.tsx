import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/CircleLayout";
import HomePages from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import FollowPage from "./pages/FollowPage";
// import PostItem from "./components/common/post/PostItem";
// import LogoutPage from "./pages/LogoutPage";
import NewThread from "./components/common/modals/NewThread";
import EditThread from "./components/common/modals/EditProfile"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Testing from "./test/Testing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePages />} />
        <Route path="me" element={<ProfilePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="follow" element={<FollowPage />} />
        {/* <Route path="post/:id" element={<PostItem />} /> */}
        {/* <Route path="logout" element={<LogoutPage />} /> */}
        <Route path="create" element={<NewThread />} />
        <Route path="edit" element={<EditThread />} />
      </Route>
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="testing" element={<Testing />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePages from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import FollowPage from "./pages/FollowPage";
import Testing from "./test/Testing";
// import PostItem from "./components/common/post/PostItem";
import NewThread from "./components/common/modals/NewThread";
import EditThread from "./components/common/modals/EditProfile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePages />} />
        <Route path="me" element={<ProfilePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="follow" element={<FollowPage />} />
        {/* <Route path="post/:id" element={<PostItem />} /> */}
        <Route path="create" element={<NewThread />} />
        <Route path="edit" element={<EditThread />} />
      </Route>
      <Route path="testing" element={<Testing />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

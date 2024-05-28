import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePages from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import FollowPage from "./pages/FollowPage";
import Testing from "./components/common/testing/Testing";
import PostItem from "./components/common/post/PostItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePages />} />
        <Route path="me" element={<ProfilePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="follow" element={<FollowPage />} />
        <Route path="post/:id" element={<PostItem />} />
      </Route>
      <Route path="testing" element={<Testing />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

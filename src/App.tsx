import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RootLayout from "./layouts/CircleLayout";
import HomePages from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import FollowPage from "./pages/FollowPage";
import Thread from "./components/common/thread/Thread";
import NewThread from "./components/common/modals/NewThread";
import EditThread from "./components/common/modals/EditProfile";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Testing from "./test/Testing";
import { useEffect, useState } from "react";
import { api } from "./configs/Api";
import { RootState } from "./redux";
import { SET_USER } from "./redux/slice/auth";

const PrivateRoute = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  async function authCheck() {
    try {
      const response = await api.post(
        "auth/check",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(SET_USER(response.data));
    } catch (error) {
      navigate("/auth/login");
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  }

  if (!isLoading) {
    if (currentUser.email) return <Outlet />;
    return <Navigate to="/auth/login" />;
  }
  return <RootLayout />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<HomePages />} />
          <Route path="me" element={<ProfilePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="follow" element={<FollowPage />} />
          <Route path="thread/:id" element={<Thread />} />
          <Route path="create" element={<NewThread />} />
          <Route path="edit" element={<EditThread />} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;

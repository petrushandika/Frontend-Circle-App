import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import EditThread from "./components/common/modals/EditProfile";
import NewThread from "./components/common/modals/NewThread";
import Thread from "./components/common/thread/Thread";
import { api } from "./configs/Api";
import ForgotPasswordPage from "./features/auth/pages/ForgotPasswordPage";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import { SET_AUTH_CHECK } from "./features/auth/slices/authSlice";
import RootLayout from "./layouts/CircleLayout";
import FollowPage from "./pages/FollowPage";
import HomePages from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import { Testing } from "./test/Testing";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function authCheck() {
    try {
      setIsLoading(true)
      const response = await api.get(
        "auth/check",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      dispatch(SET_AUTH_CHECK(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log(token);

    if (token) {
      authCheck();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePages />} />
          <Route path="me" element={<ProfilePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="follow" element={<FollowPage />} />
          <Route path="thread/:id" element={<Thread />} />
          <Route path="create" element={<NewThread refetch={() => { }} />} />
          <Route path="edit" element={<EditThread refetch={() => { }} />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgotpassword" element={<ForgotPasswordPage />} />
        </Route>
        <Route path="testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;

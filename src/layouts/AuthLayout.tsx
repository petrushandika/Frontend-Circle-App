import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
    const currentUser = useSelector((state: RootState) => state.auth.user);
    console.log(currentUser);

    if (currentUser.id) {
        console.log(" USER exist LOGGING in");

        return <Navigate to="/" />;
    }

    return (
        <Outlet />
    )
}

export default AuthLayout
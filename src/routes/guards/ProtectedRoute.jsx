import { Navigate } from "react-router-dom";
import { useUserStore } from "@store/userStore";

export const ProtectedRoute = ({ children }) => {
    const user = useUserStore(state => state.user);
    const loadingAuth = useUserStore(state => state.loadingAuth);

    if (loadingAuth) {
        return null;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
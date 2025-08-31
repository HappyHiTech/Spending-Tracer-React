import { useAuth } from "@contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useAuth();

    if (!isLoggedIn.current) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
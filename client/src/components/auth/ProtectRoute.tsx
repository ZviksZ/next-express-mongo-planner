import { useAuth } from "./AuthContext";

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading || (!isAuthenticated && window.location.pathname !== "/login")){
    return "111";
  }
  return children;
};

import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { ReactNode } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

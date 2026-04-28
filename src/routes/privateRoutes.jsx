import { Navigate, Outlet, useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.REACT_APP_SECRET_ENCR_KEY;

const getDecryptedToken = () => {

  const encryptedUser = localStorage.getItem("auth_user");
  const UserToken = localStorage.getItem("auth_token");
  if (!encryptedUser && !UserToken) return null;

  try {

    if (encryptedUser && UserToken) {
      return CryptoJS.AES.decrypt(encryptedUser, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    }

  } catch (error) {
    console.error("Token decryption failed:", error);
    return null;
  }

};

const PrivateRoute = () => {

  const authToken = getDecryptedToken();
  const location = useLocation();

  // If User is Not Sign in 
  if (!authToken && location.pathname === "/registration") {
    return <Outlet />;
  }

  // If User Sign in 
  if (authToken && (location.pathname === "/sign-in" || location.pathname === "/otp-sent")) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;

};

export default PrivateRoute;

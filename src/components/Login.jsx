import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../asstes/styles/login.scss";
import LoginBannerImage from "../asstes/images/login-banner.png";
import FacebookLoginImg from "../asstes/images/icons/facebook-icon.png";
import GmailLogin from "../asstes/images/icons/google-icon.png";
import AppleLogin from "../asstes/images/icons/apple-icon.png";
import { LoginSocialGoogle } from "reactjs-social-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../redux/authSlice";

// Facebook Login ------------------------
const FaceBookAuthButton = () => {
  const navigate = useNavigate();
  const SECRET_KEY = process.env.REACT_APP_SECRET_ENCR_KEY;
  const handleSuccess = (response) => {
    if (!response.id || !response.accessToken) {
      console.error("Facebook login failed");
      return;
    }

    const userData = {
      provider: "facebook",
      provider_id: response.id,
      email: response.email,
      full_name: response.name,
      id_token: response.accessToken,
    };

    fetch(`${process.env.REACT_APP_API_BASE_URL}api/auth/social-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          // const encryptedToken = CryptoJS.AES.encrypt(res.data.token, SECRET_KEY).toString();
          const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(res.data.user), SECRET_KEY).toString();
          // localStorage.setItem("auth_token", encryptedToken);
          localStorage.setItem("auth_user", encryptedUser);
          navigate("/")
        } else {
          console.error("Failed to store token");
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      callback={handleSuccess}
      fields="name,email,picture"
      render={(renderProps) => (
        <button onClick={renderProps.onClick} className="third-party-login facebook-login">
          <img src={FacebookLoginImg} alt="Facebook Login" />
        </button>
      )}
    />
  );
};
// ------------------------

// Google Login ------------------------
const GoogleAuthButton = () => {

  const handleSuccess = (response) => {

    if (!response?.data) {
      console.log("Login Failed ", response)
      return;
    }

    const userData = {
      provider: "google",
      provider_id: response?.data?.sub,
      email: response?.data?.email,
      full_name: response?.data?.name,
      id_token: response?.data?.access_token,
    };

    fetch(`${process.env.REACT_APP_API_BASE_URL}api/auth/social-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => console.error("Error:", err));
  };

  return (
    <LoginSocialGoogle
      client_id={process.env.REACT_APP_GG_APP_ID}
      onResolve={handleSuccess}
      onReject={(err) => console.log("There is error", err)}
      scope='email https://www.googleapis.com/auth/userinfo.email'
    >
      <button className="third-party-login google-login">
        <img src={GmailLogin} alt="Gmail Login" />
      </button>
    </LoginSocialGoogle>
  );
};
// ------------------------

function LoginViewPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({});

  const handleContinue = async (e) => {
    e.preventDefault();
    dispatch(setPhoneNumber(inputValue));

    try {
      await fetch(
        `${process.env.REACT_APP_API_BASE_URL}api/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(inputValue),
        }
      ).then((res) => res.json).then(() => navigate("/otp-sent"));
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  }

  return (
    <div className="login-page-body">
      <section className="login-page">
        <Container>
          <div className="login-card">
            <Row className="align-items-center main-div-box">
              <Col lg={6} className="banner-login-col-div">
                <div className="login-banner">
                  <img src={LoginBannerImage} alt="Login Banner" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="login-form-card mobile-number-card">
                  <h2 className="login-title">Sign In</h2>
                  <p>Enter your details to continue</p>
                  <form className="form-layout" onSubmit={handleContinue}>
                    <div className="form-group mb-30">
                      <PhoneInput
                        country={"in"}
                        onChange={(phone, country) => {
                          const formattedPhone = phone.replace(`${country.dialCode}`, "");
                          setInputValue({ phone: formattedPhone, country_code: `+${country.dialCode}` });
                        }}
                        inputclassName="form-control"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                    <div className="btn-continue">
                      <button
                        type="submit"
                        className="btn btn-default bh-btn-white w-100"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                  <div className="separator separator-content">
                    <span className="connect-with">Or continue with</span>
                  </div>
                  <div className="or-login-buttons">
                    <GoogleAuthButton />
                    <FaceBookAuthButton />
                    {/*  */}
                    <button className="third-party-login apple-login">
                      <img src={AppleLogin} alt="Apple Login" />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default LoginViewPage;

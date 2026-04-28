import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/login.scss";
import LoginBannerImage from "../asstes/images/login-banner.png";
import { useSelector } from "react-redux";
import CryptoJS from "crypto-js";

function SendOtpPage() {

  const navigate = useNavigate();

  const OTP_LENGTH = 6; // Set OTP length
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  const countryCode = useSelector((state) => state.auth.countryCode);
  const SECRET_KEY = process.env.REACT_APP_SECRET_ENCR_KEY;

  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill("")); // Adjust length based on OTP length
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/, ""); // Allow only numbers
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (index < OTP_LENGTH - 1 && value) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");

    if (enteredOTP.length !== otp.length) {
      alert("Please enter a valid OTP");
      return;
    }

    const userData = {
      phone: phoneNumber,
      otp: enteredOTP,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}api/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.status === 200) {
        const auth_token = data?.data?.token
        const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(data.data.user), SECRET_KEY).toString();
        localStorage.setItem("auth_user", encryptedUser);
        localStorage.setItem("auth_token", auth_token);
        navigate(-2);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError(true);
    }
  };

  // Handle Key Events (Backspace)
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        newOtp[index - 1] = "";
        inputRefs.current[index - 1]?.focus();
      }
      setOtp(newOtp);
    }
  }

  // Resend OTP Logic
  const handleResendOtp = async (e) => {
    setOtp(new Array(OTP_LENGTH).fill("")); // Clear OTP fields
    setError(false);
    setResendEnabled(false);
    setTimer(60); // Restart timer

    e.preventDefault();

    const userData = {
      phone: phoneNumber,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}api/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        alert("OTP sent successfully!");
      } else {
        alert("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      alert("Error resending OTP. Please check your connection.");
    }
  };

  // Timer Countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendEnabled(true);
    }
  }, [timer]);

  useEffect(() => {
    if (!phoneNumber || !countryCode) {
      navigate("/sign-in");
    }
  }, [phoneNumber, countryCode, navigate]);

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
                <div className="login-form-card sent-otp-card">
                  <h2 className="login-title">Welcome</h2>
                  <p className="otp-sent-details">
                    OTP sent on <span className="otp-no">{countryCode}{phoneNumber}</span>{" "}
                    <Link to="/sign-in" className="text-link">
                      <i className="bi bi-pencil"></i>
                    </Link>
                  </p>
                  <form onSubmit={handleVerifyOTP} className="form-layout">
                    <div className="form-group mb-30">
                      <div className="otp-field">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            className="form-control otp-input"
                            value={digit}
                            maxLength={1}
                            onChange={(e) => handleChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                          />
                        ))}
                      </div>
                      <div className="show-validate-msg">
                        {/* Show validation message only if OTP is incorrect */}
                        {error && (
                          <div className="">
                            <span className="text-danger">Invalid or incorrect OTP.</span>
                          </div>
                        )}

                        {/* Resend OTP Timer */}
                        <div className="otp-timer text-white">
                          {resendEnabled ? (
                            <button className="btn btn-link" onClick={handleResendOtp}>
                              Resend OTP
                            </button>
                          ) : (
                            <span>Resend OTP in <b className="timer-play">{`0:${timer < 10 ? "0" : ""}${timer}`}</b></span>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Continue Button */}
                    <div className="btn-continue">
                      <button type="submit" className="btn btn-default bh-btn-white w-100" >
                        Continue
                      </button>
                    </div>
                  </form>
                  {/* <p className="login-msg mt-3">
                    Dont have Account? <a className="text-link"> Sign Up</a>
                  </p>
                  <div className="separator separator-content">
                    <span className="connect-with">Or continue with</span>
                  </div>
                  <div className="or-login-buttons">
                    <button className="third-party-login google-login">
                      <img src={GmailLogin} alt="Gmail Login" />
                    </button>
                    <button className="third-party-login facebook-login">
                      <img src={FacebookLogin} alt="Facebook Login" />
                    </button>
                    <button className="third-party-login apple-login">
                      <img src={AppleLogin} alt="Apple Login" />
                    </button>
                  </div> */}
                </div>
              </Col >
            </Row >
          </div >
        </Container >
      </section >
    </div >
  );
}

export default SendOtpPage;

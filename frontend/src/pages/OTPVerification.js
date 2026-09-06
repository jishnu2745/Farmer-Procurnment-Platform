import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../style/OTPVerification.css";
import LanguageSelector from "../components/LanguageSelector";

function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const inputRef = useRef(null);

  const mobile = location.state?.mobile;

  // If user directly opens this page without coming from Login
  if (!mobile) {
    navigate("/");
    return null;
  }

  const verifyOTP = () => {
    setError("");

    if (otp.length !== 6) {
      setError(t("completeOTP"));
      return;
    }

    // Temporary OTP for development
    // Replace this with backend verification later
    if (otp === "123456") {
      navigate("/home");
    } else {
      setError(t("incorrectOTP"));
    }
  };

  const handleOTPChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setOtp(value);
    setError("");
  };

  const resendOTP = () => {
    // Later this will call your backend
    console.log("Resending OTP to:", mobile);

    setOtp("");
    setError("");

    alert(t("otpSent"));
  };

  return (
    <div className="login-page">

      {/* ================= HEADER ================= */}
      <header className="login-header">

        <div className="logo">

          <span className="logo-icon">
            🌾
          </span>

          <div>
            <h2>SmartProcure</h2>

            <span>
              {t("procurementPlatform")}
            </span>
          </div>

        </div>

        {/* Language Selector */}
        <LanguageSelector />

      </header>


      {/* ================= OTP CONTENT ================= */}
      <main className="otp-main">

        <div className="otp-card">

          {/* Icon */}
          <div className="otp-icon">
            📱
          </div>


          {/* Heading */}
          <div className="otp-header">

            <h1>
              {t("verifyMobile")}
            </h1>

            <p>
              {t("otpSentTo")}
            </p>

            <strong>
              +91 {mobile}
            </strong>

          </div>


          {/* ================= OTP INPUT ================= */}
          <div className="otp-form">

            <label htmlFor="otp">
              {t("enterOTP")}
            </label>

            <input
              ref={inputRef}
              id="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="••••••"
              value={otp}
              onChange={handleOTPChange}
              maxLength="6"
              className={
                error
                  ? "otp-input error"
                  : "otp-input"
              }
              autoFocus
            />

            {error && (
              <p className="otp-error">
                ⚠️ {error}
              </p>
            )}

          </div>


          {/* ================= VERIFY BUTTON ================= */}
          <button
            className="otp-button"
            onClick={verifyOTP}
          >
            {t("verifyContinue")}

            <span>
              →
            </span>

          </button>


          {/* ================= RESEND OTP ================= */}
          <div className="resend-section">

            <span>
              {t("didntReceiveOTP")}
            </span>

            <button
              className="resend-button"
              onClick={resendOTP}
            >
              {t("resendOTP")}
            </button>

          </div>


          {/* ================= CHANGE NUMBER ================= */}
          <button
            className="change-number"
            onClick={() => navigate("/")}
          >
            ← {t("changeMobile")}
          </button>


          {/* ================= SECURITY ================= */}
          <div className="security-note">
            🔒 {t("mobileSecurity")}
          </div>

        </div>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="login-footer">

        <span>
          {t("copyright")}
        </span>

        <span>
          •
        </span>

        <span>
          {t("farmerProcurementServices")}
        </span>

      </footer>

    </div>
  );
}

export default OTPVerification;
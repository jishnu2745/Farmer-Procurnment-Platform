
import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/OTPVerification.css";

function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

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
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    // Temporary OTP for development
    // Replace this with backend verification later
    if (otp === "123456") {
      navigate("/home");
    } else {
      setError("Incorrect OTP. Please try again.");
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

    alert("A new OTP has been sent to your mobile number.");
  };

  return (
    <div className="login-page">

      {/* Header */}
      <header className="login-header">

        <div className="logo">
          <span className="logo-icon">🌾</span>

          <div>
            <h2>FarmerConnect</h2>
            <span>Procurement Platform</span>
          </div>
        </div>

        <div className="language">
          🌐 English ▾
        </div>

      </header>


      {/* OTP Content */}
      <main className="otp-main">

        <div className="otp-card">

          {/* Icon */}
          <div className="otp-icon">
            📱
          </div>


          {/* Heading */}
          <div className="otp-header">

            <h1>Verify your mobile number</h1>

            <p>
              We have sent a 6-digit OTP to
            </p>

            <strong>
              +91 {mobile}
            </strong>

          </div>


          {/* OTP Input */}
          <div className="otp-form">

            <label htmlFor="otp">
              Enter OTP
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
              className={error ? "otp-input error" : "otp-input"}
              autoFocus
            />

            {error && (
              <p className="otp-error">
                ⚠️ {error}
              </p>
            )}

          </div>


          {/* Verify Button */}
          <button
            className="otp-button"
            onClick={verifyOTP}
          >
            Verify & Continue
            <span>→</span>
          </button>


          {/* Resend */}
          <div className="resend-section">

            <span>Didn't receive the OTP?</span>

            <button
              className="resend-button"
              onClick={resendOTP}
            >
              Resend OTP
            </button>

          </div>


          {/* Change Number */}
          <button
            className="change-number"
            onClick={() => navigate("/")}
          >
            ← Change mobile number
          </button>


          {/* Security */}
          <div className="security-note">
            🔒 Your mobile number is used securely for verification.
          </div>

        </div>

      </main>


      {/* Footer */}
      <footer className="login-footer">

        <span>© 2026 FarmerConnect</span>

        <span>•</span>

        <span>Farmer Procurement Services</span>

      </footer>

    </div>
  );
}

export default OTPVerification;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const [mobile, setMobile] = useState("");
//   const navigate = useNavigate();

//   const sendOTP = () => {

//     if (mobile.length !== 10) {
//       alert("Enter a valid 10-digit mobile number");
//       return;
//     }

//     // Later this will call your backend
//     console.log("Sending OTP to:", mobile);

//     navigate("/verify-otp", {
//       state: { mobile }
//     });
//   };

//   return (
//     <div className="container">

//       <h1>Farmer Procurement</h1>

//       <p>Login using your mobile number</p>

//       <input
//         type="tel"
//         placeholder="Enter mobile number"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//         maxLength="10"
//       />

//       <button onClick={sendOTP}>
//         Send OTP
//       </button>

//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";
function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const sendOTP = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    console.log("Sending OTP to:", mobile);

    navigate("/verify-otp", {
      state: { mobile },
    });
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

      {/* Main Content */}
      <main className="login-main">

        {/* Left Section */}
        <section className="welcome-section">

          <div className="farmer-icon">
            👨‍🌾
          </div>

          <h1>
            Sell your produce.
            <br />
            <span>Skip the waiting.</span>
          </h1>

          <p>
            Register your farm, book your procurement slot,
            and track your produce and payments—all in one place.
          </p>

          <div className="features">

            <div className="feature">
              <div className="feature-icon">📅</div>
              <div>
                <strong>Book a slot</strong>
                <p>Choose a convenient procurement time.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">⏱️</div>
              <div>
                <strong>Less waiting</strong>
                <p>Know your queue position in advance.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">💰</div>
              <div>
                <strong>Track payments</strong>
                <p>Check your procurement and payment status.</p>
              </div>
            </div>

          </div>

        </section>

        {/* Login Card */}
        <section className="login-card">

          <div className="card-header">
            <div className="mobile-icon">
              📱
            </div>

            <h2>Farmer Login</h2>

            <p>
              Enter your registered mobile number
              to continue.
            </p>
          </div>

          <div className="form-group">

            <label htmlFor="mobile">
              Mobile Number
            </label>

            <div className="mobile-input">

              <span className="country-code">
                +91
              </span>

              <input
                id="mobile"
                type="tel"
                inputMode="numeric"
                placeholder="Enter 10-digit number"
                value={mobile}
                onChange={(e) =>
                  setMobile(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                maxLength="10"
              />

            </div>

            <small>
              We'll send a one-time password to this number.
            </small>

          </div>

          <button
            className="otp-button"
            onClick={sendOTP}
          >
            Send OTP
            <span>→</span>
          </button>

          <div className="security-note">
            🔒 Your information is secure and protected.
          </div>

          <div className="divider">
            <span>New farmer?</span>
          </div>

          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            Register as a Farmer
          </button>

        </section>

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

export default Login;

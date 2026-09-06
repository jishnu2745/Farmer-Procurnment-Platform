
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../style/Login.css";
// function Login() {
//   const [mobile, setMobile] = useState("");
//   const navigate = useNavigate();

//   const sendOTP = () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       alert("Please enter a valid 10-digit mobile number");
//       return;
//     }

//     console.log("Sending OTP to:", mobile);

//     navigate("/verify-otp", {
//       state: { mobile },
//     });
//   };

//   return (
//     <div className="login-page">

//       {/* Header */}
//       <header className="login-header">
//         <div className="logo">
//           <span className="logo-icon">🌾</span>
//           <div>
//             <h2>FarmerConnect</h2>
//             <span>Procurement Platform</span>
//           </div>
//         </div>

//         <div className="language">
//           🌐 English ▾
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="login-main">

//         {/* Left Section */}
//         <section className="welcome-section">

//           <div className="farmer-icon">
//             👨‍🌾
//           </div>

//           <h1>
//             Sell your produce.
//             <br />
//             <span>Skip the waiting.</span>
//           </h1>

//           <p>
//             Register your farm, book your procurement slot,
//             and track your produce and payments—all in one place.
//           </p>

//           <div className="features">

//             <div className="feature">
//               <div className="feature-icon">📅</div>
//               <div>
//                 <strong>Book a slot</strong>
//                 <p>Choose a convenient procurement time.</p>
//               </div>
//             </div>

//             <div className="feature">
//               <div className="feature-icon">⏱️</div>
//               <div>
//                 <strong>Less waiting</strong>
//                 <p>Know your queue position in advance.</p>
//               </div>
//             </div>

//             <div className="feature">
//               <div className="feature-icon">💰</div>
//               <div>
//                 <strong>Track payments</strong>
//                 <p>Check your procurement and payment status.</p>
//               </div>
//             </div>

//           </div>

//         </section>

//         {/* Login Card */}
//         <section className="login-card">

//           <div className="card-header">
//             <div className="mobile-icon">
//               📱
//             </div>

//             <h2>Farmer Login</h2>

//             <p>
//               Enter your registered mobile number
//               to continue.
//             </p>
//           </div>

//           <div className="form-group">

//             <label htmlFor="mobile">
//               Mobile Number
//             </label>

//             <div className="mobile-input">

//               <span className="country-code">
//                 +91
//               </span>

//               <input
//                 id="mobile"
//                 type="tel"
//                 inputMode="numeric"
//                 placeholder="Enter 10-digit number"
//                 value={mobile}
//                 onChange={(e) =>
//                   setMobile(
//                     e.target.value.replace(/\D/g, "")
//                   )
//                 }
//                 maxLength="10"
//               />

//             </div>

//             <small>
//               We'll send a one-time password to this number.
//             </small>

//           </div>

//           <button
//             className="otp-button"
//             onClick={sendOTP}
//           >
//             Send OTP
//             <span>→</span>
//           </button>

//           <div className="security-note">
//             🔒 Your information is secure and protected.
//           </div>

//           <div className="divider">
//             <span>New farmer?</span>
//           </div>

//           <button
//             className="register-button"
//             onClick={() => navigate("/register")}
//           >
//             Register as a Farmer
//           </button>

//         </section>

//       </main>

//       {/* Footer */}
//       <footer className="login-footer">
//         <span>© 2026 FarmerConnect</span>
//         <span>•</span>
//         <span>Farmer Procurement Services</span>
//       </footer>

//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../style/Login.css";
import LanguageSelector from "../components/LanguageSelector";

function Login() {
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();
  const { t } = useTranslation();

  const sendOTP = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert(t("invalidMobile"));
      return;
    }

    console.log("Sending OTP to:", mobile);

    navigate("/verify-otp", {
      state: {
        mobile: mobile,
      },
    });
  };

  return (
    <div className="login-page">

      {/* ================= HEADER ================= */}
      <header className="login-header">

        <div className="logo">
          <span className="logo-icon">🌾</span>

          <div>
            <h2>SmartProcure</h2>
            <span>{t("procurementPlatform")}</span>
          </div>
        </div>

        {/* Language Selector */}
        <LanguageSelector />

      </header>


      {/* ================= MAIN CONTENT ================= */}
      <main className="login-main">

        {/* ================= LEFT SECTION ================= */}
        <section className="welcome-section">

          <div className="farmer-icon">
            👨‍🌾
          </div>

          <h1>
            {t("sellProduce")}
            <br />
            <span>{t("skipWaiting")}</span>
          </h1>

          <p>
            {t("welcomeDescription")}
          </p>


          {/* ================= FEATURES ================= */}
          <div className="features">

            {/* Book a Slot */}
            <div className="feature">

              <div className="feature-icon">
                📅
              </div>

              <div>
                <strong>
                  {t("bookSlot")}
                </strong>

                <p>
                  {t("bookSlotDescription")}
                </p>
              </div>

            </div>


            {/* Less Waiting */}
            <div className="feature">

              <div className="feature-icon">
                ⏱️
              </div>

              <div>
                <strong>
                  {t("lessWaiting")}
                </strong>

                <p>
                  {t("lessWaitingDescription")}
                </p>
              </div>

            </div>


            {/* Track Payments */}
            <div className="feature">

              <div className="feature-icon">
                💰
              </div>

              <div>
                <strong>
                  {t("trackPayments")}
                </strong>

                <p>
                  {t("trackPaymentsDescription")}
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= LOGIN CARD ================= */}
        <section className="login-card">

          {/* Card Header */}
          <div className="card-header">

            <div className="mobile-icon">
              📱
            </div>

            <h2>
              {t("farmerLogin")}
            </h2>

            <p>
              {t("loginDescription")}
            </p>

          </div>


          {/* ================= MOBILE NUMBER ================= */}
          <div className="form-group">

            <label htmlFor="mobile">
              {t("mobileNumber")}
            </label>

            <div className="mobile-input">

              <span className="country-code">
                +91
              </span>

              <input
                id="mobile"
                type="tel"
                inputMode="numeric"
                placeholder={t("mobilePlaceholder")}
                value={mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setMobile(value);
                }}
                maxLength={10}
              />

            </div>

            <small>
              {t("otpDescription")}
            </small>

          </div>


          {/* ================= SEND OTP BUTTON ================= */}
          <button
            className="otp-button"
            onClick={sendOTP}
          >
            {t("sendOTP")}

            <span>
              →
            </span>

          </button>


          {/* ================= SECURITY NOTE ================= */}
          <div className="security-note">
            🔒 {t("secureInformation")}
          </div>


          {/* ================= DIVIDER ================= */}
          <div className="divider">

            <span>
              {t("newFarmer")}
            </span>

          </div>


          {/* ================= REGISTER BUTTON ================= */}
          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            {t("registerFarmer")}
          </button>

        </section>

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

export default Login;
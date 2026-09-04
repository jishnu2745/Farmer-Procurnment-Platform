
import { useLocation, useNavigate } from "react-router-dom";
import "../style/QueueStatus.css";

function QueueStatus() {

  const location = useLocation();
  const navigate = useNavigate();

  const { center, slot } = location.state || {};

  return (
    <div className="queue-container">

      <div className="queue-card">

        {/* Header */}
        <div className="queue-header">
          <div className="success-icon">
            ✓
          </div>

          <h2>Procurement Status</h2>

          <p>
            Your procurement slot has been confirmed.
          </p>
        </div>


        {/* Booking Information */}
        <div className="booking-info">

          <div className="info-row">
            <span className="info-label">
              📍 Procurement Centre
            </span>

            <span className="info-value">
              {center?.name || "Procurement Center"}
            </span>
          </div>


          <div className="info-row">
            <span className="info-label">
              🕐 Time Slot
            </span>

            <span className="info-value">
              {slot || "Not available"}
            </span>
          </div>

        </div>


        {/* Queue Section */}
        <div className="queue-section">

          <p className="queue-title">
            Your Queue Number
          </p>

          <div className="queue-number">
            27
          </div>

          <p className="queue-note">
            Please keep this number for your visit.
          </p>

        </div>


        {/* Waiting Information */}
        <div className="waiting-info">

          <div className="waiting-item">

            <span className="waiting-icon">
              👨‍🌾
            </span>

            <div>
              <p>Farmers Ahead</p>
              <strong>8</strong>
            </div>

          </div>


          <div className="waiting-divider"></div>


          <div className="waiting-item">

            <span className="waiting-icon">
              ⏱️
            </span>

            <div>
              <p>Estimated Wait</p>
              <strong>40 min</strong>
            </div>

          </div>

        </div>


        {/* Live Status */}
        <div className="live-status">

          <span className="live-dot"></span>

          <div>
            <strong>Queue is Active</strong>
            <p>
              Your position will update as farmers are served.
            </p>
          </div>

        </div>


        {/* Buttons */}
        <div className="queue-actions">

          <button
            className="home-button"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default QueueStatus;

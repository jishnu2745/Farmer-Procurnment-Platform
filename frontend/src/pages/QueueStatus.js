import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../style/QueueStatus.css";
import LanguageSelector from "../components/LanguageSelector";

function QueueStatus() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { center, slot } = location.state || {};

  return (
    <div className="queue-container">

      <div className="queue-card">

        {/* ================= HEADER ================= */}

        <div className="queue-header">

          <div className="queue-header-top">
            <div className="success-icon">
              ✓
            </div>

            <LanguageSelector />
          </div>

          <h2>{t("procurementStatus")}</h2>

          <p>
            {t("procurementConfirmed")}
          </p>

        </div>


        {/* ================= BOOKING INFORMATION ================= */}

        <div className="booking-info">

          <div className="info-row">

            <span className="info-label">
              📍 {t("procurementCentre")}
            </span>

            <span className="info-value">
              {center?.name || t("procurementCenter")}
            </span>

          </div>


          <div className="info-row">

            <span className="info-label">
              🕐 {t("timeSlot")}
            </span>

            <span className="info-value">
              {slot || t("notAvailable")}
            </span>

          </div>

        </div>


        {/* ================= QUEUE SECTION ================= */}

        <div className="queue-section">

          <p className="queue-title">
            {t("yourQueueNumber")}
          </p>

          <div className="queue-number">
            27
          </div>

          <p className="queue-note">
            {t("queueNumberNote")}
          </p>

        </div>


        {/* ================= WAITING INFORMATION ================= */}

        <div className="waiting-info">

          <div className="waiting-item">

            <span className="waiting-icon">
              👨‍🌾
            </span>

            <div>

              <p>
                {t("farmersAhead")}
              </p>

              <strong>
                8
              </strong>

            </div>

          </div>


          <div className="waiting-divider"></div>


          <div className="waiting-item">

            <span className="waiting-icon">
              ⏱️
            </span>

            <div>

              <p>
                {t("estimatedWait")}
              </p>

              <strong>
                40 {t("minutes")}
              </strong>

            </div>

          </div>

        </div>


        {/* ================= LIVE STATUS ================= */}

        <div className="live-status">

          <span className="live-dot"></span>

          <div>

            <strong>
              {t("queueActive")}
            </strong>

            <p>
              {t("queueUpdateMessage")}
            </p>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <div className="queue-actions">

          <button
            className="home-button"
            onClick={() => navigate("/")}
          >
            {t("backToHome")}
          </button>

        </div>

      </div>

    </div>
  );
}

export default QueueStatus;
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../style/ProcurementCenters.css";
import LanguageSelector from "../components/LanguageSelector";

function ProcurementCenters() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const centers = [
    {
      id: 1,
      name: t("governmentProcurementCentre"),
      distance: "2.4 km",
      waiting: 35,
    },
    {
      id: 2,
      name: t("agriculturalCooperativeCentre"),
      distance: "4.1 km",
      waiting: 12,
    },
    {
      id: 3,
      name: t("primaryAgriculturalCentre"),
      distance: "6.2 km",
      waiting: 8,
    },
  ];

  const selectCenter = (center) => {
    navigate("/slot-booking", {
      state: {
        center,
      },
    });
  };

  return (
    <div className="centers-container">
      <div className="centers-content">

        {/* ================= HEADER ================= */}
        <div className="centers-header">
          <div className="header-icon">
            📍
          </div>

          <div>
            <h1>{t("procurementCentres")}</h1>

            <p>
              {t("selectProcurementCentre")}
            </p>
          </div>

          <LanguageSelector />
        </div>

        {/* ================= LOCATION STATUS ================= */}
        <div className="location-status">
          <span>📍</span>

          <div>
            <strong>
              {t("nearbyCentres")}
            </strong>

            <p>
              {t("nearbyCentresDescription")}
            </p>
          </div>
        </div>

        {/* ================= CENTRE LIST ================= */}
        <div className="centers-list">
          {centers.map((center) => (
            <div
              className="procurement-center-card"
              key={center.id}
            >

              {/* Centre Icon */}
              <div className="center-icon">
                🏢
              </div>

              {/* Centre Details */}
              <div className="center-details">
                <h3>
                  {center.name}
                </h3>

                <div className="center-info-row">

                  <span>
                    📏 {center.distance}
                  </span>

                  <span
                    className={
                      center.waiting <= 15
                        ? "waiting-low"
                        : center.waiting <= 30
                        ? "waiting-medium"
                        : "waiting-high"
                    }
                  >
                    👨‍🌾 {center.waiting} {t("waiting")}
                  </span>

                </div>

                <button
                  className="select-center-button"
                  onClick={() => selectCenter(center)}
                >
                  {t("selectCentre")} →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProcurementCenters;
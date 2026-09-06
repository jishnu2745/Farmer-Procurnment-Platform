import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../style/SlotBooking.css";
import LanguageSelector from "../components/LanguageSelector";

function SlotBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const center = location.state?.center;

  const [slot, setSlot] = useState("");

  const slots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM"
  ];

  const bookSlot = () => {
    if (!slot) {
      alert(t("selectSlotError"));
      return;
    }

    navigate("/queue-status", {
      state: {
        center,
        slot
      }
    });
  };

  return (
    <div className="slot-container">

      <div className="slot-card">

        {/* ================= HEADER ================= */}

        <div className="slot-header">

          <div>
            <h2>{t("bookProcurementSlot")}</h2>

            <p>
              {t("bookProcurementSlotDescription")}
            </p>
          </div>

          <LanguageSelector />

        </div>


        {/* ================= CENTER INFORMATION ================= */}

        <div className="center-info">

          <h3>
            📍 {center?.name || t("procurementCenter")}
          </h3>

          <p>
            {t("distance")}:{" "}
            {center?.distance || t("notAvailable")}
          </p>

        </div>


        {/* ================= SLOT SELECTION ================= */}

        <div className="slot-section-title">

          <h3>{t("selectTimeSlot")}</h3>

          <p>
            {t("selectTimeSlotDescription")}
          </p>

        </div>


        <div className="slots-container">

          {slots.map((item) => (

            <button
              key={item}
              type="button"
              className={`slot-button ${
                slot === item ? "selected" : ""
              }`}
              onClick={() => setSlot(item)}
            >
              {item}
            </button>

          ))}

        </div>


        {/* ================= CONFIRM ================= */}

        <button
          type="button"
          className="confirm-button"
          onClick={bookSlot}
        >
          {t("confirmSlot")}
        </button>


        {/* ================= BACK ================= */}

        <button
          type="button"
          className="back-button"
          onClick={() => navigate(-1)}
        >
          {t("goBack")}
        </button>

      </div>

    </div>
  );
}

export default SlotBooking;
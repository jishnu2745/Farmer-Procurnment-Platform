
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/SlotBooking.css";

function SlotBooking() {

  const location = useLocation();
  const navigate = useNavigate();

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
      alert("Please select a slot");
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

        {/* Header */}
        <div className="slot-header">
          <h2>Book Procurement Slot</h2>
          <p>
            Select a convenient time to visit the procurement center.
          </p>
        </div>


        {/* Center Information */}
        <div className="center-info">

          <h3>
            📍 {center?.name || "Procurement Center"}
          </h3>

          <p>
            Distance: {center?.distance || "Not available"}
          </p>

        </div>


        {/* Slot Selection */}
        <div className="slot-section-title">

          <h3>Select Time Slot</h3>

          <p>
            Choose one available time slot.
          </p>

        </div>


        <div className="slots-container">

          {slots.map((item) => (

            <button
              key={item}
              className={`slot-button ${
                slot === item ? "selected" : ""
              }`}
              onClick={() => setSlot(item)}
            >
              {item}
            </button>

          ))}

        </div>


        {/* Confirm */}
        <button
          className="confirm-button"
          onClick={bookSlot}
        >
          Confirm Slot
        </button>


        {/* Back */}
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

      </div>

    </div>
  );
}

export default SlotBooking;


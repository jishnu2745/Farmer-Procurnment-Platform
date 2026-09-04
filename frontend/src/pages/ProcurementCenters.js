
import { useNavigate } from "react-router-dom";
import "../style/ProcurementCenters.css";

function ProcurementCenters() {

  const navigate = useNavigate();

  const centers = [
    {
      id: 1,
      name: "Government Procurement Centre",
      distance: "2.4 km",
      waiting: 35
    },
    {
      id: 2,
      name: "Agricultural Cooperative Centre",
      distance: "4.1 km",
      waiting: 12
    },
    {
      id: 3,
      name: "Primary Agricultural Centre",
      distance: "6.2 km",
      waiting: 8
    }
  ];

  const selectCenter = (center) => {

    navigate("/slot-booking", {
      state: { center }
    });

  };

  return (
    <div className="centers-container">

      <div className="centers-content">

        {/* Header */}
        <div className="centers-header">

          <div className="header-icon">
            📍
          </div>

          <div>
            <h1>Procurement Centres</h1>

            <p>
              Select a procurement centre near you.
            </p>
          </div>

        </div>


        {/* Location Status */}
        <div className="location-status">

          <span>📍</span>

          <div>
            <strong>Nearby Centres</strong>
            <p>Showing procurement centres closest to you.</p>
          </div>

        </div>


        {/* Centre List */}
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
                    👨‍🌾 {center.waiting} waiting
                  </span>

                </div>


                <button
                  className="select-center-button"
                  onClick={() => selectCenter(center)}
                >
                  Select Centre →
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

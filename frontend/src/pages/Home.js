import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Header */}
      <header className="home-header">
        <div className="logo-section">
          <span className="logo-icon">🌾</span>
          <div>
            <h2>FarmerConnect</h2>
            <p>Procurement Platform</p>
          </div>
        </div>

        <button
          className="profile-button"
          onClick={() => navigate("/farmer-details")}
        >
          👤
        </button>
      </header>


      {/* Main Content */}
      <main className="home-content">

        {/* Welcome Section */}
        <section className="welcome-section">
          <p className="welcome-small">Welcome back 👋</p>
          <h1>Farmer Dashboard</h1>
          <p>
            Manage your details, book procurement slots,
            and track your queue easily.
          </p>
        </section>


        {/* Main Actions */}
        <section className="actions-grid">

          {/* Farmer Details */}
          <div
            className="action-card farmer-card"
            onClick={() => navigate("/farmer-details")}
          >
            <div className="action-icon">👨‍🌾</div>

            <div className="action-content">
              <h3>Farmer Details</h3>
              <p>
                View and manage your personal and
                land details.
              </p>
            </div>

            <span className="arrow">→</span>
          </div>


          {/* Slot Booking */}
          <div
            className="action-card slot-card"
            onClick={() => navigate("/slot-booking")}
          >
            <div className="action-icon">🎫</div>

            <div className="action-content">
              <h3>Book a Slot</h3>
              <p>
                Choose a procurement center and
                book your slot.
              </p>
            </div>

            <span className="arrow">→</span>
          </div>


          {/* Queue Status */}
          <div
            className="action-card queue-card"
            onClick={() => navigate("/queue-status")}
          >
            <div className="action-icon">📊</div>

            <div className="action-content">
              <h3>Queue Status</h3>
              <p>
                Check your position and estimated
                waiting time.
              </p>
            </div>

            <span className="arrow">→</span>
          </div>


          {/* Procurement Centers */}
          <div
            className="action-card center-card"
            onClick={() => navigate("/centers")}
          >
            <div className="action-icon">📍</div>

            <div className="action-content">
              <h3>Procurement Centers</h3>
              <p>
                Find nearby procurement centers and
                their availability.
              </p>
            </div>

            <span className="arrow">→</span>
          </div>

        </section>


        {/* Current Booking */}
        <section className="booking-section">

          <div className="booking-header">
            <h2>Current Booking</h2>
            <span>🎫</span>
          </div>

          <div className="booking-empty">

            <div className="empty-icon">
              📅
            </div>

            <h3>No Active Booking</h3>

            <p>
              You haven't booked a procurement slot yet.
            </p>

            <button
              className="book-now-button"
              onClick={() => navigate("/slot-booking")}
            >
              Book a Slot
            </button>

          </div>

        </section>

      </main>


      {/* Bottom Navigation */}
      <nav className="bottom-navigation">

        <button className="nav-item active">
          <span>🏠</span>
          <p>Home</p>
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/slot-booking")}
        >
          <span>🎫</span>
          <p>Booking</p>
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/queue-status")}
        >
          <span>📊</span>
          <p>Queue</p>
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/centers")}
        >
          <span>📍</span>
          <p>Centers</p>
        </button>

      </nav>

    </div>
  );
}

export default Home;
function Dashboard() {

  return (
    <div className="container">

      <h1>Farmer Dashboard</h1>

      <div className="dashboard-card">

        <h3>KYC Status</h3>

        <p>✓ Verified</p>

      </div>

      <div className="dashboard-card">

        <h3>Current Procurement</h3>

        <p>Government Procurement Centre</p>

        <p>Slot: 10:00 AM - 11:00 AM</p>

        <p>Queue Number: 27</p>

      </div>

      <div className="dashboard-card">

        <h3>Payment</h3>

        <p>Payment Status: Pending</p>

      </div>

    </div>
  );
}

export default Dashboard;
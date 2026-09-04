import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";
import FarmerDetails from "./pages/FarmerDetails";
import LandDetails from "./pages/LandDetails";
import BankDetails from "./pages/BankDetails";
import KYCVerification from "./pages/KYCVerification";
import ProcurementCenters from "./pages/ProcurementCenters";
import SlotBooking from "./pages/SlotBooking";
import QueueStatus from "./pages/QueueStatus";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        
        <Route path="/verify-otp" element={<OTPVerification />} />

        <Route path="/farmer-details" element={<FarmerDetails />} />

        <Route path="/land-details" element={<LandDetails />} />

        <Route path="/bank-details" element={<BankDetails />} />

        <Route path="/kyc-verification" element={<KYCVerification />} />

        <Route
          path="/centers"
          element={<ProcurementCenters />}
        />
      <Route path="/home" element={<Home />} />
        <Route path="/slot-booking" element={<SlotBooking />} />

        <Route path="/queue-status" element={<QueueStatus />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
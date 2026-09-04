import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function KYCVerification() {

  const [status, setStatus] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {

    // Simulate backend verification

    const timer = setTimeout(() => {

      setStatus("KYC Verification Successful");

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="container">

      <h2>KYC Verification</h2>

      <p>{status}</p>

      {status === "KYC Verification Successful" && (

        <button
          onClick={() => navigate("/procurement-centers")}
        >
          Find Nearby Procurement Centres
        </button>

      )}

    </div>
  );
}

export default KYCVerification;
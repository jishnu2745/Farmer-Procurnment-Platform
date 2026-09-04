
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/FarmerDetails.css";

function FarmerDetails() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    // Personal Details
    name: "",
    fatherName: "",
    dateOfBirth: "",
    village: "",
    district: "",
    state: "",

    // Land Details
    surveyNumber: "",
    subDivisionNumber: "",
    landArea: "",
    landUnit: "Acres",
    ownershipType: "",
    crop: "",

    // Bank Details
    accountHolderName: "",
    bankName: "",
    branchName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required field validation
    if (
      !form.name ||
      !form.village ||
      !form.district ||
      !form.surveyNumber ||
      !form.landArea ||
      !form.accountHolderName ||
      !form.bankName ||
      !form.accountNumber ||
      !form.ifscCode
    ) {
      alert("Please fill all required fields");
      return;
    }

    // Check account numbers
    if (form.accountNumber !== form.confirmAccountNumber) {
      alert("Bank account numbers do not match");
      return;
    }

    // Later send the complete form to backend
    console.log("Farmer Registration:", form);

    navigate("/");
  };

  return (
    <div className="farmer-container">

      <div className="farmer-card">

        <h1>Farmer Registration</h1>

        <p className="subtitle">
          Please enter your details to complete registration.
        </p>


        <form onSubmit={handleSubmit}>

          {/* ================= PERSONAL DETAILS ================= */}

          <div className="form-section">

            <div className="section-title">
              <span>👨‍🌾</span>
              <div>
                <h2>Personal Details</h2>
                <p>Enter your basic information</p>
              </div>
            </div>


            <div className="form-grid">

              <div className="form-group">
                <label>
                  Farmer Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter farmer name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Father / Husband Name</label>

                <input
                  type="text"
                  name="fatherName"
                  placeholder="Enter father / husband name"
                  value={form.fatherName}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Date of Birth</label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>
                  Village <span>*</span>
                </label>

                <input
                  type="text"
                  name="village"
                  placeholder="Enter village"
                  value={form.village}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>
                  District <span>*</span>
                </label>

                <input
                  type="text"
                  name="district"
                  placeholder="Enter district"
                  value={form.district}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>State</label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={form.state}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>


          {/* ================= LAND DETAILS ================= */}

          <div className="form-section">

            <div className="section-title">
              <span>🌱</span>
              <div>
                <h2>Land Details</h2>
                <p>Enter your agricultural land information</p>
              </div>
            </div>


            <div className="form-grid">

              <div className="form-group">
                <label>
                  Survey Number <span>*</span>
                </label>

                <input
                  type="text"
                  name="surveyNumber"
                  placeholder="Enter survey number"
                  value={form.surveyNumber}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Sub-Division Number</label>

                <input
                  type="text"
                  name="subDivisionNumber"
                  placeholder="Eg: 12/1A"
                  value={form.subDivisionNumber}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>
                  Land Area <span>*</span>
                </label>

                <input
                  type="number"
                  name="landArea"
                  placeholder="Enter land area"
                  value={form.landArea}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Area Unit</label>

                <select
                  name="landUnit"
                  value={form.landUnit}
                  onChange={handleChange}
                >
                  <option value="Acres">Acres</option>
                  <option value="Hectares">Hectares</option>
                </select>
              </div>


              <div className="form-group">
                <label>Ownership Type</label>

                <select
                  name="ownershipType"
                  value={form.ownershipType}
                  onChange={handleChange}
                >
                  <option value="">Select ownership</option>
                  <option value="Own">Own Land</option>
                  <option value="Lease">Leased Land</option>
                  <option value="Joint">Joint Ownership</option>
                </select>
              </div>


              <div className="form-group">
                <label>Current Crop</label>

                <input
                  type="text"
                  name="crop"
                  placeholder="Eg: Paddy"
                  value={form.crop}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>


          {/* ================= BANK DETAILS ================= */}

          <div className="form-section">

            <div className="section-title">
              <span>🏦</span>
              <div>
                <h2>Bank Details</h2>
                <p>Enter the account used for procurement payments</p>
              </div>
            </div>


            <div className="form-grid">

              <div className="form-group">
                <label>
                  Account Holder Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="accountHolderName"
                  placeholder="Enter account holder name"
                  value={form.accountHolderName}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>
                  Bank Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="bankName"
                  placeholder="Enter bank name"
                  value={form.bankName}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Branch Name</label>

                <input
                  type="text"
                  name="branchName"
                  placeholder="Enter branch name"
                  value={form.branchName}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>
                  IFSC Code <span>*</span>
                </label>

                <input
                  type="text"
                  name="ifscCode"
                  placeholder="Eg: SBIN0001234"
                  value={form.ifscCode}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>
                  Account Number <span>*</span>
                </label>

                <input
                  type="password"
                  name="accountNumber"
                  placeholder="Enter account number"
                  value={form.accountNumber}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>
                  Confirm Account Number <span>*</span>
                </label>

                <input
                  type="password"
                  name="confirmAccountNumber"
                  placeholder="Re-enter account number"
                  value={form.confirmAccountNumber}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>


          {/* ================= SUBMIT ================= */}

          <div className="button-section">

            <button
              type="button"
              className="back-button"
              onClick={() => navigate(-1)}
            >
              Back
            </button>

            <button
              type="submit"
              className="continue-button"
            >
              Complete Registration →
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default FarmerDetails;


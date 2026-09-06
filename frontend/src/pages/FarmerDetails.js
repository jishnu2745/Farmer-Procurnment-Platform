import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../style/FarmerDetails.css";
import LanguageSelector from "../components/LanguageSelector";

function FarmerDetails() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      !form.confirmAccountNumber ||
      !form.ifscCode
    ) {
      alert(t("fillRequiredFields"));
      return;
    }

    // Check account numbers
    if (form.accountNumber !== form.confirmAccountNumber) {
      alert(t("accountNumbersMismatch"));
      return;
    }

    // Later send the complete form to backend
    console.log("Farmer Registration:", form);

    navigate("/");
  };

  return (
    <div className="farmer-container">

      <div className="farmer-card">

        {/* ================= HEADER ================= */}

        <div className="farmer-header">

          <div>
            <h1>{t("farmerRegistration")}</h1>

            <p className="subtitle">
              {t("registrationSubtitle")}
            </p>
          </div>

          <LanguageSelector />

        </div>


        <form onSubmit={handleSubmit}>

          {/* ================= PERSONAL DETAILS ================= */}

          <div className="form-section">

            <div className="section-title">

              <span>👨‍🌾</span>

              <div>
                <h2>{t("personalDetails")}</h2>

                <p>
                  {t("personalDetailsDescription")}
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* Farmer Name */}

              <div className="form-group">

                <label>
                  {t("farmerName")} <span>*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder={t("farmerNamePlaceholder")}
                  value={form.name}
                  onChange={handleChange}
                />

              </div>


              {/* Father / Husband Name */}

              <div className="form-group">

                <label>
                  {t("fatherHusbandName")}
                </label>

                <input
                  type="text"
                  name="fatherName"
                  placeholder={t("fatherHusbandPlaceholder")}
                  value={form.fatherName}
                  onChange={handleChange}
                />

              </div>


              {/* Date of Birth */}

              <div className="form-group">

                <label>
                  {t("dateOfBirth")}
                </label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                />

              </div>


              {/* Village */}

              <div className="form-group">

                <label>
                  {t("village")} <span>*</span>
                </label>

                <input
                  type="text"
                  name="village"
                  placeholder={t("villagePlaceholder")}
                  value={form.village}
                  onChange={handleChange}
                />

              </div>


              {/* District */}

              <div className="form-group">

                <label>
                  {t("district")} <span>*</span>
                </label>

                <input
                  type="text"
                  name="district"
                  placeholder={t("districtPlaceholder")}
                  value={form.district}
                  onChange={handleChange}
                />

              </div>


              {/* State */}

              <div className="form-group">

                <label>
                  {t("state")}
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder={t("statePlaceholder")}
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

                <h2>{t("landDetails")}</h2>

                <p>
                  {t("landDetailsDescription")}
                </p>

              </div>

            </div>


            <div className="form-grid">

              {/* Survey Number */}

              <div className="form-group">

                <label>
                  {t("surveyNumber")} <span>*</span>
                </label>

                <input
                  type="text"
                  name="surveyNumber"
                  placeholder={t("surveyNumberPlaceholder")}
                  value={form.surveyNumber}
                  onChange={handleChange}
                />

              </div>


              {/* Sub Division */}

              <div className="form-group">

                <label>
                  {t("subDivisionNumber")}
                </label>

                <input
                  type="text"
                  name="subDivisionNumber"
                  placeholder={t("subDivisionPlaceholder")}
                  value={form.subDivisionNumber}
                  onChange={handleChange}
                />

              </div>


              {/* Land Area */}

              <div className="form-group">

                <label>
                  {t("landArea")} <span>*</span>
                </label>

                <input
                  type="number"
                  name="landArea"
                  placeholder={t("landAreaPlaceholder")}
                  value={form.landArea}
                  onChange={handleChange}
                />

              </div>


              {/* Area Unit */}

              <div className="form-group">

                <label>
                  {t("areaUnit")}
                </label>

                <select
                  name="landUnit"
                  value={form.landUnit}
                  onChange={handleChange}
                >

                  <option value="Acres">
                    {t("acres")}
                  </option>

                  <option value="Hectares">
                    {t("hectares")}
                  </option>

                </select>

              </div>


              {/* Ownership Type */}

              <div className="form-group">

                <label>
                  {t("ownershipType")}
                </label>

                <select
                  name="ownershipType"
                  value={form.ownershipType}
                  onChange={handleChange}
                >

                  <option value="">
                    {t("selectOwnership")}
                  </option>

                  <option value="Own">
                    {t("ownLand")}
                  </option>

                  <option value="Lease">
                    {t("leasedLand")}
                  </option>

                  <option value="Joint">
                    {t("jointOwnership")}
                  </option>

                </select>

              </div>


              {/* Current Crop */}

              <div className="form-group">

                <label>
                  {t("currentCrop")}
                </label>

                <input
                  type="text"
                  name="crop"
                  placeholder={t("cropPlaceholder")}
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

                <h2>{t("bankDetails")}</h2>

                <p>
                  {t("bankDetailsDescription")}
                </p>

              </div>

            </div>


            <div className="form-grid">

              {/* Account Holder Name */}

              <div className="form-group">

                <label>
                  {t("accountHolderName")} <span>*</span>
                </label>

                <input
                  type="text"
                  name="accountHolderName"
                  placeholder={t("accountHolderPlaceholder")}
                  value={form.accountHolderName}
                  onChange={handleChange}
                />

              </div>


              {/* Bank Name */}

              <div className="form-group">

                <label>
                  {t("bankName")} <span>*</span>
                </label>

                <input
                  type="text"
                  name="bankName"
                  placeholder={t("bankNamePlaceholder")}
                  value={form.bankName}
                  onChange={handleChange}
                />

              </div>


              {/* Branch Name */}

              <div className="form-group">

                <label>
                  {t("branchName")}
                </label>

                <input
                  type="text"
                  name="branchName"
                  placeholder={t("branchNamePlaceholder")}
                  value={form.branchName}
                  onChange={handleChange}
                />

              </div>


              {/* IFSC Code */}

              <div className="form-group">

                <label>
                  {t("ifscCode")} <span>*</span>
                </label>

                <input
                  type="text"
                  name="ifscCode"
                  placeholder={t("ifscPlaceholder")}
                  value={form.ifscCode}
                  onChange={handleChange}
                />

              </div>


              {/* Account Number */}

              <div className="form-group">

                <label>
                  {t("accountNumber")} <span>*</span>
                </label>

                <input
                  type="password"
                  name="accountNumber"
                  placeholder={t("accountNumberPlaceholder")}
                  value={form.accountNumber}
                  onChange={handleChange}
                />

              </div>


              {/* Confirm Account Number */}

              <div className="form-group">

                <label>
                  {t("confirmAccountNumber")} <span>*</span>
                </label>

                <input
                  type="password"
                  name="confirmAccountNumber"
                  placeholder={t("confirmAccountPlaceholder")}
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
              {t("back")}
            </button>


            <button
              type="submit"
              className="continue-button"
            >
              {t("completeRegistration")} →
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default FarmerDetails;
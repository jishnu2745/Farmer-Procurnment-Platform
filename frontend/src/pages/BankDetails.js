import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BankDetails() {

  const navigate = useNavigate();

  const [bank, setBank] = useState({
    accountNumber: "",
    ifsc: "",
    bankName: "",
    accountHolder: ""
  });

  const handleChange = (e) => {

    setBank({
      ...bank,
      [e.target.name]: e.target.value
    });

  };

  const submit = () => {

    if (
      !bank.accountNumber ||
      !bank.ifsc ||
      !bank.bankName
    ) {
      alert("Please complete bank details");
      return;
    }

    navigate("/kyc-verification");

  };

  return (
    <div className="container">

      <h2>Bank Details</h2>

      <input
        name="accountHolder"
        placeholder="Account Holder Name"
        value={bank.accountHolder}
        onChange={handleChange}
      />

      <input
        type="password"
        name="accountNumber"
        placeholder="Bank Account Number"
        value={bank.accountNumber}
        onChange={handleChange}
      />

      <input
        name="ifsc"
        placeholder="IFSC Code"
        value={bank.ifsc}
        onChange={handleChange}
      />

      <input
        name="bankName"
        placeholder="Bank Name"
        value={bank.bankName}
        onChange={handleChange}
      />

      <button onClick={submit}>
        Submit for Verification
      </button>

    </div>
  );
}

export default BankDetails;
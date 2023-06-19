import React, { useState } from "react";
import "./Verify.css";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Verify = () => {
  const { isVarified, loading, error, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyClick = (e) => {
    e.preventDefault();
    dispatch(verify(otp));
  };

  const godashboard = (e) => {
    Navigate("/user_dashboard");
  };

  // useEffect(() => {
  //   if (isVarified) {
  //     window.location.reload(); // Refresh the page
  //     Navigate("/user_dashboard"); // Redirect to the user dashboard
  //   }
  // }, [isVarified, Navigate]);


  return (
    <div className="otp-container">
      <h1>OTP Verification</h1>
      <input
        type="number"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOtpChange}
      />
      <button onClick={handleVerifyClick}>Verify</button>
      {user && user.verified && (
        <button onClick={godashboard}>Dashboard</button>
      )}
    </div>
  );
};

export default Verify;

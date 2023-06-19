import React from "react";
import "./ResetPass.css";
import "../UserDashboard.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {resetPassword } from "../../actions/profile";
const ResetPass = () => {
  const [password, setPassword] = useState("");

  const params = useParams();
  const navigate = useNavigate()

  const { loading, message, error } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/login");
    }
  }, [dispatch, error, message]);

  return (
    <>
      <section className="home-section">
        <div>
          <div className="container">
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form onSubmit={submitHandler}>
                  <div class="formbold-form-title">
                    <p class="">Reset Password</p>
                  </div>

                  <div class="formbold-mb-3">
                    <label for="newpassword" class="formbold-form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="address2"
                      class="formbold-form-input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" class="formbold-btn">
                    Change
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPass;

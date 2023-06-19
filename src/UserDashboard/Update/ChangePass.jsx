import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Update.css";
import "../UserDashboard.css";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../../actions/userAction";
import { Button } from "@material-ui/core";
import { toast } from "react-hot-toast";
import { changePassword } from "../../actions/profile";
const ChangePass = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(changePassword(oldPassword, newPassword));
    await dispatch(loadUser());
    navigate("/user_profile");
  };

  const { message, error } = useSelector((state) => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <>
      {windowWidth < 767 ? <Bottombar /> : <Sidebar />}

      <section className="home-section">
        <div>
          <div className="container">
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form onSubmit={submitHandler}>
                  <div class="formbold-form-title">
                    <p class="">Change Password</p>
                  </div>

                  <div class="formbold-mb-3">
                    <label for="oldpassword" class="formbold-form-label">
                      Old Password
                    </label>
                    <input
                      type="Password"
                      name="password"
                      id="address"
                      class="formbold-form-input"
                      onChange={e => setOldPassword(e.target.value)}
                    />
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
                      onChange={e => setNewPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" class="formbold-btn">Change</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePass;

import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import "../UserDashboard.css";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/profile";
import { loadUser } from "../../actions/userAction";
import {useNavigate} from "react-router-dom"
const UpdateProfile = () => {
  const {user} = useSelector((state)=> state.user);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address ? user.address : "");
  const [grade, setGrade] = useState(user.grade ? user.grade : "");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email , phone, address, grade));
    await dispatch(loadUser());
    navigate('/user_profile');
  };

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
                    <h2 class="">Update Profile</h2>
                  </div>

                  <div class="formbold-mb-3">
                    <label for="username" class="formbold-form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      id="address"
                      class="formbold-form-input"
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>

                  


                  <div class="formbold-input-flex">
                    <div>
                      <label for="email" class="formbold-form-label">
                        {" "}
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        class="formbold-form-input"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label for="phone" class="formbold-form-label">
                        {" "}
                        Phone number{" "}
                      </label>
                      <input
                        type="number"
                        id="phone"
                        value={phone}
                        class="formbold-form-input"
                        onChange={(e)=>setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="formbold-mb-3">
                    <label for="address" class="formbold-form-label">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      class="formbold-form-input"
                      onChange={(e)=>setAddress(e.target.value)}
                    />
                  </div>

                  <div class="formbold-mb-3">
                    <label for="grades" class="formbold-form-label">
                      Grades
                    </label>
                    <input
                      type="number"
                      value={grade}
                      id="address"
                      class="formbold-form-input"
                      onChange={(e)=>setGrade(e.target.value)}
                    />
                  </div>
                
                  
                  <button type="submit" class="formbold-btn">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProfile;

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import suresh from "../../assets/images/suresh.jpg"
// import "../UserDashboard.css";
import "./UserProfile.css"
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import './UserProfileCard.jsx';
import { useDispatch, useSelector } from "react-redux";
import UserProfileCard from "./UserProfileCard.jsx";
import { toast } from "react-hot-toast";
const UserProfile = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { loading, message, error } = useSelector(state => state.profile);
  console.log(error);
  console.log(message);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

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
           <UserProfileCard/>
            </div>
          </div>
      </section>
    </>
  );
};

export default UserProfile;

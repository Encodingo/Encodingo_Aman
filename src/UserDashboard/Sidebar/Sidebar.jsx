import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/logonewnew (1).svg";
import { logout } from "../../actions/userAction";
const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      return "bx-menu-alt-right";
    } else {
      return "bx-menu";
    }
  };

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""} nav__menu`}>
        <div className="logo-details">
          {/* <i className="bx bxl-c-plus-plus icon"></i> */}
          {/* <img src={logo} alt="logo" /> */}
          <div className="logo_name">Encodingo</div>
          <i
            className={`bx ${menuBtnChange()}`}
            id="btn"
            onClick={toggleSidebar}
          ></i>
        </div>
        <ul className="nav-list">
          {/* <li>
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li> */}
          <li>
            <a href="/user_dashboard">
              <i className="bx bx-book-open"></i>
              <span className="links_name">All Courses</span>
            </a>
            <span className="tooltip">All Courses</span>
          </li>
          <li>
            <Link to="/myCourses">
              <i className="bx bx-book"></i>
              <span className="links_name">My Courses</span>
            </Link>
            <span className="tooltip">My Courses</span>
          </li>

          <li>
            <Link to={"/book_session"}>
              <i className="bx bx-time"></i>
              <span className="links_name">Book Session</span>
            </Link>
            <span className="tooltip">Book Session</span>
          </li>

          <li>
            <Link to={"/user_profile"}>
              <i className="bx bx-user"></i>
              <span className="links_name">Profile</span>
            </Link>
            <span className="tooltip">Profile</span>
          </li>

          <li>
            <Link to={'/'}>
              <i class="bx bx-link-external visit-icon"></i>
              <span className="links_name">Explore</span>
            </Link>
            <span className="tooltip">Explore</span>
          </li>

          {
            user && user.role === "admin" ? (
            <li>
              <Link to={'/admin/dashboard'}>
                <i class="bx bx-link-external visit-icon"></i>
                <span className="links_name">Admin</span>
              </Link>
              <span className="tooltip">Dashboard</span>
            </li>
          ) : (
            <h2></h2>
          )}
          {/* <li>
            <a href="#">
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-folder"></i>
              <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">Files</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li> */}
          <li className="profile">
            <div className="profile-details">
              {/* <img src="profile.jpg" alt="profileImg" /> */}
              <div className="name_job">
                <div className="name">{user && user.name}</div>
                <div className="job">{user && user.role}</div>
              </div>
            </div>
            <i
              onClick={logoutHandler}
              className="bx bx-log-out"
              id="log_out"
            ></i>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

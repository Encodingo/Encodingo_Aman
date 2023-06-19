import React from "react";
import "./Bottombar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
import { useState } from "react";
const Bottombar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("all-courses");
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const AllCourseHandler = () => {
    navigate("/user_dashboard");
  };

  const MyCourseHandler = () => {
    navigate("/user_mycourse");
  };

  const BookSessionHandler = () => {
    navigate("/book_session");
  };

  const profileHandler = () => {
    navigate("/user_profile");
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to={"/"} className="nav__logo">
            Explore
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li onClick={AllCourseHandler} className="nav__item" >
                <a  className="nav__link">
                  <i className="bx bx-book-open nav__icon"></i>
                  {/* <i className='bx bx-home-alt nav__icon'></i> */}
                  <span className="nav__name">All Courses</span>
                </a>
              </li>
              <li onClick={MyCourseHandler} className="nav__item">
                <a  className="nav__link">
                  <i className="bx bx-book nav__icon"></i>
                  <span className="nav__name">My Courses</span>
                </a>
              </li>

              <li onClick={BookSessionHandler} className="nav__item">
                <a  className="nav__link">
                  <i className="bx bx-time nav__icon"></i>
                  <span className="nav__name">Book Session</span>
                </a>
              </li>

              <li onClick={profileHandler}  className="nav__item">
                <a className="nav__link">
                  <i className="bx bx-user nav__icon"></i>
                  <span className="nav__name">Profile</span>
                </a>
              </li>

              <li onClick={logoutHandler} className="nav__item">
                <Link href="#logout" className="nav__link">
                  <i className="bx bx-log-out nav__icon" id="log_out"></i>
                  <span  className="nav__name">
                    Logout
                  </span>
                </Link>
              </li>

              {/* <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="bx bx-briefcase-alt nav__icon"></i>
                  <span className="nav__name">Portfolio</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contactme" className="nav__link">
                  <i className="bx bx-message-square-detail nav__icon"></i>
                  <span className="nav__name">Contactme</span>
                </a>
              </li> */}
            </ul>
          </div>

          <img src="" alt="" className="nav__img" />
        </nav>
      </header>
    </>
  );
};

export default Bottombar;

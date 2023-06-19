import React from "react";
import Sidebar from "../Sidebar/Sidebar";

// import "../UserDashboard.css";
import "../../assets/css/style.css";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import BookSessionCard1 from "./BookSessionCard1"
import { useNavigate } from "react-router-dom";
import "./BookSession.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getAllTeachers } from "../../actions/teacher";
import Loader from "../../Components/Loader/Loader";

const BookSession = () => {
  const { loading, error, message, teachers } = useSelector(
    (state) => state.teacher
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  // const addToPlaylistHandler = async couseId => {
  //   await dispatch(addToPlaylist(couseId));
  //   dispatch(loadUser());
  // };

  const categories = [
    // "All",
    "Coding",
    "English",
  ];

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    dispatch(getAllTeachers(category, keyword));
  }, [dispatch, error, message, category, keyword]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const refresh = () => {
    window.location.reload();
    Navigate("/book_session");
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
        {/* <Topbar /> */}
        <div>
          <div className="container">
            {/* <!-- <p class="section-subtitle">Popular Courses</p> --> */}
            {/* <h2
              className="h2 section-title"
              style={{ color: "white", marginBottom: "5rem" }}>
              Book a Session
            </h2> */}
            {/* <!-- <p class="section-subtitle">Popular Courses</p> --> */}
            <h2
              className="h2 section-title"
              style={{ color: "white", marginBottom: "5rem" }}
            >
              All Teachers
            </h2>
            <div class="search-bar">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
            <button className="Button" onClick={refresh}>
              All
            </button>
            {categories.map((item, index) => (
              <button
                className="Button"
                key={index}
                onClick={() => setCategory(item)}
                minW={"60"}
              >
                {item}
              </button>
            ))}
            <ul className="grid-list">
              {loading ? (
                <Loader />
              ) : (
                <>
                  {teachers.length > 0 ? (
                    teachers.map((item) => (
                      <BookSessionCard1
                        key={item._id}
                        poster={item.poster}
                        name={item.name}
                        category={item.category}
                        link={item.link}
                        level={item.level}
                        bio={item.bio}
                        session={item.session}
                        rating={item.rating}
                        nos={item.nos}
                        loading={loading}
                      />
                    ))
                  ) : (
                    <h1>Teachers Not Found</h1>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookSession;

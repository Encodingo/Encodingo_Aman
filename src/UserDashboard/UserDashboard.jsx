import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import CourseCard from "../Components/CourseCard/CourseCard";
import course1 from "../assets/images/course-1.jpg";
import "./UserDashboard.css";
import Bottombar from "./Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../actions/course";
import { toast } from "react-hot-toast";
import { Button } from "@material-ui/core";
import Loader from "../Components/Loader/Loader";
import { getAllTeachers } from "../actions/teacher";
const UserDashboard = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
 
  const dispatch = useDispatch();

  // const addToPlaylistHandler = async couseId => {
  //   await dispatch(addToPlaylist(couseId));
  //   dispatch(loadUser());
  // };

  const categories = [
    // "All",
    "Coding",
    "English",
  ];

  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );

  const { teachers } = useSelector((state) => state.teacher);
  const {user}=useSelector((state)=>state.user);
  const myCourses=user.myCourses;
  const newcourses =courses.filter(item =>!myCourses.some(myCourse=>item._id.includes(myCourse)));
  console.log(newcourses);
      
    


  

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    dispatch(getAllCourses(category, keyword));
    dispatch(getAllTeachers());
  }, [category, keyword, dispatch, error, message]);

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

  return (
    <>
      {windowWidth < 767 ? <Bottombar /> : <Sidebar />}

      <section className="home-section">
        <div>
          <div className="container">
            {/* <!-- <p class="section-subtitle">Popular Courses</p> --> */}
            <h2
              className="h2 section-title"
              style={{ color: "white", marginBottom: "5rem" }}
            >
              All Courses
            </h2>
            <div class="search-bar">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
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
                  {newcourses.length > 0 ? (
                    newcourses.map((item) => (
                      <CourseCard
                        key={item._id}
                        poster={item.poster}
                        title={item.title}
                        category={item.category}
                        level={item.level}
                        // imageSrc={course1}
                        id={item._id}
                        duration={item.duration}
                        rating={item.rating}
                        users={item.users}
                        price={item.price}
                        details={item.details}
                        numOfVideos={item.numOfVideos}
                        loading={loading}
                      />
                    ))
                  ) : (
                    <h1>Course Not Found</h1>
                  )}
                </>
              )}
            </ul>

            {/* <button className="btn has-before" onClick={handleModal}>
              <Link to={"/courses"}>
                <span className="span">Book A Demo Session</span>
              </Link>
            </button> */}

            {/* <a href="/" className="btn has-before" onClick={handleModal}>
            <span className="span">Book A Demo Session</span>
          </a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;

//  import "./App.css";
// import { useEffect } from "react";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import "./assets/css/style.css";
// import './assets/js/script.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
  Navigate,
} from "react-router-dom";
// import { useSelector } from "react-redux";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
import ProtectedRouteverify from "./Components/Route/ProtectedRouteverify";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Components/Home/Home";
import Courses from "./Components/Course/Courses";
import About from "./Components/About/About";
import Bootcamp from "./Components/Bootcamp/Bootcamp";
import Blog from "./Components/Blog/Blog";
import BackToTop from "./Components/BackToTop/BackToTop";
// import Dashboard from "./Components/Dashboard/UserDash";
import { useEffect } from "react";
import { ProtectedRoute } from "protected-route-react";
import UserDashboard from "./UserDashboard/UserDashboard";
import Bottombar from "./UserDashboard/Bottombar/Bottombar";
import { loadUser } from "./actions/userAction";
import BookSession from "./UserDashboard/BookSession/BookSession";
import UserProfile from "./UserDashboard/UserProfile/UserProfile";
import ChangePass from "./UserDashboard/Update/ChangePass";
import UpdateProfile from "./UserDashboard/Update/UpdateProfile";
import { gettopcourses } from "./actions/course";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import CourseList from "./Components/Admin/CourseList";
import CreateCourse from "./Components/Admin/CreateCourse";
import UsersList from "./Components/Admin/UsersList";
import TeacherList from "./Components/Admin/TeacherList";
import CreateTeacher from "./Components/Admin/CreateTeacher";
import ResetPass from "./UserDashboard/Update/ResetPass";
import { gettopteachers } from "./actions/teacher";

import Loader from "./Components/Loader/Loader";
import Verify from "./Components/Verify/Verify";
import MyCourses from "./UserDashboard/MyCourses";
// import UserDash from "./Components/Dashboard/UserDash";

// import AuthContainer from "./Components/Auth/AuthContainer";

function App() {
  const { isVarified, isAuthenticated, user, message, error, loading } =
    useSelector((state) => state.user);
  // const Navigate = useNavigate();
  // const { courses } = useSelector(
  //   (state) => state.course
  // );

  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Header /> */}
          <BackToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bottom" element={<Bottombar />} />

            {/* <Route
              path="/user_dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            /> */}

            <Route
              exact
              path="/user_dashboard"
              element={
                <ProtectedRouteverify
                  isAuthenticated={isAuthenticated}
                  isVarified={user && user.verified}
                >
                  <UserDashboard />
                </ProtectedRouteverify>
              }
            />

           <Route
              exact
              path="/myCourses"
              element={
                <ProtectedRouteverify
                  isAuthenticated={isAuthenticated}
                  isVarified={user && user.verified}
                >
                  <MyCourses />
                </ProtectedRouteverify>
              }
            />

            <Route
              path="/book_session"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <BookSession />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/user_dashboard"
                >
                  <Home />
                </ProtectedRoute>
              }
            />
            {/* <Route
          path="/user_dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/user_dashboard"
            >
              <Home />
            </ProtectedRoute>
          }
        /> */}

            <Route
              exact
              path="/user_profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                  <UserProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/user_changepass"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePass />
                </ProtectedRoute>
              }
            />

            <Route
              path="/user_updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/verify"
                >
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/user_dashboard"
                >
                  <ResetPass />
                </ProtectedRoute>
              }
            />

            <Route
              path="/verify"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                  <Verify />
                </ProtectedRoute>
              }
            />
            {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
                 <Dashboard/>
            </ProtectedRoute>
          }
        /> */}

            {/* Admin  */}

            {/* <Route path="/admin/dashboard" element={<AdminDashboard/>}/> */}

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <CourseList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/createteacher"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <CreateTeacher />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <UsersList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/teachers"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <TeacherList />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* <Footer /> */}
          <Toaster
            toastOptions={{
              duration: 5000,
            }}
          />
        </>
      )}
    </Router>
  );
}

export default App;

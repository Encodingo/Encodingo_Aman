import React, { useEffect } from "react";
import Sidebar from "./AdminSidebar.js";
import "./Admindashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import AdminSidebar from "./AdminSidebar.js";
import { getAllCoursesAdmin, getAllTeachersAdmin, getAllUsers } from "../../actions/admin.js";
// import { getAdminProduct } from "../../actions/productAction";
// import { getAllOrders } from "../../actions/orderAction.js";
// import { getAllUsers } from "../../actions/userAction.js";
// import MetaData from "../layout/MetaData";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  

  const {courses,teachers, users } = useSelector((state) => state.admin);

  let Codingnum = 0;
  let Englishnum=0;
  courses &&
    courses.forEach((item) => {
      if (item.category === 'Coding') {
        Codingnum += 1;
      }
      else{
        Englishnum += 1;
      }
    });

  useEffect(() => {
    dispatch(getAllCoursesAdmin());
    dispatch(getAllTeachersAdmin());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  // orders &&
  //   orders.forEach((item) => {
  //     totalAmount += item.totalPrice;
  //   });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 1200],
      },
    ],
  };

  const doughnutState = {
    labels: ["Coding", "English"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [Codingnum,Englishnum],
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      {/* <MetaData title="Dashboard - Admin Panel" /> */}
      <AdminSidebar/>

      <div className="admin-dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="admin-dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{1200}
            </p>
          </div>
          <div className="admin-dashboardSummaryBox2">
            <Link to="/admin/courses">
              <p>Courses</p>
              <p>{courses && courses.length}</p>
            </Link>
            <Link to="/admin/teachers">
              <p>Teachers</p>
              <p>{teachers && teachers.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="admin-lineChart">
          <Line data={lineState} />
        </div>

        <div className="admin-doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

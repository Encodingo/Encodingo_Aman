import React from "react";
import "./Adminsidebar.css";
 import logo from "../../assets/images/logonewnew (1).svg";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <Link to="/">
        <img src={logo} alt="Encodingo" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Courses" className="custom-tree-item">
            <Link to="/admin/Courses">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} className="custom-subtree-item"/>
            </Link>

            <Link to="/admin/createcourse">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} className="custom-subtree-item"/>
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      {/* <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link> */}
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/createteacher">
        <p>
        <AddIcon />
          Add Teacher
        </p>
      </Link>
      <Link to="/admin/teachers">
        <p>
          <PeopleIcon /> Teachers
        </p>
      </Link>
      <a href="/user_dashboard">
        <p>
           Back
        </p>
      </a>
    </div>
  );
};

export default AdminSidebar;

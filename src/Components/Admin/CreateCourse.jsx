import React, { Fragment, useEffect, useState } from "react";
import "./CreateCourse.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AdminSidebar from "./AdminSidebar";
import { toast } from "react-hot-toast";
import { createCourse } from "../../actions/admin";
import {useNavigate} from "react-router-dom";

const CreateCourse = () => {

 const Navigate = useNavigate();

  const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');
  const [users, setUsers] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetail] = useState('');
  const [numOfVideos, setnumOfVideos] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');


  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.admin);

  const categories = [
    'Coding',
    'English'
  ];

  const l = [
    'Beginer',
    'Medium',
    'Advance'
  ];

  // const changeImageHandler = e => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);

  //   reader.onloadend = () => {
  //     setImagePrev(reader.result);
  //     setImage(file);
  //   };
  // };

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler =  e => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('category', category);
    myForm.append('level', level);
    myForm.append('details', details);
    myForm.append('duration', duration);
    myForm.append('users', users);
    myForm.append('rating', rating);
    myForm.append('price', price);
    myForm.append('file', image);
    myForm.append('numOfVideos',numOfVideos);
    dispatch(createCourse(myForm));
  };

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

  

  return (
    <Fragment>
      {/* <MetaData title="Create Product" /> */}
      <div className="admin-dashboard">
        <AdminSidebar/>
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <h1>Create Course</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Course Name"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              {/* <AttachMoneyIcon /> */}
              <input
                type="number"
                placeholder="Duration"
                required
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div>
              {/* <AttachMoneyIcon /> */}
              <input
                type="number"
                placeholder="Rating"
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div>
              {/* <AttachMoneyIcon /> */}
              <input
                type="number"
                placeholder="Users Enrolled"
                required
                value={users}
                onChange={(e) => setUsers(e.target.value)}
              />
            </div>

            <div>
              {/* <AttachMoneyIcon /> */}
              <input
                type="number"
                placeholder="Number of videos"
                required
                value={numOfVideos}
                onChange={(e) => setnumOfVideos(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Detail Link"
                value={details}
                onChange={(e) => setDetail(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>


            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setLevel(e.target.value)}>
                <option value="">Course Level</option>
                {l.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            {/* <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div> */}

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={changeImageHandler}
                multiple
              />
            </div>

            <div id="createProductFormImage">
            {imagePrev && (
              <img src={imagePrev} boxSize="64" objectFit={'contain'} />
            )}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateCourse;

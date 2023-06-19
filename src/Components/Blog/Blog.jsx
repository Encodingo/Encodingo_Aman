import React from "react";
import "../../assets/css/style.css";
import suresh from "../../assets/images/suresh.jpg";
// import manish from "../../assets/images/manish.jpg";
//  import shubham from "../../assets/images/shubham.jpg";
import blogshape from "../../assets/images/blog-shape.png";
import blogbg from "../../assets/images/blog-bg.svg";
import VideoSection from "../VideoSection/VideoSection";
import StateSection from "../StateSection/StateSection";
import BlogCard from "../BlogCard/BlogCard";
import Header from "../Header";
import Footer from "../Footer";

const Blog = () => {
  const sureshblog = {
    img: suresh,
    title: "Suresh Vidyarthi",
  };

  const shubhamblog = {
    img: suresh,
    title: "Shubham Raj",
  };

  const manishblog = {
    img: suresh,
    title: "Manish Mandan",
  };

  return (
    <>
      <Header />
      {/* <!--- /VIDEO--> */}

      <VideoSection />

      {/* <!--- /STATE--> */}

      <StateSection />

      {/* <!--- /BLOG--> */}

      <section
        className="section blog has-bg-image1"
        id="blog"
        aria-label="blog"
        style={{ backgroundImage: { blogbg }, marginTop: "-100px" }}>
        <div className="container">
          {/* <!-- <p class="section-subtitle">Our Top Educators</p> --> */}

          <h2 className="h2 section-title">Top 1% of educators</h2>
          {/* <p className="section-subtitle"></p> */}
          <ul className="grid-list">
            <BlogCard data={sureshblog} />
            <BlogCard data={shubhamblog} />
            <BlogCard data={manishblog} />
          </ul>
          <img
            src={blogshape}
            width="186"
            height="186"
            loading="lazy"
            alt=""
            className="shape blog-shape"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;

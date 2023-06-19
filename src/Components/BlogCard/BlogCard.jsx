import React from "react";
import "../../assets/css/style.css";
import { Button } from "@material-ui/core";

const BlogCard = ({ data }) => {
  return (
    <>
      <div className="blog-card">
        <figure
          className="card-banner img-holder has-after"
          style={{ width: "370", height: "370" }}>
          <img
            src={data.img}
            width="370"
            height="370"
            loading="lazy"
            alt="Become A Better Blogger: Content Planning"
            className="img-cover"
          />
        </figure>

        <div className="card-content">
          <a
            href="https://www.linkedin.com/in/suresh-vidyarthi-86aa65152/"
            target="_blank"
            class="card-btn"
            aria-label="read more">
            {/* <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon> */}
          </a>
          {/* <a href="/" class="card-subtitle">
            Software Engineer
          </a> */}

          <h3 className="h3">
            <a href="/" className="card-title">
              {data.title}
            </a>
          </h3>

          <ul class="card-meta-list">
            <li class="card-meta-item">
              {/* <ion-icon name="people-outline" aria-hidden="true"></ion-icon> */}

              <span class="span">1000+ Students</span>
            </li>

            <li class="card-meta-item">
              {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}

              <span class="span">2000+ Hours</span>
            </li>
          </ul>

          <p class="card-text">Software Engineer, Programmer, DSA Instructor</p>
          <div className="card-buttons">
            <Button variant="contained" color="secondary">
              Details
            </Button>
            <Button variant="contained" color="primary">
              Book
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

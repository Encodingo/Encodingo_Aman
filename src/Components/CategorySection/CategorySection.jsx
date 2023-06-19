import React from "react";
import "../../assets/css/style.css";
// import herobg from "../../assets/images/hero-bg.svg";
import feature1 from "../../assets/images/feature1.svg";
import feature2 from "../../assets/images/feature2.svg";
import feature3 from "../../assets/images/feature3.svg";
import feature4 from "../../assets/images/feature4.svg";
// import manish from "../../assets/images/manish.jpg";
// import shubham from "../../assets/images/shubham.jpg";
const CategorySection = () => {
  return (
    <>
      <section className="section category" aria-label="category">
        <div className="container">
          {/* <!-- <p class="section-subtitle">Categories</p> --> */}

          <h2 className="h2 section-title">
            Why <span className="span">Choose</span> Us?
          </h2>

          <p className="section-text"></p>

          <ul className="grid-list">
            <li>
              <div
                className="category-card category-card1 "
                style={{ backgroundColor: "/1AB79D" }}
              >
                <div className="card-icon">
                  <img
                    src={feature1}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Online Degree Programs"
                    className="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" className="card-title">
                    Quality Tutors
                  </a>
                </h3>

                <p className="card-text">
                  Experienced and qualified tutors who are knowledgeable in
                  their respective fields.
                </p>

                {/* <!-- <span class="card-badge">7 Courses</span> --> */}
              </div>
            </li>

            <li>
              <div
                className="category-card category-card2"
                style={{ backgroundColor: "/EE4962" }}
              >
                <div className="card-icon">
                  <img
                    src={feature2}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Non-Degree Programs"
                    className="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" className="card-title">
                    Personalized Learning
                  </a>
                </h3>

                <p className="card-text">
                  Personalized learning based on your individual needs and
                  learning style.
                </p>

                
              </div>
            </li>

            <li>
              <div
                className="category-card category-card3"
                style={{ backgroundColor: "/4461E4" }}
              >
                <div className="card-icon">
                  <img
                    src={feature3}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Off-Campus Programs"
                    className="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" className="card-title">
                    Flexibility
                  </a>
                </h3>

                <p className="card-text">
                  We offer flexible scheduling, so you can easily fit tutoring
                  sessions into your schedule.
                </p>

                {/* <!-- <span class="card-badge">8 Courses</span> --> */}
              </div>
            </li>

            <li>
              <div
                className="category-card category-card4"
                style={{ backgroundColor: "/F8B720" }}
              >
                <div className="card-icon">
                  <img
                    src={feature4}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Hybrid Distance Programs"
                    className="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" className="card-title">
                    Learning Resources
                  </a>
                </h3>

                <p className="card-text">
                  Additional learning resources such as study guides, practice
                  tests, and other materials.
                </p>

                {/* <!-- <span class="card-badge">8 Courses</span> --> */}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CategorySection;

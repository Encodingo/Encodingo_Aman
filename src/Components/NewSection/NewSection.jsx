import React from "react";
 import "../../assets/css/style.css";
import category1 from "../../assets/images/category-1.svg";
import category2 from "../../assets/images/category-2.svg";
import category3 from "../../assets/images/category-3.svg";
import category4 from "../../assets/images/category-4.svg";
// import manish from "../../assets/images/manish.jpg";
// import shubham from "../../assets/images/shubham.jpg";

const NewSection = () => {
  return (
    <>
      {/* <!-- new section start --> */}
      <section className="section category" aria-label="category">
        <div className="container">
          <ul className="grid-list">
            <li>
              {/* style={{ backgroundColor:'/1AB79D' }} */}
              <div className="category-card category-card1">
                <div className="card-icon">
                  <img
                    src={category1}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Online Degree Programs"
                    className="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" className="card-title">
                    Logic
                  </a>
                </h3>
              </div>
            </li>

            <li>
              {/* style={{ backgroundColor: '/EE4962' }} */}
              <div className="category-card category-card2">
                <div className="card-icon">
                  <img
                    src={category2}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Non-Degree Programs"
                    class="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" class="card-title">
                    Creative Thinking
                  </a>
                </h3>
              </div>
            </li>

            <li>
              {/* style={{ backgroundColor:'/4461E4' }} */}
              <div className="category-card category-card3">
                <div className="card-icon">
                  <img
                    src={category3}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Off-Campus Programs"
                    className="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" className="card-title">
                    Algorithmic Thinking
                  </a>
                </h3>
              </div>
            </li>

            <li>
              {/* style={{ backgroundColor:'/F8B720'}} */}
              <div className="category-card category-card4">
                <div className="card-icon">
                  <img
                    src={category4}
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Hybrid Distance Programs"
                    className="img"
                  />
                </div>

                <h3 className="h3">
                  <a href="/" className="card-title">
                    Structure
                  </a>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- new section end --> */}
    </>
  );
};

export default NewSection;

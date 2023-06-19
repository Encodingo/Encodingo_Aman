import React from "react";
 import "../../assets/css/style.css";

const StateSection = () => {
  return (
    <>
      <section className="section stats" aria-label="stats">
        <div className="container">
          <ul className="grid-list">
            <li>
              <div
                className="stats-card stats-card1 "
                style={{ color: "hsl(170, 75%, 41%)" }}
              >
                <h3 className="card-title">29.3k</h3>

                <p className="card-text">Student Enrolled</p>
              </div>
            </li>

            <li>
              <div
                className="stats-card stats-card2"
                style={{ color: "hsl(351, 83%, 61%)" }}
              >
                <h3 className="card-title">32.4K</h3>

                <p className="card-text">Class Completed</p>
              </div>
            </li>

            <li>
              <div
                className="stats-card stats-card3"
                style={{ color: "hsl(260, 100%, 67%)" }}
              >
                <h3 className="card-title">100%</h3>

                <p className="card-text">Satisfaction Rate</p>
              </div>
            </li>

            <li>
              <div
                className="stats-card stats-card4"
                style={{ color: "hsl(42, 94%, 55%)" }}
              >
                <h3 className="card-title">100+</h3>

                <p className="card-text">Top Instructors</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default StateSection;

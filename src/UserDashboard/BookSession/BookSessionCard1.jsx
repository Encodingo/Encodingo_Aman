import React from "react";
import "../../assets/css/style.css";
import { IonIcon } from "@ionic/react";
import { Rating } from "@material-ui/lab";
import course1 from "../../assets/images/course-1.jpg";
import { useNavigate } from "react-router-dom";
import {
  people,
  libraryOutline,
  starOutline,
  timeOutline,
} from "ionicons/icons";
import { Button } from "@material-ui/core";
import Loader from "../../Components/Loader/Loader";

const BookSessionCard1 = ({
  name,
  poster,
  category,
  link,
  bio,
  rating,
  nos,
  level,
  session,
  loading,
}) => {
  const Navigate = useNavigate();

  const detailshandler = () => {
    Navigate(bio);
  };

  
  const options = {
    value: rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <!--- /COURSE --> */}
          <div className="course-card">
            <figure
              className="card-banner img-holder"
              style={{ width: "370", height: "220" }}
            >
              <img
                src={poster.url}
                width="370"
                height="220"
                loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS"
                className="img-cover"
              />
            </figure>

            {/* <div className="abs-badge">
              <IonIcon icon={timeOutline} aria-hidden="true" />

              <span className="span">{duration} Weeks</span>
            </div> */}

            <div className="card-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <span className="badge">{level}</span>
                <span className="badge">{category}</span>
              </div>
              <h3 className="h3 card-title">{name}</h3>

              <div className="wrapper">
                <div className="rating-wrapper">
                  <Rating {...options} />
                </div>

                <p className="rating-text">({`${rating}+`} Rating out of 5)</p>
              </div>

              {/* <card className="price" value="6000">
                {price}
              </card> */}

              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <IonIcon icon={libraryOutline} aria-hidden="true" />

                  <span className="span">{session}+ Sessions</span>
                </li>

                <li className="card-meta-item">
                  <IonIcon icon={people} aria-hidden="true" />
                  <span className="span">{`${nos}+`} Students</span>
                </li>
              </ul>

              <div className="card-buttons">
                <Button
                  //   onClick={detailshandler}
                  variant="contained"
                  color="secondary"
                >
                  <a href={bio} target="_blank">
                    BIO
                  </a>
                </Button>
                <Button 
                variant="contained" 
                color="primary"
                >
                  <a href={link} target="_blank">Book</a>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookSessionCard1;

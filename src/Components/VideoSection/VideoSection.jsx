import React from "react";
 import "../../assets/css/style.css";
import videobg from "../../assets/images/video-bg.png";
import videobanner from "../../assets/images/video-banner.jpg";
import videoshape1 from "../../assets/images/video-shape-1.png";
import videoshape2 from "../../assets/images/video-shape-2.png";
// import manish from "../../assets/images/manish.jpg";
// import shubham from "../../assets/images/shubham.jpg";
import { IonIcon } from "@ionic/react";
import { play } from "ionicons/icons";

const VideoSection = () => {
  return (
    <>
      <section
        className="video has-bg-image"
        aria-label="video"
        style={{ backgroundImage: videobg }}
      >
        <div className="container">
          <div className="video-card">
            <div
              className="video-banner img-holder has-after"
              style={{ width: "", height: "" }}
            >
              <img
                src={videobanner}
                width="970"
                height="550"
                loading="lazy"
                alt="video banner"
                className="img-cover"
              />

              <button class="play-btn" aria-label="play video">
                <IonIcon icon={play} aria-hidden="true" />
              </button>
            </div>

            <img
              src={videoshape1}
              width="1089"
              height="605"
              loading="lazy"
              alt=""
              className="shape video-shape-1"
            />

            <img
              src={videoshape2}
              width="158"
              height="174"
              loading="lazy"
              alt=""
              className="shape video-shape-2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;

import React from "react";
// import "../../assets/css/style.css";
import "./BookSession.css";
import suresh from "../../assets/images/suresh.jpg";
import { IonIcon } from "@ionic/react";
import {
  people,
  libraryOutline,
  starOutline,
  timeOutline,
} from "ionicons/icons";
import { Button } from "@material-ui/core";

const BookSessionCard = ({ poster,name,category, bio, link, rating, experience, nos }) => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-hamburger-menu">
              <div className="profile-center"></div>
            </div>
            {/* <a href="mailto: s4shahzaib73@gmail.com" className="profile-mail">
                    <i className="far fa-envelope"></i>
                </a> */}
            <div className="profile-main">
              <div className="profile-image">
                <div className="profile-hover">
                  <i className="fas fa-camera fa-2x">
                  <img src={poster.url} alt="" />
                  </i>
                </div>
              </div>
              
              <h3 className="profile-name"> {name}</h3>
              <h3 className="profile-sub-name"> @ {category} </h3>
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-left">
              <div className="profile-about-container">
                <h3 className="profile-title"> About Me ! </h3>
                <p className="profile-text"> {bio} </p>
              </div>
              {/* <div className="icons-container">
                       
                        <a href="https://www.linkedin.com/in/shahzaib-fardeen/" target="_blank" className="profile-icon">
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/Shahzaibfardeen" target="_blank" className="profile-icon">
                            <i className="fab fa-github"></i>
                        </a>
                        
                        <a href="https://twitter.com/shahzaibfardeen" target="_blank" className="profile-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        
                        <a href="https://www.instagram.com/shahzaib_fardeen/" target="_blank" className="profile-icon">
                            <i className="fab fa-instagram"></i>    
                        </a>                      
                        
                        <a href="https://www.facebook.com/shahzaib.fardeen/" target="_blank" className="profile-icon">
                            <i className="fab fa-facebook"></i>
                        </a>
                        
                        <a href="https://hashnode.com/@Shahzaibfardeen" target="_blank" className="profile-icon">
                            <i className="fa fa-rss-square" aria-hidden="true"></i>
                        </a>
                        
                        <a href="https://www.polywork.com/shahzaibfardeen" target="_blank" className="profile-icon">
                            <i className="fa fa-braille"></i>
                        </a>
                        
                    </div> */}
              <div className="profile-buttons-wrap">
                <div className="profile-follow-wrap">
                  <a href={link} target="_blank" className="profile-follow">
                    {" "}
                    Book{" "}
                  </a>
                </div>
                {/* <div className="profile-share-wrap">
                  <a
                    href="https://github.com/Shahzaibfardeen/My_Profile_Card"
                    target="_blank"
                    className="profile-share"
                  >
                    {" "}
                    Details{" "}
                  </a>
                </div> */}
              </div>
            </div>

            <div className="profile-right">
              <div>
                <h3 className="profile-number"> {experience}+ </h3>
                <h3 className="profile-number-title"> Experience </h3>
              </div>
              <div>
                <h3 className="profile-number"> {rating}+ / 5</h3>
                <h3 className="profile-number-title"> Rating </h3>
              </div>
              <div>
                <h3 className="profile-number"> {nos}K </h3>
                <h3 className="profile-number-title"> Students taught </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookSessionCard;

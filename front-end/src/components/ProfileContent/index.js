import React from "react";
import CV from "../../images/cv-2.png";
import pdf from "../../files/cv.pdf";
import pic from "../../images/circle.png";
import "./index.css";
function ProfileContent() {
  return (
    <div className='profile-wrap'>
      <a href={pdf} className='pdf-con' target='_blank' rel='noreferrer'>
        <img className='cv' src={CV} alt='' />
      </a>
      <div className='pic-con'>
        <img className='me-pic' src={pic} alt='' />
      </div>
    </div>
  );
}

export default ProfileContent;

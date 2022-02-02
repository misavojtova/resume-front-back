import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navigation({ home, profile, github, linkedin, icon1, icon2, top }) {
  return (
    <div className={`navigation ${top ? "top" : "bottom"}`}>
      {top ? (
        <div className='icons-wrapper'>
          <Link to={home}>{icon1}</Link>

          <Link to={profile}>{icon2}</Link>
        </div>
      ) : (
        <div className='icons-wrapper'>
          <span>
            <a href={github} target='_blank' rel='noreferrer'>
              {icon1}
            </a>
          </span>
          <span>
            <a href={linkedin} target='_blank' rel='noreferrer'>
              {icon2}
            </a>
          </span>
        </div>
      )}
    </div>
  );
}

export default Navigation;

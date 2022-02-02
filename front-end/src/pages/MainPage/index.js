import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import "./index.css";

import FlipCards from "../../components/FlipCards.js/index.js";
import Navigation from "../../components/Navigation";
import ProfileContent from "../../components/ProfileContent";

function MainPage({ profile }) {
  return (
    <main className='app'>
      <section className='main-wrapper'>
        <Navigation
          top={true}
          home='/resume-2021'
          icon1={<AiFillHome />}
          profile='/profile-page'
          icon2={<CgProfile />}
        />

        <div className='flip-card-wrapper'>
          {profile ? <ProfileContent /> : <FlipCards />}
        </div>

        <Navigation
          github='https://github.com/misavojtova'
          icon1={<BsGithub />}
          linkedin='https://www.linkedin.com/in/michaela-vojtova-917782170/'
          icon2={<BsLinkedin />}
        />

        <p className='my-name'> Michaela Vojtova</p>
      </section>
    </main>
  );
}

export default MainPage;

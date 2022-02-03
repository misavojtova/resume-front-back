import React, { useRef } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import "./index.css";

import FlipCards from "../../components/FlipCards.js/index.js";
import Navigation from "../../components/Navigation";
import ProfileContent from "../../components/ProfileContent";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

function MainPage({ profile }) {
  const carousel = useRef(null);

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

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

        <div ref={carousel} className='flip-card-wrapper'>
          {profile ? <ProfileContent /> : <FlipCards />}
        </div>
        <div className='arrows'>
          <HiChevronDoubleLeft onClick={handleRightClick} />
          <HiChevronDoubleRight onClick={handleLeftClick} />
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

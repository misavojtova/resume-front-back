import React, { useRef, useState, useEffect } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import "./index.css";
import axios from "axios";

import FlipCards from "../../components/FlipCards.js/index.js";
import Navigation from "../../components/Navigation";
import ProfileContent from "../../components/ProfileContent";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

function MainPage({ profile }) {
  const carousel = useRef(null);
  const [flips, setFlips] = useState("");
  const [active, setActive] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const getProjects = async (method, id) => {
    try {
      if (method === "get") {
        const project = await axios.get("http://localhost:5000/api/projects");
        setFlips(project.data);
      } else if (method === "delete") {
        const deleted = await axios.delete(
          `http://localhost:5000/api/projects/${id}`
        );
        if (deleted.status === 200) getProjects("get");
      } else if (method === "asc" || method === "desc") {
        const project = await axios.get(
          `http://localhost:5000/api/projects/${method}`
        );
        setFlips(project.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects("get");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <div className='inner-wrap'>
          <div className='wrap-btns'>
            <button className='btn' onClick={() => setActive(true)}>
              Add Project
            </button>
            {flips && (
              <div className='asc-desc-btns'>
                <button className='btn' onClick={() => getProjects("asc")}>
                  Oldest
                </button>
                <button className='btn' onClick={() => getProjects("desc")}>
                  Latest
                </button>
              </div>
            )}
          </div>
          <div ref={carousel} className='flip-card-wrapper'>
            {profile ? (
              <ProfileContent />
            ) : (
              <FlipCards
                update={update}
                setUpdate={setUpdate}
                getProjects={getProjects}
                flips={flips}
                active={active}
                setActive={setActive}
              />
            )}
          </div>

          {!active && !update && (
            <div className='arrows'>
              <HiChevronDoubleLeft onClick={handleRightClick} />
              <HiChevronDoubleRight onClick={handleLeftClick} />
            </div>
          )}
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

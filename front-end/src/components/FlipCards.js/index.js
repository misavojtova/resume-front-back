import React, { useEffect, useState } from "react";
import project1 from "../../images/project1.png";
import nasa from "../../images/nasa.png";
import game from "../../images/game.png";
import adele from "../../images/adele.png";
import travel from "../../images/travel.png";
import axios from "axios";

import Flip from "../../components/Flip";
import "./index.css";
function FlipCards() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      const project = await axios.get("http://localhost:5000/api/projects");
      setResult(project.data);
    };
    getProjects();
  }, []);

  console.log(result);
  return (
    <>
      <Flip
        href='https://misavojtova.github.io/music-app-final/'
        photo={adele}
        github='https://github.com/misavojtova/music-app-final'
      >
        <p>
          Project <u>Music App</u> was built in 24 hours in collaboration with
          Junior Developers to take part in competition which was organized by
          Wild Code School Academy.
        </p>
      </Flip>
      <Flip
        href='https://misavojtova.github.io/project-nasa/'
        photo={nasa}
        github='https://github.com/misavojtova/project-nasa'
      >
        <p>
          Project <u>Nasa</u> was built by a group of Junior Developers for
          learning purposes. Fetching data from API, improving Html, Css,
          JavaScript and React.js.
        </p>
      </Flip>

      <Flip
        href='https://vaniatavares.github.io/Project1/'
        photo={project1}
        github='https://github.com/misavojtova/project1'
      >
        <p>
          Project <u>From Zero</u> was made in collaboration with Junior
          Developers in group of five for practising Html, Css, Git Bash and
          Github.
        </p>
      </Flip>

      <Flip
        photo={game}
        href='https://misavojtova.github.io/game-app/'
        github='https://github.com/misavojtova/game-app'
      >
        <p>
          Project <u>Game App</u> was one day project to strengthen my knowledge
          in React.js, fetching data from API, imporivng Html, Css, Javascript
          and workflow in Git Bash and Github.
        </p>
      </Flip>

      <Flip
        href='https://misavojtova.github.io/travel-git-recommendations/'
        photo={travel}
        github='https://github.com/misavojtova/travel-git-recommendations'
      >
        <p>
          Project <u>Travel Reccommendations</u> was one of my first projects
          that I coded. I was Experimenting in JavaScript, HTML and CSS to
          create mobile responsive desing.
        </p>
      </Flip>
      <Flip></Flip>
    </>
  );
}

export default FlipCards;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Flip from "../../components/Flip";
import "./index.css";
import FormUpdate from "../FormUpdate";

function FlipCards() {
  const [flips, setFlips] = useState("");
  const [active, setActive] = useState(false);

  const getProjects = async (method) => {
    try {
      if (method === "get") {
        const project = await axios.get("http://localhost:5000/api/projects");
        setFlips(project.data);
        console.log("getprojects");
      } else {
        const deleted = await axios.delete(
          "http://localhost:5000/api/projects"
        );
        console.log(deleted);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects("get");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log({ flips });
  return (
    <>
      {flips &&
        !active &&
        flips.map((flip) => {
          return (
            <Flip
              getProjects={getProjects}
              key={flip.id}
              href={flip.liveDemo}
              photo={flip.image}
              github={flip.githubRepo}
            >
              <p>{flip.description}</p>
            </Flip>
          );
        })}
      <button className='add-btn' onClick={() => setActive(true)}>
        Add Project
      </button>

      {active && <FormUpdate getProjects={getProjects} setActive={setActive} />}
    </>
  );
}

export default FlipCards;

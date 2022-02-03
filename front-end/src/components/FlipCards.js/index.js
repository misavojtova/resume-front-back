import React, { useEffect, useState } from "react";
import axios from "axios";
import Flip from "../../components/Flip";
import "./index.css";
import FormUpdate from "../FormUpdate";

function FlipCards() {
  const [flips, setFlips] = useState("");
  const [active, setActive] = useState(false);

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

  // let ar;
  // if (flips) {
  //   ar = flips.map((flip) => {
  //     return parseInt(flip.date.slice(0, 4));
  //   });
  // }

  // const oldest = () => ar.sort((a, b) => a - b);
  // const latest = () => ar.sort((a, b) => b - a);
  return (
    <>
      {flips &&
        !active &&
        flips.map((flip) => {
          return (
            <Flip
              getProjects={getProjects}
              key={flip.id}
              id={flip.id}
              href={flip.liveDemo}
              photo={flip.image}
              github={flip.githubRepo}
            >
              <p>{flip.description}</p>
            </Flip>
          );
        })}
      <div className='wrap-btns'>
        <button className='add-btn' onClick={() => setActive(true)}>
          Add Project
        </button>
        {flips && (
          <>
            <button onClick={() => getProjects("asc")}>Oldest</button>
            <button onClick={() => getProjects("desc")}>Latest</button>
          </>
        )}
      </div>

      {active && <FormUpdate getProjects={getProjects} setActive={setActive} />}
    </>
  );
}

export default FlipCards;

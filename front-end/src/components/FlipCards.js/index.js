import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Flip from "../../components/Flip";
import "./index.css";
import FormUpdate from "../FormUpdate";
import LoadingContext from "../../context/LoadingContext.js";
function FlipCards() {
  const [result, setResult] = useState("");

  const [active, setActive] = useState(false);
  const cotx = useContext(LoadingContext);

  const getProjects = async () => {
    try {
      cotx.setLoading(true);
      const project = await axios.get("http://localhost:5000/api/projects");
      setResult(project.data);
      console.log("getprojects");
    } catch (error) {
      console.log(error);
    } finally {
      cotx.setLoading(false);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  console.log("loading", cotx.loading);

  return (
    <>
      {result &&
        !active &&
        result.map((res, i) => {
          return (
            <Flip
              key={i}
              href={res.liveDemo}
              photo={res.image}
              github={res.githubRepo}
            >
              <p>{res.description}</p>
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

import React, { useState } from "react";

import Flip from "../../components/Flip";
import "./index.css";
import FormUpdate from "../FormUpdate";

function FlipCards({
  getProjects,
  flips,
  active,
  setActive,
  update,
  setUpdate,
}) {
  const [id, setId] = useState(false);

  return (
    <>
      {flips &&
        !active &&
        !update &&
        flips.map((flip) => {
          return (
            <Flip
              setId={setId}
              setUpdate={setUpdate}
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

      {(active || update) && (
        <FormUpdate
          id={id}
          update={update}
          setUpdate={setUpdate}
          getProjects={getProjects}
          setActive={setActive}
          active={active}
        />
      )}
    </>
  );
}

export default FlipCards;

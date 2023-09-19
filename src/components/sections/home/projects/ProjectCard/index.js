import React, { useRef } from "react";
import useOnScreen from "../../../../../hooks/useOnScreen";
import Button from "../../../../primitives/buttons/Button";
import "./project-card.css";

/**
 * @type {React.FC<{index?:number, title?:string, type?:string, website?:string, source?:string, frontend?:string, backend?:string, description?:string, image?:string}>}
 */

const ProjectCard = ({
  index = 0,
  title,
  type,
  website,
  source,
  frontend,
  backend,
  description,
  image,
}) => {
  const card = useRef(null);
  const isCardOpen = useOnScreen(card, `-40px`);

  return (
    <div ref={card} className="my-card-container">
      <div
        className="my-card"
        style={
          isCardOpen
            ? { transform: "translateX(0)", opacity: "1" }
            : {
                transform: `translateX(${index % 2 === 0 ? "-" : ""}100%)`,
                opacity: "0",
              }
        }
      >
        <div>
          <img
            src={`/images/projects/${image}-m.jpg`}
            alt={title}
            className="my-card-img"
          />
        </div>
        <div className="my-card-content">
          <h3 className="h5">{title}</h3>
          <p className="h6">({type})</p>
          {/* <div className="my-card-desc"> */}
          <p className="p">{description}</p>
          {/* <div className="my-card-tech"> */}
          {frontend ? (
            <p>
              <span className="h6">Frontend:</span> {frontend}
            </p>
          ) : null}
          {backend ? (
            <p>
              <span className="h6">Backend:</span> {backend}
            </p>
          ) : null}
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="my-card-controllers">
          {website ? (
            <Button
              as="a"
              variant="primary"
              isFullWidth
              className="not-rounded"
              href={website}
              title="Visit Live Website"
              target="_blank"
            >
              Live Website
            </Button>
          ) : null}
          {source ? (
            <Button
              as="a"
              variant="primary"
              isFullWidth
              className="not-rounded"
              href={source}
              title="View Source Code on GitHub"
              target="_blank"
            >
              Source Code
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

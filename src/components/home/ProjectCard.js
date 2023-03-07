import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const ProjectCard = ({
  id,
  title,
  type,
  website,
  source,
  frontend,
  backend,
  description,
  image,
}) => {
  const card = useRef();
  const isCardOpen = useOnScreen(card, `-10px`);

  return (
    <div
      className="my-card"
      ref={card}
      style={
        isCardOpen
          ? { transform: "translateX(0)", opacity: "1" }
          : {
              transform: `translateX(${id % 2 === 0 ? "-" : ""}100%)`,
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
        <div className="my-card-desc">
          <p className="p">{description}</p>
          <div className="my-card-tech">
            {frontend ? (
              <p className="p">
                <span className="h6">Frontend:</span> {frontend}
              </p>
            ) : null}
            {backend ? (
              <p className="p">
                <span className="h6">Backend:</span> {backend}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex">
        {website ? (
          <a
            className="text-center btn width-100 bg-primary bg-50 h-bg-primary h-bg-30 txt-grey txt-90 h-txt-grey h-txt-90 dm-h-bg-primary dm-h-bg-70 dm-txt-grey dm-txt-10 dm-h-txt-grey dm-h-txt-10 not-rounded"
            href={website}
            title="Visit Live Website"
            target="_blank"
          >
            Live Website
          </a>
        ) : null}
        {source ? (
          <a
            className="text-center btn width-100 bg-primary bg-50 h-bg-primary h-bg-30 txt-grey txt-90 h-txt-grey h-txt-90 dm-h-bg-primary dm-h-bg-70 dm-txt-grey dm-txt-10 dm-h-txt-grey dm-h-txt-10 not-rounded"
            href={source}
            title="View Source Code on GitHub"
            target="_blank"
          >
            Source Code
          </a>
        ) : null}
      </div>
    </div>
  );
};
export default ProjectCard;

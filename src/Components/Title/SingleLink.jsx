import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import RotateEffect from "../Extras/RotateEffect";

let link;

const SingleLink = (whichLink) => {
  switch (Object.values(whichLink)[0]) {
    case "GitHub":
      link = {
        icon: faGithub,
        hoverColor: "#6CC644",
        to: "https://github.com/Splix123",
        target: "_blank",
      };
      break;

    case "LinkedIn":
      link = {
        icon: faLinkedin,
        hoverColor: "#0E76A8",
        to: "https://linkedin.com/in/moritzruehm",
        target: "_blank",
      };
      break;

    case "Mail":
      link = {
        icon: faEnvelope,
        hoverColor: "#FFA400",
        to: "mailto: Moritz.Ruehm@gmail.com",
        target: "_self",
      };
      break;

    default:
      break;
  }

  return (
    <a href={link.to} target={link.target}>
      <RotateEffect>
        <FontAwesomeIcon
          icon={link.icon}
          className={`h-14 w-14 transition-colors duration-300 hover:text-[${link.hoverColor}]`}
        />
      </RotateEffect>
    </a>
  );
};

export default SingleLink;

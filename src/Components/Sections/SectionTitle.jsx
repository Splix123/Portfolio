import { useSpring, animated } from "@react-spring/web";
import { useContext } from "react";
import { SectionHoverContext } from "./SectionHoverContext";

const SectionTitle = ({ title, alignRight }) => {
  const hover = useContext(SectionHoverContext);
  const paddingProperty = alignRight ? "paddingRight" : "paddingLeft";
  const sectionTitleStyle = useSpring({
    [paddingProperty]: hover.isHovered ? "30%" : "0%",
    config: { tension: 500, friction: 70 },
  });

  const handleMouseEnter = () => {
    hover.setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hover.setIsHovered(false);
  };

  return (
    <animated.span
      className={"text-5xl"}
      style={sectionTitleStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
    </animated.span>
  );
};

export default SectionTitle;

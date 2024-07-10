import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { SectionHoverContext } from "./SectionHoverContext";
import SectionTitle from "./SectionTitle";

const Section = ({ title, alignRight = false, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sectionDrawerStyle = useSpring({
    //height different for each container so mybe use usemeasure
    height: isHovered ? "260px" : "0",
    opacity: isHovered ? 1 : 0,
    overflow: "hidden",
  });

  return (
    <div
      className={`inline-flex flex-col ${
        alignRight ? "items-end" : "items-start"
      }`}
    >
      <SectionHoverContext.Provider value={{ isHovered, setIsHovered }}>
        <SectionTitle title={title} alignRight={alignRight} />
        <animated.div style={sectionDrawerStyle}>{children}</animated.div>
      </SectionHoverContext.Provider>
    </div>
  );
};

export default Section;

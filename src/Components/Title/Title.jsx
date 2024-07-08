import { useTrail, animated } from "@react-spring/web";
import { useState } from "react";

const Title = () => {
  const [isHovered, setIsHovered] = useState(false);
  const underlinesStyle = useTrail(2, {
    width: isHovered ? "100%" : "0%",
    config: { tension: 200, friction: 33, mass: 2 },
  });
  const content = ["Hi", "I'm Moritz"];

  return (
    <div className="inline-flex flex-col items-end">
      {underlinesStyle.map((underlinesStyle, index) => (
        <div
          className="inline-block text-9xl tracking-widest"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          key={index}
        >
          <span>{content[index]}</span>
          <animated.div
            className={"-bottom-1 h-1 bg-white"}
            style={underlinesStyle}
          />
        </div>
      ))}
    </div>
  );
};
export default Title;

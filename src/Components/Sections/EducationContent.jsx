import { useContext } from "react";
import { SectionHoverContext } from "./SectionHoverContext";

const EducationContent = () => {
  const hover = useContext(SectionHoverContext);

  const handleMouseEnter = () => {
    hover.setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hover.setIsHovered(false);
  };

  return (
    <div
      className="pt-5 text-right flex flex-col gap-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum,
        adipisci libero tempora tempore laboriosam totam nihil omnis eos
        consequuntur deserunt. Provident minus distinctio quidem doloremque
        similique veniam sequi voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum,
        adipisci libero tempora tempore laboriosam totam nihil omnis eos
        consequuntur deserunt. Provident minus distinctio quidem doloremque
        similique veniam sequi voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum,
        adipisci libero tempora tempore laboriosam totam nihil omnis eos
        consequuntur deserunt. Provident minus distinctio quidem doloremque
        similique veniam sequi voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum,
        adipisci libero tempora tempore laboriosam totam nihil omnis eos
        consequuntur deserunt. Provident minus distinctio quidem doloremque
        similique veniam sequi voluptatibus.
      </p>
    </div>
  );
};

export default EducationContent;

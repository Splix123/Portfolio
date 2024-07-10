import { createContext } from "react";

export const SectionHoverContext = createContext({
  isHovered: false,
  setIsHovered: () => {},
});

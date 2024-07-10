import BlobCursor from "./Components/BlobCursor";
import Links from "./Components/Title/Links";
import Sections from "./Components/Sections/Sections";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <>
      {/* <BlobCursor /> */}
      <div className="flex flex-col">
        {/* TODO: prozente anstatt hardcoded paddings */}
        <div className="pr-40 pt-52 flex flex-col items-end gap-y-7">
          <Title />
          <Links />
        </div>
        <Sections />
      </div>
    </>
  );
};

export default App;

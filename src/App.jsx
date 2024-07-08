import BlobCursor from "./Components/BlobCursor";
import Links from "./Components/Title/Links";
import Sections from "./Components/Sections/Sections";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <>
      {/* <BlobCursor /> */}
      <div>
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

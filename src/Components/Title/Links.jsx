import SingleLink from "./SingleLink";

const Links = () => {
  return (
    <div className="inline-flex gap-x-4 mr-4 justify-center align-middle">
      <SingleLink whichLink="GitHub" />
      <SingleLink whichLink="LinkedIn" />
      <SingleLink whichLink="Mail" />
    </div>
  );
};

export default Links;

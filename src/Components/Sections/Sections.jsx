import Section from "./Section";
import WorkExperienceContent from "./WorkExperienceContent.jsx";
import EducationContent from "./EducationContent.jsx";
import ReferencesContent from "./ReferencesContent.jsx";

const Sections = () => {
  return (
    // TODO: mt nochmal fixen wenn parallax effect drinne is
    <div className="flex flex-col gap-20 m-52">
      <Section title="Work Experience">
        <WorkExperienceContent />
      </Section>
      <Section title="Education" alignRight={true}>
        <EducationContent />
      </Section>
      <Section title="References">
        <ReferencesContent />
      </Section>
    </div>
  );
};

export default Sections;

import { useState } from "react";
import Card from "./components/Card"
import Timeline from "./components/Timeline"
import { ICardLists, gameLists, webappLists } from "./items/CardList";
import { languageLists, toolLists } from "./items/ImageList";

interface IButton {
  title: string;
  isActive: boolean;
  projects: ICardLists[];
}

function App() {

  const [projectButtonLists, setProjectButtonLists] = useState([
    {
      title: "Web",
      isActive: true,
      projects: webappLists
    },
    {
      title: "Game",
      isActive: false,
      projects: gameLists
    }
  ]);

  const [projectLists, setProjectLists] = useState(webappLists);

  const handleClickProject = (selectedButton: IButton) => {
    setProjectButtonLists(projectButtonLists.map((projectButton) => {
      if (projectButton.title !== selectedButton.title) {
        return {
          ...projectButton,
          isActive: false
        };
      } else {
        return {
          ...projectButton,
          isActive: true
        }
      }
    }));
    setProjectLists(selectedButton.projects);
  }

  return (
    <main className="font-medium text-dark-blue">
      <section className="min-h-64 flex">
        <div className="flex flex-col lg:flex-row justify-between items-center align-middle lg:w-7/12 m-auto">

          <div className="flex flex-col">
            <p>Hello world, I am</p>
            <p className="text-5xl font-bold mb-4">Napat Wareedee</p>
            <p>Dreams to become software engineer</p>
          </div>

          <img src="pat-profile.jpg" className="border-0 rounded-full w-36 h-36 object-cover" />

        </div>
      </section>

      <section className="w-4/5 lg:w-7/12 mx-auto my-8">
        <h2 className="font-bold text-2xl">Projects</h2>
        <div className="flex flex-row justify-center gap-4">
          {projectButtonLists.map((projectButton, idx) => {
            return (
              <button
                key={"project-type-btn-" + idx}
                className={`border-2 rounded-xl px-4 ${projectButton.isActive === true ? "text-slate-800 border-slate-700" : "text-slate-400 border-slate-300"}`}
                onClick={() => { handleClickProject(projectButton) }}
              >
                {projectButton.title}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-2">
          {projectLists.map((card, idx) => {
            return (
              <Card
                key={"project-card" + idx}
                title={card.title}
                description={card.description}
                bannerImage={card.bannerImage}
                webLink={card.webLink}
                sourceCode={card.sourceCode}
              />
            );
          })}
        </div>
      </section>

      <section className="w-4/5 lg:w-7/12 mx-auto my-8">
        <h2 className="font-bold text-2xl">Experiences</h2>
        <div className="flex flex-col mt-2">

          <div className="flex flex-row mb-2">
            <img className="w-[55px] h-[20px] mt-2 mr-2" src="ais-icon.png" alt="AIS icon" />
            <div>
              <h3 className="font-bold text-lg">Full-Stack Developer</h3>
              <p>Advanced Info Service Public Company Limited (AIS) · Internship</p>
              <p>Jun - Aug 2023 · 10 weeks</p>
            </div>
          </div>

          <div>
            <p className="font-normal">- cooperate in development team from <strong className=" font-semibold">AIS x ODDS</strong> to redesign and develop the device selling web application for AIS shop.</p>
            <p className="font-normal">- responsible to develop the user interface with Angular and restructure API with Express.</p>
          </div>

        </div>
      </section>

      <section className="w-4/5 lg:w-7/12 mx-auto lg:my-8">
        <h2 className="font-bold text-2xl">Awards & Certificates</h2>
        <div className="-my-2">
          <Timeline
            title="The Winner & Best Design in New Founder 2023 by Young Entrepreneur Assembly Hub (YEAH)"
            description="responsible as tech design in team members"
          />
          <Timeline
            title="Unity Certified User: Programmer (2022)"
            description="passed an exam of basic C# language in Unity by Unity official"
          />
        </div>
      </section>

      <section className="w-4/5 lg:w-7/12 mx-auto my-8">
        <h2 className="font-bold text-2xl mb-2">Skills</h2>
        <h3 className="font-semibold text-lg mb-2">Language</h3>
        <div className="grid grid-cols-3 lg:grid-cols-6 mx-auto lg:mx-0 gap-4 items-center w-1/2 mb-2">
          {languageLists.map((language, idx) => {
            return (
              <img src={language.src} alt={language.alt} key={"language-list-" + idx} />
            );
          })}
        </div>
        <h3 className="font-semibold text-lg mb-2">Tools</h3>
        <div
          className="grid grid-cols-3 items-center w-4/6 mx-auto mb-2 gap-4
          lg:grid-cols-11 lg:w-full"
        >
          {toolLists.map((tool, idx) => {
            return (
              <img src={tool.src} alt={tool.alt} key={"tool-list-" + idx} />
            );
          })}
        </div>
      </section>

      <footer className="flex flex-col gap-4 justify-center items-center bg-primary text-white mt-4 p-6">
        <p>Napat Wareedee</p>
        <div className="flex flex-row gap-2">
          <a href="https://www.linkedin.com/in/napat-wareedee-5b10a5254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-8 h-8">
            <img src="/icons/linkedin-icon.png" alt="linkedin-icon" />
          </a>
          <a href="https://github.com/Napat-Edu" target="_blank" className="w-8 h-8">
            <img src="/icons/github-icon.png" alt="github-icon" />
          </a>
          <a href="mailto:napat.wrd@gmail.com" className="w-8 h-8">
            <img src="/icons/email-icon.png" alt="email-icon" />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App

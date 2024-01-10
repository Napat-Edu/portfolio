import { useState } from "react";
import Card from "./components/Card"
import Timeline from "./components/Timeline"

interface ICardLists {
  title: string;
  description: string;
  bannerImage: string;
}

interface IImageLists {
  src: string;
  alt: string;
}

interface IButton {
  title: string;
  isActive: boolean;
  projects: ICardLists[];
}

function App() {

  const webappLists: ICardLists[] = [
    {
      title: "Compath (now)",
      description: "Web-app with resume classification for CPE students to recommend their career path",
      bannerImage: "/banners/compath-banner.png"
    },
    {
      title: "Haunted Story (2023)",
      description: "Web-app for associate with storytelling game in real life",
      bannerImage: "/banners/haunted-story-banner.png"
    },
    {
      title: "Overvoice (2022)",
      description: "Entertainment Dubbing App for blind person (Android)",
      bannerImage: "/banners/overvoice-banner.png"
    },
  ];

  const gameLists: ICardLists[] = [
    {
      title: "TyBunTee (2023)",
      description: "Educational game for teaching pointer in C language",
      bannerImage: "/banners/tybuntee-banner.png"
    },
    {
      title: "Run For Blood (2022)",
      description: "Endless runner game for blood donation campaign",
      bannerImage: "/banners/run-for-blood-banner.png"
    }
  ];

  const languageLists: IImageLists[] = [
    {
      src: "/icons/js-icon.png",
      alt: "js-icon"
    },
    {
      src: "/icons/ts-icon.png",
      alt: "ts-icon"
    },
    {
      src: "/icons/html-icon.png",
      alt: "html-icon"
    },
    {
      src: "/icons/css-icon.png",
      alt: "css-icon"
    },
    {
      src: "/icons/c-icon.png",
      alt: "c-icon"
    },
    {
      src: "/icons/c-sharp-icon.png",
      alt: "c-sharp-icon"
    },
  ];

  const toolLists: IImageLists[] = [
    {
      src: "/icons/react-icon.png",
      alt: "react-icon"
    },
    {
      src: "/icons/next-icon.png",
      alt: "next-icon"
    },
    {
      src: "/icons/angular-icon.png",
      alt: "angular-icon"
    },
    {
      src: "/icons/express-icon.png",
      alt: "express-icon"
    },
    {
      src: "/icons/nest-icon.png",
      alt: "nest-icon"
    },
    {
      src: "/icons/tailwind-icon.png",
      alt: "tailwind-icon"
    },
    {
      src: "/icons/gcp-icon.png",
      alt: "gcp-icon"
    },
    {
      src: "/icons/socket-icon.png",
      alt: "socket-icon"
    },
    {
      src: "/icons/mysql-icon.png",
      alt: "mysql-icon"
    },
    {
      src: "/icons/mongo-icon.png",
      alt: "mongo-icon"
    },
    {
      src: "/icons/unity-icon.png",
      alt: "unity-icon"
    },
  ];

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
    const x = projectButtonLists.map((projectButton) => {
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
    });
    console.log(x);

    setProjectButtonLists(x);
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

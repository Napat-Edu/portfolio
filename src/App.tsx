import Card from "./components/Card"
import Timeline from "./components/Timeline"

function App() {

  return (
    <main className="font-medium text-dark-blue">
      <section className="min-h-64 flex">
        <div className="flex flex-row justify-between items-center align-middle w-7/12 m-auto">

          <div className="flex flex-col">
            <p>Hello world, I am</p>
            <p className="text-5xl font-bold mb-4">Napat Wareedee</p>
            <p>Dreams to become software engineer</p>
          </div>

          <img src="pat-profile.jpg" className="border-0 rounded-full w-36 h-36 object-cover" />

        </div>
      </section>

      <section className="w-7/12 mx-auto my-8">
        <h2 className="font-bold text-2xl">Projects</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 my-2">
          <Card
            title="Compath (now)"
            description="Web-app with resume classification for CPE students to recommend their career path"
            bannerImage="compath-banner.png"
          />
          <Card
            title="Haunted Story (2023)"
            description="Web-app for associate with storytelling game in real life"
            bannerImage="haunted-story-banner.png"
          />
          <Card
            title="Overvoice (2022)"
            description="Entertainment Dubbing App for blind person (Android)"
            bannerImage="overvoice-banner.png"
          />

          <Card
            title="TyBunTee (2023)"
            description="Educational game for teaching pointer in C language"
            bannerImage="tybuntee-banner.png"
          />
          <Card
            title="Run For Blood (2022)"
            description="Endless runner game for blood donation campaign"
            bannerImage="overvoice-banner.png"
          />
        </div>
      </section>

      <section className="w-7/12 mx-auto my-8">
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
            <p className="font-normal">- cooperate in development team from AIS x ODDS to redesign and develop the device selling web application for AIS shop.</p>
            <p className="font-normal">- responsible to develop the user interface with Angular and restructure API with Express.</p>
          </div>

        </div>
      </section>

      <section className="w-7/12 mx-auto my-8">
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

      <section className="w-7/12 mx-auto my-8">
        <h2 className="font-bold text-2xl">Skills</h2>
      </section>

    </main>
  )
}

export default App

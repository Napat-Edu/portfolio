import Card from "./components/Card"

function App() {

  return (
    <main className="font-medium">
      <section className="min-h-64 flex">
        <div className="flex flex-row justify-between items-center align-middle w-7/12 m-auto">

          <div className="flex flex-col text-dark-blue">
            <p>Hello world, I am</p>
            <p className="text-5xl font-bold mb-4">Napat Wareedee</p>
            <p>Dreams to become software engineer</p>
          </div>

          <img src="pat-profile.jpg" className="border-0 rounded-full w-36 h-36 object-cover" />

        </div>
      </section>

      <section className="w-7/12 mx-auto my-4">
        <h2 className="font-semibold text-2xl">Projects</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 my-2">
          <Card
            title="Compath (now)"
            description="Web-app with resume classification for CPE students to recommend their career path"
            bannerImage="compath-banner.png"
          >
          </Card>
          <Card
            title="Haunted Story (2023)"
            description="Web-app for associate with storytelling game in real life"
            bannerImage="haunted-story-banner.png"
          >
          </Card>
          <Card
            title="Overvoice (2022)"
            description="Entertainment Dubbing App for blind person (Android)"
            bannerImage="overvoice-banner.png"
          >
          </Card>
          <Card
            title="TyBunTee (2023)"
            description="Educational game for teaching pointer in C language"
            bannerImage="tybuntee-banner.png"
          >
          </Card>
          <Card
            title="Run For Blood (2022)"
            description="Endless runner game for blood donation campaign"
            bannerImage="overvoice-banner.png"
          >
          </Card>
        </div>
      </section>

      <section className="w-7/12 mx-auto my-4">
        <h2 className="font-semibold text-2xl">Experiences</h2>
        <div className="flex flex-row mt-2">
          <img src="ais-icon.png" alt="AIS icon" className="w-[45px] h-[20px] mt-2 mr-2" />
          <div className="flex flex-col">
            <div className="mb-2">
              <h3>Full-Stack Developer</h3>
              <p>Advanced Info Service Public Company Limited (AIS) · Internship</p>
              <p>Jun - Aug 2023 · 10 weeks</p>
            </div>
            <p>- cooperate in development team from AIS x ODDS to redesign and develop the device selling web application for AIS shop.</p>
            <p>- responsible to develop the user interface with Angular and restructure the API with Express.</p>
          </div>
        </div>
      </section>

      <section className="w-7/12 mx-auto my-4">
        <h2 className="font-semibold text-2xl">Awards</h2>
      </section>

      <section className="w-7/12 mx-auto my-4">
        <h2 className="font-semibold text-2xl">Skills</h2>
      </section>

    </main>
  )
}

export default App

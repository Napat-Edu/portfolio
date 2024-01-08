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
        <div className="flex flex-row gap-8 my-2">
          <Card
            title="Compath"
            description="Web-app with resume classification for CPE students to recommend their career path"
            bannerImage="compath-banner.png"
          >
          </Card>
          <Card
            title="Overvoice"
            description="Entertainment Dubbing App for blind person (Android)"
            bannerImage="overvoice-banner.png"
          >
          </Card>
        </div>
        <div className="flex flex-row gap-8 my-4">
          <Card
            title="TyBunTee"
            description="Educational game for teaching pointer in C language"
            bannerImage="tybuntee-banner.png"
          >
          </Card>
          {/* <Card
            title="Run For Blood"
            description="Endless runner game for blood donation campaign"
            bannerImage="overvoice-banner.png"
          >
          </Card> */}
        </div>
      </section>

      <section className="w-7/12 mx-auto my-4">
        <h2 className="font-semibold text-2xl">Experiences & Awards</h2>
      </section>

      <section className="w-7/12 mx-auto my-4">
        <h2 className="font-semibold text-2xl">Skills</h2>
      </section>

    </main>
  )
}

export default App

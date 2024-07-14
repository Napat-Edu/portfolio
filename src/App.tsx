import Timeline from './components/Timeline';
import IntroSection from './sections/IntroSection';
import ProjectSection from './sections/ProjectSection';

function App() {

  return (
    <main className='py-12'>
      <IntroSection></IntroSection>
      <ProjectSection></ProjectSection>

      <section className="w-4/5 lg:w-7/12 mx-auto my-8">
        <h2 className="font-bold text-2xl flex justify-center lg:justify-normal">Experiences</h2>
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
        <h2 className="font-bold text-2xl flex justify-center lg:justify-normal">Awards & Certificates</h2>
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

      
    </main>
  );
}

export default App

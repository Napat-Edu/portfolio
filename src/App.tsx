import HeaderSection from './sections/HeaderSection';
import ProjectSection from './sections/ProjectSection';
import HistorySection from './sections/HistorySection';
import IntroSection from './sections/IntroSection';
import Footer from './sections/Footer';

function App() {

  return (
    <>
      <main className='py-12'>
        <HeaderSection></HeaderSection>
        <IntroSection></IntroSection>
        <ProjectSection></ProjectSection>
        <HistorySection></HistorySection>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App

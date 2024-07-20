import HeaderSection from './sections/HeaderSection';
import ProjectSection from './sections/ProjectSection';
import HistorySection from './sections/HistorySection';
import IntroSection from './sections/IntroSection';

function App() {

  return (
    <>
      <main className='py-12'>
        <HeaderSection></HeaderSection>
        <IntroSection></IntroSection>
        <ProjectSection></ProjectSection>
        <HistorySection></HistorySection>
      </main>
      <footer className='bg-primary h-56'></footer>
    </>
  );
}

export default App

import HeaderSection from './sections/IntroSection';
import ProjectSection from './sections/ProjectSection';
import HistorySection from './sections/HistorySection';

function App() {

  return (
    <>
      <main className='py-12'>
        <HeaderSection></HeaderSection>
        <ProjectSection></ProjectSection>
        <HistorySection></HistorySection>
      </main>
      <footer className='bg-primary h-32'></footer>
    </>
  );
}

export default App

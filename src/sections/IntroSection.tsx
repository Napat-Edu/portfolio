export default function IntroSection() {

    return (
        <section className="animate-fade-up">
            <h2 className='text-center'>Who Am I?</h2>
            <h3 className="text-center mb-4">I have two sides</h3>
            <div className="w-full h-fit px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 border-2 rounded-md divide-y-2 lg:divide-y-0 lg:divide-x-2 w-full h-full">
                    <div className="flex flex-col items-center justify-center bg-white lg:rounded-l-md py-4">
                        <img className="mx-auto w-12 h-auto" src="game-controller.png" alt="game controller icon" />
                        <h3>Gamer Side</h3>
                        <p>Of course I love games!</p>
                        <br />
                        <p>I'm a Kingdom Hearts and Final Fantasy fans!</p>
                        <img className="w-4/5 h-52 mt-1 rounded-md object-cover" src="playstation-demo.jpg" alt="my playstation game image" />
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white lg:rounded-r-md py-4">
                        <img className="mx-auto w-12 h-auto" src="books.png" alt="books icon" />
                        <h3>Edacator Side</h3>
                        <p>Of course I love to learn and teaching!</p>
                        <br />
                        <p>Try new things and share it is fun, right?</p>
                        <img className="w-4/5 h-52 mt-1 rounded-md object-cover object-bottom" src="teaching-demo.jpg" alt="my learn and teaching image" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-2 gap-1 px-4 lg:px-0">
                <p className="opacity-50">Curious about my deeper self to understand who I really am?</p>
                <a className="text-dark-blue text-sm lg:text-base font-medium opacity-70 hover:opacity-100" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here!</a>
            </div>
        </section>
    );
}
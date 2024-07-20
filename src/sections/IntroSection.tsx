export default function IntroSection() {

    return (
        <section className="animate-fade-up">
            <h2 className='text-center'>Who Am I?</h2>
            <h3 className="text-center mb-4">I have two sides</h3>
            <div className="w-full h-96 px-4 lg:px-0">
                <div className="grid grid-cols-2 border-2 rounded-md divide-x-2 w-full h-full">
                    <button className="bg-white rounded-r-none hover:bg-slate-100 duration-300">
                        <h3>Gamer Side</h3>
                    </button>
                    <button className="bg-white rounded-l-none hover:bg-slate-100 duration-300">
                        <h3>Edacator Side</h3>
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap mt-2 gap-1 px-4 lg:px-0">
                <p className="opacity-50">Curious about my deeper self to understand who I really am?</p>
                <a className="text-dark-blue text-sm lg:text-base font-medium opacity-70 hover:opacity-100" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here!</a>
            </div>
        </section>
    );
}
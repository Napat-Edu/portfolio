import ContactList from "../components/ContactList";

export default function HeaderSection() {

    const rickRoll = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    };

    return (
        <section className="my-2">
            <div className="flex flex-col items-center gap-8 lg:flex-row justify-between">

                <div className="flex flex-col items-center lg:items-start gap-2 animate-fade-right animate-once animate-ease-out">
                    <h3>Hello world, I am</h3>
                    <h1>Napat Wareedee</h1>
                    <h3>Dreams to become software engineer</h3>
                    <ContactList />
                </div>

                <div className="relative w-36 h-36">
                    <img
                        src="pat-profile.jpg"
                        onClick={rickRoll}
                        className={`
                            absolute z-10 border-0 rounded-full w-36 h-36 cursor-pointer object-cover 
                            animate-fade-left animate-once animate-ease-out
                        `}
                    />
                    <span className={`
                        absolute z-0 h-full w-full rounded-full bg-light-orange 
                        opacity-75 animate-ping animate-twice animate-delay-1000 animate-ease-out animate-fill-both`
                    }/>
                </div>

            </div>
        </section>
    );
}
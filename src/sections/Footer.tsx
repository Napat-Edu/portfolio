import ContactList from "../components/ContactList";

export default function Footer() {

    return (
        <footer className='bg-primary h-72 px-4 sm:px-20'>
            <div className='w-full h-full flex justify-between'>
                <div className='flex flex-col gap-2 my-auto'>
                    <h1 className='text-white'>That's Napat Wareedee!</h1>
                    <ContactList />
                </div>
                <img className='mt-auto w-auto h-4/5' src="pat-thumbs-up.png" alt="thumbs up" />
            </div>
        </footer>
    );
}
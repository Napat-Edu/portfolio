export default function HistorySection() {

    return (
        <section className="animate-fade-up">
            <h2 className='text-center'>What I have done</h2>

            <div className="flex flex-col divide-y-2 mt-2">
                <div className="flex flex-col lg:flex-row gap-4 py-4 mx-10 lg:mx-0">
                    <img className="w-80 h-80 rounded-md flex-shrink-0 flex-grow-0 mx-auto" src="ais-intern.jpg" alt="AIS intern history" />
                    <div className="flex flex-col gap-2">
                        <img className="w-14 h-auto mt-2 mr-2" src="ais-icon.png" alt="AIS icon" />
                        <h3>Full-Stack Developer</h3>
                        <p>Advanced Info Service Public Company Limited (AIS) · Internship</p>
                        <p>Jun - Aug 2023 · 10 weeks</p>
                        <ul className="list-disc list-outside ms-4">
                            <li>cooperate in development team from <strong>AIS x ODDS</strong> to redesign and develop the device selling web application for AIS shop.</li>
                            <li>responsible to develop the user interface with Angular and restructure API with Express.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-4 py-4 mx-10 lg:mx-0">
                    <img className="w-80 h-80 rounded-md flex-shrink-0 flex-grow-0 mx-auto" src="newfounder.jpg" alt="Newfounder winner history" />
                    <div className="flex flex-col gap-2">
                        <img className="w-14 h-auto mt-2 mr-2" src="newfounder-icon.png" alt="Newfounder icon" />
                        <h3>The Winner & Best Design in New Founder 2023 by Young Entrepreneur Assembly Hub (YEAH)</h3>
                        <p>Aug 2023</p>
                        <ul className="list-disc list-outside ms-4">
                            <li>responsible as tech design in team members.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}
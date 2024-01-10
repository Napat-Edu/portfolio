import { useState } from "react";
import Dialog from "./Dialog";

interface ICardProps {
    title: string;
    description: string;
    bannerImage: string;
}

function Card(props: ICardProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-72 rounded-lg overflow-hidden shadow-md flex flex-col justify-between mx-auto">
            <div>
                <img className="w-full h-44 object-cover object-center" src={props.bannerImage} alt="xxx" />
                <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">{props.description}</p>
                </div>
            </div>
            {isModalOpen ? <Dialog closeModal={closeModal} /> : <></>}
            <button className="bg-primary rounded-lg text-white px-4 py-2 mx-4 mt-2 mb-4" onClick={openModal}>More Details</button>
        </div>
    );
}

export default Card;
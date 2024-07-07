import { Children, cloneElement, isValidElement, ReactNode, ReactElement, useState } from 'react';
import Badge from './Badge';

interface ICard {
    title: string;
    description: string;
    image: string;
    tools: string[];
    cardIdx?: number;
    isSelected?: boolean;
    className?: string;
    onClick?: (index: number) => void;
}

export function Card(props: ICard) {

    const handleCardClick = (index: number) => {
        if (props.onClick && !props.isSelected) {
            props.onClick(index);
        }
    };

    return (
        <div
            className={`
                w-64 h-full border rounded-2xl overflow-hidden 
                shadow-sm hover:shadow transition-transform
                ${props.className || ''}
                ${!props.isSelected && 'opacity-50 shadow-none hover:shadow-none hover:outline-2 hover:border-slate-400 translate-y-3'}
                duration-300
            `}
            onClick={() => {
                handleCardClick(props.cardIdx!);
            }}
        >
            <img
                src={`${props.image}`}
                alt="project banner image"
                className={`w-full h-1/2 object-cover object-center`}
            />
            <div className='flex flex-col gap-1 p-4'>
                <h3>{props.title}</h3>
                <div className='flex flex-wrap gap-1'>
                    {
                        props.tools.map((tool) => {
                            return <Badge key={`${props.title}-${tool}`}>{tool}</Badge>
                        })
                    }
                </div>
                <p>{props.description}</p>
                <div className='flex gap-2 mt-4'>
                    <button className='min-w-fit px-2'>{`</>`}</button>
                    <button className='w-4/5'>Visit</button>
                </div>
            </div>
        </div>
    );
}

interface ICardContainer {
    children: ReactNode;
}

export function CardContainer(props: ICardContainer) {
    const cardCount = Children.count(props.children);
    const centerCard = Math.floor(cardCount / 2);

    const [focusCard, serFocusCard] = useState<number>(centerCard);
    const [translatePercentage, setTranslatePercentage] = useState<number>(0);

    const handleClick = (index: number) => {
        serFocusCard(index);
        calculateTranslation(index);
    };

    const calculateTranslation = (index: number) => {
        const diff = centerCard - index;
        const translatePercentage = (100 / cardCount) * diff;
        setTranslatePercentage(translatePercentage);
    };

    return (
        <div className='absolute left-0 right-0 w-screen overflow-x-hidden'>
            <div
                className={`
                flex justify-center gap-28 py-4 min-h-fit
                transition-transform duration-500
            `}
                style={{ transform: `translateX(${translatePercentage}%)` }}
            >
                {Children.map(props.children, (child, childIdx) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement<ICard>, {
                            onClick: handleClick,
                            cardIdx: childIdx,
                            isSelected: focusCard == childIdx
                        });
                    }
                    return child;
                })}
            </div>
        </div>
    );
}
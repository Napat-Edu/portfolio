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
    translate?: number;
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
                flex flex-col w-full h-full absolute border rounded-2xl overflow-hidden 
                shadow-sm hover:shadow transition-transform
                ${props.className || ''}
                ${!props.isSelected && 'opacity-50 shadow-none hover:shadow-none hover:outline-2 hover:border-slate-400 translate-y-3'}
                duration-500
            `}
            style={{
                transform: `translate(${props.translate || 0}%, ${props.isSelected ? '0px' : '2%'})`,
                translate: 'none',
                rotate: 'none',
                scale: 'none'
            }}
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
                <div className='flex flex-wrap mt-4'>
                    <Badge theme='dark'>Frontend code</Badge>
                    <Badge theme='dark'>Backend code</Badge>
                    <Badge theme='dark'>Download</Badge>
                </div>
                <div className='flex gap-2'>
                    <button className='basis-1/2'>Sample</button>
                    <button className='basis-1/2'>Visit</button>
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

    const handleClick = (index: number) => {
        serFocusCard(index);
        calculateTranslation(index);
    };

    const calculateTranslation = (newFocusIndex: number) => {
        const diffFromFocus = newFocusIndex - focusCard;
        return ((diffFromFocus) * 125);
    };

    return (
        <div
            className={`
                relative w-96 h-[32rem] max-w-full flex justify-center py-4
                transition-transform duration-500
            `}
        >
            {Children.map(props.children, (child, childIdx) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement<ICard>, {
                        onClick: handleClick,
                        cardIdx: childIdx,
                        isSelected: focusCard == childIdx,
                        translate: calculateTranslation(childIdx)
                    });
                }
                return child;
            })}
        </div>
    );
}
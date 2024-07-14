import { Children, cloneElement, isValidElement, ReactNode, ReactElement, useState } from 'react';
import Badge from './Badge';

interface ISource {
    label: string;
    url: string;
}

interface ICard {
    title: string;
    description: string;
    image: string;
    tools: string[];
    sources?: ISource[];
    url?: {
        sample?: string;
        visit?: string;
    };
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
                shadow-sm hover:shadow transition-transform hover:cursor-pointer
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
            <div className='flex flex-col h-full gap-1 p-4'>
                <h3>{props.title}</h3>
                <div className='flex flex-wrap gap-1'>
                    {
                        props.tools.map((tool) => {
                            return <Badge key={`${props.title}-${tool}`}>{tool}</Badge>
                        })
                    }
                </div>
                <p className='py-1'>{props.description}</p>
                <div className='flex flex-col h-full gap-1 justify-end'>
                    <div className='flex flex-wrap mt-4'>
                        {
                            props.sources?.map((source) => {
                                return (
                                    <Badge
                                        url={source.url}
                                        theme='dark'
                                        key={`${props.title}-${source.label}-badge`}
                                    >
                                        {source.label}
                                    </Badge>
                                );
                            })
                        }
                    </div>
                    <div className='flex gap-2'>
                        {props.url?.sample && <a className='bg-primary w-full text-center rounded-md px-4 py-1 text-white hover:opacity-80' href={props.url.sample} target='_blank'>Sample</a>}
                        {props.url?.visit && <a className='bg-primary w-full text-center rounded-md px-4 py-1 text-white hover:opacity-80' href={props.url.visit} target='_blank'>Visit</a>}
                    </div>
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
                relative w-96 h-[30rem] max-w-full flex justify-center py-4
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
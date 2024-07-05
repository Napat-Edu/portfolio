import { ReactNode } from "react";

interface IBadge {
    children?: ReactNode;
}

export default function Badge(props: IBadge) {

    return (
        <div className={`
            border-2 rounded-2xl w-fit px-2
            text-sm hover:bg-slate-100 
        `}>{props.children}</div>
    );
}
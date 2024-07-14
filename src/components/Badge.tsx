import { ReactNode } from "react";

type ThemeType = 'light' | 'dark';

interface IBadge {
    theme?: ThemeType;
    children?: ReactNode;
    url?: string;
}

export default function Badge(props: IBadge) {
    const handleTheme = () => {
        let themeStyle = '';
        if (props.theme == 'dark') {
            themeStyle = 'text-white bg-zinc-800 hover:bg-zinc-500';
        } else {
            themeStyle = 'bg-white hover:bg-slate-100 ';
        }
        return themeStyle;
    };

    return (
        <a href={props.url} target="_blank" className={`
            border-2 rounded-2xl w-fit px-2
            text-sm ${handleTheme()}
        `}>{props.children}</a>
    );
}
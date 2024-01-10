export interface ICardLists {
    title: string;
    description: string;
    bannerImage: string;
}

export const webappLists: ICardLists[] = [
    {
        title: "Compath (now)",
        description: "Web-app with resume classification for CPE students to recommend their career path",
        bannerImage: "/banners/compath-banner.png"
    },
    {
        title: "Haunted Story (2023)",
        description: "Web-app for associate with storytelling game in real life",
        bannerImage: "/banners/haunted-story-banner.png"
    },
    {
        title: "Overvoice (2022)",
        description: "Entertainment Dubbing App for blind person (Android)",
        bannerImage: "/banners/overvoice-banner.png"
    },
];

export const gameLists: ICardLists[] = [
    {
        title: "TyBunTee (2023)",
        description: "Educational game for teaching pointer in C language",
        bannerImage: "/banners/tybuntee-banner.png"
    },
    {
        title: "Run For Blood (2022)",
        description: "Endless runner game for blood donation campaign",
        bannerImage: "/banners/run-for-blood-banner.png"
    }
];
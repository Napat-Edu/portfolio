export interface ICardLists {
    title: string;
    description: string;
    bannerImage: string;

    sampleVideos?: any[];
    sourceCode?: string[];
    sourceFile?: string;
    webLink?: string;
}

export const webappLists: ICardLists[] = [
    {
        title: "Compath (now)",
        description: "Web-app with resume classification for CPE students to recommend their career path",
        bannerImage: "/banners/compath-banner.png",
        webLink: "https://compath-xwngxoqc2q-wl.a.run.app/",
        sourceCode: [
            "https://github.com/Napat-Edu/compath-client",
            "https://github.com/Napat-Edu/compath-server"
        ],
    },
    {
        title: "Haunted Story (2023)",
        description: "Web-app for associate with storytelling game in real life",
        bannerImage: "/banners/haunted-story-banner.png",
        webLink: "https://haunted-story.onrender.com/",
        sourceCode: [
            "https://github.com/Napat-Edu/haunted-story-client",
            "https://github.com/Napat-Edu/haunted-story-server"
        ],
    },
    {
        title: "Overvoice (2022)",
        description: "Entertainment Dubbing App for blind person (Android)",
        bannerImage: "/banners/overvoice-banner.png",
        sourceCode: [
            "https://github.com/Napat-Edu/Overvoice"
        ],
    },
];

export const gameLists: ICardLists[] = [
    {
        title: "TyBunTee (2023)",
        description: "Educational game for teaching pointer in C language",
        bannerImage: "/banners/tybuntee-banner.png",
        webLink: "https://omegy.itch.io/tybuntee",
        sourceCode: [
            "https://github.com/Napat-Edu/TyBunTee"
        ],
    },
    {
        title: "Run For Blood (2022)",
        description: "Endless runner game for blood donation campaign",
        bannerImage: "/banners/run-for-blood-banner.png"
    }
];
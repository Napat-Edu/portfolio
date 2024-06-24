export interface ICardLists {
    title: string;
    description: string;
    bannerImage: string;
    detail: string;

    sampleVideos?: any[];
    sourceCode?: string[];
    sourceFile?: string;
    webLink?: string;
}

export const webappLists: ICardLists[] = [
    {
        title: "Compath",
        description: "Web-app with resume classification for CPE students to recommend their career path",
        bannerImage: "/banners/compath-banner.png",
        webLink: "https://compath-cpe.web.app/",
        sourceCode: [
            "https://github.com/Napat-Edu/compath-client",
            "https://github.com/Napat-Edu/compath-server"
        ],
        detail: `
        Senior project <br>
        responsible as team lead and software engineer. <br>
        <p class="mt-2">
        - cooperate with designer in team members to create user interface with <strong>Nextjs</strong> <br>
        - create a server API with <strong>Nestjs</strong> <br>
        - collaborate with team members in training deep learning model with <strong>Python</strong> and <strong>Flask</strong> <br>
        - also build and deploy these service by <strong>Google Cloud Platform</strong> <br>
        </p>
        `
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
        detail: `
        Personal mini project <br>
        created to used in conjunction with haunted storytelling games in real-life <br>
        <p class="mt-2">
        - created by <strong>Vite+React</strong> with <strong>Material-UI</strong> as frontend tools <br>
        - created by <strong>Nestjs</strong> with <strong>SocketIO</strong> as backend tools <br>
        </p>
        `
    },
    {
        title: "Overvoice (2022)",
        description: "Entertainment Dubbing App for blind person (Android)",
        bannerImage: "/banners/overvoice-banner.png",
        sampleVideos: [
            "https://drive.google.com/file/d/1kD9iIN7HU8xrlSGVasvqvpk-DgfbQUZn/view?usp=sharing",
            "https://drive.google.com/file/d/1yMoQJ6kFo1yM1xyUySWiFA-1djRpd87m/view?usp=sharing",
            "https://drive.google.com/file/d/1qXS7VKug0fT0zrHwFe-5hEuw67CLXl76/view?usp=sharing"
        ],
        sourceCode: [
            "https://github.com/Napat-Edu/Overvoice"
        ],
        detail: `
        CPE327 Software Engineering project <br>
        responsible as team lead and software engineer. <br>
        <p class="mt-2">
        - create main application with <strong>Flutter</strong> <br>
        - using <strong>Firebase</strong> as backend service and storage <br>
        </p>
        <p class="mt-4 text-red-600">
        *Due to the time limit, we can support just an Android and we can't deploy to public because of some copyright content (We use this as Educational Purpose only)
        </p>
        `
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
        sampleVideos: [
            "https://drive.google.com/file/d/1Jd6zPyoHnYEF3SQIwgGGtDvsNyqIbyum/view?usp=sharing"
        ],
        sourceFile: "https://drive.google.com/file/d/10jbptWt-lumzH5b7GMA8lmxmZ9_MrbF2/view?usp=sharing",
        detail: `
        CPE467 Game Design project <br>
        responsible as team lead and developer. <br>
        <p class="mt-2">
        - create with <strong>Unity</strong> <br>
        </p>
        <p class="mt-4 text-red-600">
        *Windows only (.exe), because Windows PC can't export on Mac Version <br>
        *This project was not planned to be upload on WebGL at first, so the game might be broken at some point, if possible, we <strong>strongly reccommend to play on .exe version</strong><br>
        </p>
        `
    },
    {
        title: "Run For Blood (2022)",
        description: "Endless runner game for blood donation campaign",
        bannerImage: "/banners/run-for-blood-banner.png",
        sourceFile: "https://drive.google.com/file/d/1NOjlNEwj8x6AmSRV_-b37FHPwxTFy9fP/view?usp=drive_link",
        sampleVideos: [
            "https://drive.google.com/file/d/1m15T_d5Xgclc3LTbWG7Xu6CxSwxVFvCN/view?usp=sharing"
        ],
        detail: `
        Mini project (this project was created to participate in blood donation campaign) <br>
        responsible as team lead and developer. <br>
        <p class="mt-2">
        - create with <strong>Unity</strong> <br>
        </p>
        <p class="mt-4 text-red-600">
        *Windows only (.exe), because Windows PC can't export on Mac Version <br>
        *source files already deleted, so we can't provide WebGL version, my apologies here<br>
        </p>
        `
    }
];
import { Card, CardContainer } from '../components/Card';
export default function ProjectSection() {

    return (
        <section className='abosolute w-full min-h-fit flex flex-col py-8 justify-center items-center overflow-x-hidden animate-fade-up'>
            <h2 className='text-center'>Projects</h2>
            <CardContainer>
                <Card
                    title='Overvoice'
                    description='Entertainment Dubbing App for blind person (Android)'
                    image='/banners/overvoice-banner.png'
                    tools={['Flutter', 'Firebase']}
                    sources={[
                        { label: 'code', url: 'https://github.com/Napat-Edu/Overvoice' }
                    ]}
                    url={{
                        sample: 'https://drive.google.com/file/d/1kD9iIN7HU8xrlSGVasvqvpk-DgfbQUZn/view?usp=sharing'
                    }}
                />
                <Card
                    title='Haunted Story'
                    description='Web-app for associate with storytelling game in real life'
                    image='/banners/haunted-story-banner.png'
                    tools={['React', 'Material-UI', 'NestJs', 'SocketIO']}
                    sources={[
                        { label: 'frontend code', url: 'https://github.com/Napat-Edu/haunted-story-client' },
                        { label: 'backend code', url: 'https://github.com/Napat-Edu/haunted-story-server' }
                    ]}
                    url={{
                        visit: 'https://haunted-story.onrender.com/'
                    }}
                />
                <Card
                    title='Compath'
                    description='Web-app with resume classification for CPE students to recommend their career path'
                    image='/banners/compath-banner.png'
                    tools={['NextJs', 'shadcn/ui', 'NestJs', 'GCP']}
                    sources={[
                        { label: 'frontend code', url: 'https://github.com/Napat-Edu/compath-client' },
                        { label: 'backend code', url: 'https://github.com/Napat-Edu/compath-server' }
                    ]}
                    url={{
                        visit: 'https://compath-cpe.web.app/'
                    }}
                />
                <Card
                    title='TyBunTee'
                    description='Educational game for teaching pointer in C language'
                    image='/banners/tybuntee-banner.png'
                    sources={[
                        { label: 'code', url: 'https://github.com/Napat-Edu/TyBunTee' },
                        { label: 'download', url: 'https://drive.google.com/file/d/10jbptWt-lumzH5b7GMA8lmxmZ9_MrbF2/view?usp=sharing' }
                    ]}
                    tools={['Unity', 'C#']}
                    url={{
                        sample: 'https://drive.google.com/file/d/1Jd6zPyoHnYEF3SQIwgGGtDvsNyqIbyum/view?usp=sharing'
                    }}
                />
                <Card
                    title='Run For Blood'
                    description='Endless runner game for blood donation campaign'
                    image='/banners/run-for-blood-banner.png'
                    tools={['Unity', 'C#']}
                    sources={[
                        { label: 'download', url: 'https://drive.google.com/file/d/1NOjlNEwj8x6AmSRV_-b37FHPwxTFy9fP/view?usp=drive_link' }
                    ]}
                    url={{
                        sample: 'https://drive.google.com/file/d/1m15T_d5Xgclc3LTbWG7Xu6CxSwxVFvCN/view?usp=sharing'
                    }}
                />
            </CardContainer>
        </section>
    );
}
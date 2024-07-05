import { Card, CardContainer } from '../components/Card';
export default function ProjectSection() {

    return (
        <section>
            <h2>Projects</h2>
            <CardContainer>
                <Card
                    title='Overvoice (2022)'
                    description='Entertainment Dubbing App for blind person (Android)'
                    image='/banners/overvoice-banner.png'
                    tools={['Flutter', 'Firebase']}
                />
                <Card
                    title='Overvoice (2022)'
                    description='Entertainment Dubbing App for blind person (Android)'
                    image='/banners/overvoice-banner.png'
                    tools={['Flutter', 'Firebase']}
                />
                <Card
                    title='Overvoice (2022)'
                    description='Entertainment Dubbing App for blind person (Android)'
                    image='/banners/overvoice-banner.png'
                    tools={['Flutter', 'Firebase']}
                />
            </CardContainer>
        </section>
    );
}
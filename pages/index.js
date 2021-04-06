import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featuter-posts';

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextJS',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerp: 'NextJS is a framework for react',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextJS2',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerp: 'NextJS is a framework for react',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextJS3',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerp: 'NextJS is a framework for react',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextJS4',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerp: 'NextJS is a framework for react',
        date: '2022-02-10'
    }
]

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    );
}

export default HomePage;
import Head from 'next/head';
import Features from '../components/landing/features/features';
import Grid from '../components/landing/grid/grid';
import Hero from '../components/landing/hero/hero';
import Footer from '../components/shared/footer/footer';
import Nav from '../components/shared/nav/nav';

const Landing = () => {
    return(
        <div>
            <Head>
                <title>Maria Morán</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className='page'>
                <Hero />
                <Grid />
                <Features />
            </main>
            <Footer />
        </div>
    )
}

export default Landing;
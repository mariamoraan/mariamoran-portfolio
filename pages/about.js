import Head from "next/head";
import AboutLayout from "../components/aboutLayout/aboutLayout";
import Footer from "../components/shared/footer/footer";
import Nav from "../components/shared/nav/nav";

const About = () => {
    return(
        <>
            <Head>
                <title>Maria Morán</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav actual='about' />
            <main className='page'>
                <AboutLayout />
            </main>
            <Footer />
        </>
    )
}

export default About;
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProjectsLayout from "../components/layouts/projectsLayout/projectsLayout";
import Footer from '../components/shared/footer/footer';
import Nav from '../components/shared/nav/nav';
import { getDevice } from '../hooks/size';
import { fetchGraphQL } from './api/cms';

const AppProjects = () => {
    const device = getDevice();
    const { t, lang } = useTranslation('common');
    const [list, setList] = useState();

    const links = [
        {title: t("common:web_development"), image:`/home/${device}/image-web-design.jpg`, link:'/web-projects'},
        {title: t("common:articles"), image:`/home/${device}/image-graphic-design.jpg`, link:'/resources'},

    ]

    const query = `{
        projectCollection(locale: "${lang}") {
            items {
              title
              date
              description{
                json
              }
              image{
                url
              }
            }
          }
    }`;
    useEffect(() => {
        const fetch = async() => {
            const res = await fetchGraphQL(query); 
            setList({
                projectCollection: Object.values(res.projectCollection.items)
            }
            
            );   
        }
        fetch();

     
    }, [lang]);
    if(!list) return;
    return(
        <div>
            <Head>
                <title>Maria Morán</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className='page'>
                <ProjectsLayout 
                    title={'App Development'} 
                    subtitle={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'} 
                    list={list.projectCollection} 
                    links={links}
                />
            </main>
            <Footer />
        </div>
    )
}

export default AppProjects;
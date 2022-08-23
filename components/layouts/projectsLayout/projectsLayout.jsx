import useTranslation from 'next-translate/useTranslation';
import Image from "next/image";
import { useRouter } from 'next/router';
import RichText from '../../paper/RichText/richText';
import styles from './projectsLayout.module.css';

const ProjectsLayout = ({title, subtitle, list, links}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const handleClick = (link) => {
        router.push(link);
    }
    const handleClickProject = (auxLink, title, description, image, link, technologies, linkgithub) => {
        if(auxLink){
            console.log(auxLink)
            window.open(auxLink);
            return;
        }
        router.push({
            pathname: '/project',
            query: { 
                title: title, 
                description: JSON.stringify(description.json), 
                image:image, 
                link:link,
                technologies: JSON.stringify(technologies),
                linkgithub: linkgithub,
            }
        }) 
    }
    return(
        <div className={styles['wrapper']}>
            <div className={styles['page-title']}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <ul className={styles['grid']}>
                {
                    list.map(({auxLink, title, description, image, link, technologies, linkgithub}, index) => (
                        <li 
                            className={styles['grid-item']} 
                            key={index}
                            onClick={() => handleClickProject(auxLink, title, description, image.url, link, technologies, linkgithub)}
                        >
                            <div className={styles['image-wrapper']}>
                                <Image 
                                    layout={'fill'} 
                                    src={image.url} 
                                    objectFit={'cover'}
                                />
                            </div>
                            <div className={styles['content-wrapper']}>
                                <h3>{title}</h3>
                                <RichText className={styles['project-description']} json={description.json} />
                            </div>
                        </li>
                    ))
                }
            </ul>
            <ul className={styles['grid-wrapper']}>
                {
                    links?.map(({title, image, link}, index) => (
                        <li 
                        id={`grid-${index}`}
                        key={index}
                        className={styles['grid']}
                        onClick={() => handleClick(link)}
                        >
                            <Image 
                            layout='fill'
                            src={image}
                            objectFit={'cover'} 
                            className={styles['grid-image']}
                            />
                            <h2>{title}</h2>
                            <h3>{t('common:view_projects')}</h3>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProjectsLayout;
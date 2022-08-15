import useTranslation from 'next-translate/useTranslation';
import Image from "next/image";
import { useRouter } from 'next/router';
import styles from './projectsLayout.module.css';

const ProjectsLayout = ({title, subtitle, list, links}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const handleClick = (link) => {
        router.push(link);
    }
    const handleClickProject = () => {
        router.push('/project')
    }
    return(
        <div>
            <div className={styles['page-title']}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <ul className={styles['grid']}>
                {
                    list.map(({title, description, image}, index) => (
                        <li 
                            className={styles['grid-item']} 
                            key={index}
                            onClick={handleClickProject}
                        >
                            <div className={styles['image-wrapper']}>
                                <Image 
                                    layout={'fill'} 
                                    src={image} 
                                    objectFit={'cover'}
                                />
                            </div>
                            <div className={styles['content-wrapper']}>
                                <h3>{title}</h3>
                                <p>{description}</p>
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
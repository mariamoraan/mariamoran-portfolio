import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getDevice } from '../../../hooks/size';
import styles from './grid.module.css';

const Grid = () => {
    const {t} = useTranslation();
    const device = getDevice();
    const router = useRouter();
    const grid = [
        {title: t("common:web_development"), image:`/home/${device}/image-web-design.jpg`, link:'/web-projects'},
        {title: t("common:app_development"), image:`/home/${device}/image-app-design.jpg`, link:'/app-projects'},
        {title: t("common:articles"), image:`/home/${device}/image-graphic-design.jpg`, link:'/resources'},
    ]
    const handleClick = (link) => {
        router.push(link);
    }
    return(
        <section className={styles['wrapper']}>
            <ul className={styles['grid-wrapper']}>
                {
                    grid.map(({title, image, link}, index) => (
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
        </section>
    )
}

export default Grid;
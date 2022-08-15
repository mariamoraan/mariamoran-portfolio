import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import RichText from '../paper/RichText/richText';
import styles from './project.module.css';

const Project = () => {
    const {t} = useTranslation();
    const router = useRouter();
    if (!router.query.image) return;
    return(
        <ul className={styles['wrapper']}>
            <li className={styles['item-wrapper']}>
                <div className={styles['content-wrapper']}>
                    <h2>Description</h2>
                    <RichText json={JSON.parse(router.query.description)} />
                </div>
                <div className={styles['image-wrapper']}>
                    <Image 
                    layout={'fill'} 
                    src={router.query.image}
                    objectFit={'cover'}
                    />
                </div>
            </li>
            {  
             JSON.parse(router.query.technologies) && 
            <li className={styles['item-wrapper']}>
                <div className={styles['content-wrapper']}>
                    <h2>Technologies</h2>
                    <ul className={styles['technologies']}>
                        {
                            JSON.parse(router.query.technologies).map((technologie) => (
                                <li className={styles['technologie']}>{technologie}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles['image-wrapper']}>
                    <Image 
                    layout={'fill'} 
                    src={router.query.image}
                    objectFit={'cover'}
                    />
                </div>
            </li>
            }
            <li className={styles['item-wrapper']}>
                <div className={styles['content-wrapper']}>
                    <h2>Links</h2>
                    {router.query.link && <a className={styles['link']} href={router.query.link}>🌐 Discover the App</a>}
                    {router.query.linkgithub && <a className={styles['link']} href={router.query.linkgithub}>😺 Discover the App on Github</a>}
                </div>
                <div className={styles['image-wrapper']}>
                    <Image 
                    layout={'fill'} 
                    src={router.query.image}
                    objectFit={'cover'}
                    />
                </div>
            </li>
        </ul>
    )
}

export default Project;
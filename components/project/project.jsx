import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import styles from './project.module.css';


const Project = () => {
    const {t} = useTranslation();

    return(
        <ul className={styles['wrapper']}>
            <li className={styles['item-wrapper']}>
                <div className={styles['content-wrapper']}>
                    <h2>Description</h2>
                    <p>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
                <div className={styles['image-wrapper']}>
                    <Image 
                    layout={'fill'} 
                    src={'/web-design/desktop/image-photon.jpg'}
                    objectFit={'cover'}
                    />
                </div>
            </li>
            <li className={styles['item-wrapper']}>
                <div className={styles['content-wrapper']}>
                    <h2>Technologies</h2>
                    <p>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
                <div className={styles['image-wrapper']}>
                    <Image 
                    layout={'fill'} 
                    src={'/web-design/desktop/image-photon.jpg'}
                    objectFit={'cover'}
                    />
                </div>
            </li>
            <li className={styles['item-wrapper']}>
                <div className={styles['content-wrapper']}>
                    <h2>Links</h2>
                    <p>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
                <div className={styles['image-wrapper']}>
                    <Image 
                    layout={'fill'} 
                    src={'/web-design/desktop/image-photon.jpg'}
                    objectFit={'cover'}
                    />
                </div>
            </li>
        </ul>
    )
}

export default Project;
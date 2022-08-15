import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import styles from './features.module.css';

const Features = () => {
    const {t} = useTranslation();
    const features = [
        {image: '/home/desktop/illustration-passionate.svg', title:t('landing:passionate'), text:t('landing:passionate_desc')},
        {image: '/home/desktop/illustration-resourceful.svg', title:t('landing:resourceful'), text:t('landing:resourceful_desc')},
        {image: '/home/desktop/illustration-friendly.svg', title:t('landing:friendly'), text:t('landing:friendly_desc')},
    ]
    return(
        <section className={styles['wrapper']}>
            <ul className={styles['features-wrapper']}>
                {
                    features.map(({image, title, text}, index) => (
                        <li key={title} className={styles['feature']}>
                            <div className={styles['image-wrapper']}>
                                <Image layout='fill' src={image} />
                            </div>
                            <div className={styles['text-wrapper']}>
                            <h3>{title}</h3>
                            <p>{text}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Features;
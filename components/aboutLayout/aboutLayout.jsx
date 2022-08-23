import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import styles from './aboutLayout.module.css';

const VIRTUAL_CV = 'https://flaxen-reply-248.notion.site/Maria-Moran-Resume-dcc3888effbb47f6a124e94fdce45c0a';
const IMAGE_1 = '/home/desktop/illustration-passionate.svg';
const IMAGE_2 = '/home/desktop/illustration-resourceful.svg';

const AboutLayout = () => {
    const {t} = useTranslation();
    return(
        <ul className={styles['wrapper']}>
            <li className={styles['about-1']}>
                <div className={styles['content']}>
                    <h2>{t('landing:passionate')}</h2>
                    <p>
                        {t('landing:long_passionate_desc')}
                    </p>
                </div>
                <div className={styles['image-wrapper']}>
                    <Image layout='fill' src={IMAGE_1} />
                </div>
            </li>
            <li className={styles['about-2']}>
                <div className={styles['content']}>
                    <h2>{t('landing:resourceful')}</h2>
                    <p>
                    {t('landing:long_resourceful_desc')}
                    </p>
                </div>
                <div className={styles['image-wrapper']}>
                    <Image layout='fill' src={IMAGE_2} />
                </div>
            </li>
            <li className={styles['about-3']}>
                <div className={styles['content']}>
                    <h2>{t('landing:not_enough')}</h2>
                    <p>{t('landing:long_friendly_desc')}</p>
                </div>
                <a href={VIRTUAL_CV}>
                    {t('landing:check_virtual_cv')}
                </a>
            </li>
        </ul>
    )
}

export default AboutLayout;
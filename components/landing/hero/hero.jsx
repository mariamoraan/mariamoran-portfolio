import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { getDevice } from '../../../hooks/size';
import PaperButton from '../../paper/paperButton/paperButton';
import styles from './hero.module.css';

const Hero = () => {
    const {t} = useTranslation();
    const device = getDevice();
    return(
        <section className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <h1>{t('landing:hero_title')}</h1>
                <p>{t('landing:hero_description')}</p>
                <PaperButton text={t('common:learn_more')} />
            </div>
            <div className={styles['image-wrapper']}>
                <Image
                    layout="responsive"
                    width={'100%'}
                    height={'100%'}
                    objectFit="cover"
                    objectPosition={'90% 25%'}
                    src={`/home/desktop/image-hero-phone.png`}
                    className={'image'}
                />
            </div>
        </section>
    )
}

export default Hero;
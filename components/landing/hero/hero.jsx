import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { getDevice } from '../../../hooks/size';
import PaperButton from '../../paper/paperButton/paperButton';
import styles from './hero.module.css';

const Hero = () => {
    const {t} = useTranslation();
    const device = getDevice();
    const router = useRouter();

    return(
        <section className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <h1>{t('landing:hero_title')}</h1>
                <p>{t('landing:hero_description')}</p>
                <PaperButton onClick={() => router.push('/about')} text={t('common:learn_more')} />
            </div>
        </section>
    )
}

export default Hero;
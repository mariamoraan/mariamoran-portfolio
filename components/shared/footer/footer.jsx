import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PaperButton from '../../paper/paperButton/paperButton';
import { links } from '../constants';
import styles from './footer.module.css';

const Footer = () => {
    const {t} = useTranslation();
    const router = useRouter();
    const social = [
        {image: '/shared/desktop/icon-twitter.svg', link: '/a'},
        {image: '/shared/desktop/icon-pinterest.svg', link: '/b'},
        {image: '/shared/desktop/icon-instagram.svg', link: '/c'},
    ]
    const handleOpenContact = () => {
        router.push('/contact');
    }
    return(
        <footer className={styles['wrapper']}>
            <div className={styles['footer-top']}>
                <div className={styles['footer-top-text-wrapper']}>
                    <h1>{t('common:lets_talk')}</h1>
                    <p>{t('common:ready_to')}</p>
                </div>
                <div className={styles['footer-top-button-wrapper']}>
                    <PaperButton onClick={handleOpenContact} text={t('common:get_in_touch')} />
                </div>
            </div>
            <div className={styles['footer-bottom']}>
                <nav className={styles['footer-bottom-nav']}>
                    <div className={styles['logo-wrapper']}>
                        <h3>{t('common:logo_text')}</h3>
                    </div>
                    <ul className={styles['links-wrapper']}>
                        {
                            links.map(({name, link}) => (
                                <li 
                                className={styles['link']} 
                                key={link}
                                >
                                    <Link href={link}>{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className={styles['footer-bottom-data']}>
                        <div className={styles['contact-data']}>
                            <p>{t('common:contact_me')}</p>
                            <p>{t('common:phone')}</p>
                            <p>{t('common:email')}</p>
                        </div>
                        <ul className={styles['social-data']}>
                               {
                                social.map(({image, link}) => (
                                    <li key={`footer-${link}`} className={styles['social-item']}>
                                        <Image layout='fill' src={image} />
                                    </li>
                                ))
                               }
                        </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { links } from '../constants';
import MobileNav from './mobileNav';
import styles from './nav.module.css';

const Nav = ({actual}) => {
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div className={styles['nav-wrapper']}>
            <nav className={styles['wrapper']}>
                <Link 
                    className={styles['logo-link']}
                    href={'/'}
                >
                    <a><h3>{t('common:logo_text')}</h3></a>
                </Link>
                <ul className={styles['links-wrapper']}>
                    {
                        links.map(({name, link}) => (
                            <li 
                            className={actual === name ? styles['accent-link'] : styles['link']} 
                            key={link}
                            >
                                <Link href={link}>{name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={styles['mobile-nav-button']}
                >
                    <Image 
                        height={20} 
                        width={24} 
                        src={ 
                            isMenuOpen  
                            ? '/shared/mobile/icon-close.svg' 
                            : '/shared/mobile/icon-hamburger.svg'
                            } 
                    />
                </button>
                {isMenuOpen ? <MobileNav links={links} /> : null}
            </nav>
        </div>
    )
}

export default Nav;
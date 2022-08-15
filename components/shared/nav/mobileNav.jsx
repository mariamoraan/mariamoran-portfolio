import Link from "next/link";
import styles from './mobileNav.module.css';

const MobileNav = ({links}) => {
    return(
        <nav className={styles['wrapper']}>
            <div className={styles['links-wrapper']}>
            {
                links.map(({name, link}) => (
                    <Link key={link} href={link}>{name}</Link>
                ))
            }
            </div>
        </nav>
    )
}

export default MobileNav;
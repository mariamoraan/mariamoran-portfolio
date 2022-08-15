import styles from './paperButton.module.css';
const PaperButton = ({text, onClick}) => {
    return(
        <button className={styles['wrapper']} onClick={onClick}>{text}</button>
    )
}

export default PaperButton;
import styles from './paperButton.module.css';
const PaperButton = ({text}) => {
    return(
        <button className={styles['wrapper']}>{text}</button>
    )
}

export default PaperButton;
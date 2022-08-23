import useTranslation from 'next-translate/useTranslation';
import { useState } from "react";
import styles from './contactForm.module.css';

const ContactForm = () => {
    const {t} = useTranslation();
    const defaultState = {
        name: '',
        email: '',
        message: '',
    }
    const [contactData, setContactData] = useState(defaultState);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactData(prevState => ({
                ...prevState,
                [name]: value
        }));
    }

    const handleSubmit = async(event) => {
        event.preventDefault();  
        alert("entra")
        try{
            const res = await fetch(`/api/email?name=${contactData.name}&email=${contactData.email}&message=${contactData.message}`)
            const data = await res.json();
            alert("form submited")
            setContactData(defaultState);
        }catch(e){
            alert("error")
            console.error(e)
        }
    }
    return(
        <div className={styles['container']}>
        <div className={styles['wrapper']}>
            <div className={styles['left-wrapper']}>
                <h1>{t('common:lets_talk')}</h1>
                <p>
                    {t('common:ready_to')}
                </p>
            </div>
            <form 
            className={styles['form-wrapper']} 
            id='form' 
            onSubmit={handleSubmit}>  
                <label className={styles['label-wrapper']}>
                    * Name
                    <input  
                    type={'text'} 
                    value={contactData.name} 
                    placeholder={'Juan Pérez'} 
                    required={true} 
                    onChange={handleChange}
                    name={'name'}
                    className={styles['input-wrapper']}
                    />
                </label>
                <label className={styles['label-wrapper']}>
                    * Email
                    <input  
                    type={'email'} 
                    value={contactData.email} 
                    placeholder={'juanperez@gmail.com'} 
                    required={true} 
                    onChange={handleChange}
                    name={'email'}
                    className={styles['input-wrapper']}
                    />
                </label>
                <label className={styles['label-wrapper']}>
                    * Message
                    <textarea  
                    required={true}  
                    onChange={handleChange} 
                    value={contactData.message}  
                    name={'message'}
                    className={styles['input-wrapper-textarea']}
                    />
                </label>
                <input className={styles['submit-button']} type="submit" value={'Submit'}  />
            </form>
        </div>
        </div>
    )
}

export default ContactForm;
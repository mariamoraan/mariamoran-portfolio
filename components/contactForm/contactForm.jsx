import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from "react";
import styles from './contactForm.module.css';

const MESSAGE_STATUS = {ERROR: 'error', SUCCESS: 'success', NONE: 'none'};

const ContactForm = () => {
    const {t} = useTranslation();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [messageStatus, setMessageStatus] = useState(MESSAGE_STATUS.NONE);
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
        try{
            setIsLoading(true);
            const {email, message, name} = contactData;
            const myselfMessage = `E: ${email} \n N: ${name} \n ${message}`;
            const myselfSubject = `Message from ${name}`;
            const userSubject = t('common:user_subject').replace('#name', name);
            const userMessage = t('common:user_message').replace('#name', name);
            const res_myself = await fetch(`/api/email?email=${'mariamoranluaces@gmail.com'}&subject=${myselfSubject}&message=${myselfMessage}`)
            const res_user = await fetch(`/api/email?email=${email}&subject=${userSubject}&message=${userMessage}`)
            const data_myself = await res_myself.json();
            const data_user = await res_user.json();
            setIsLoading(false);
            setMessageStatus(MESSAGE_STATUS.SUCCESS);
            setTimeout(() => {
                setMessageStatus(MESSAGE_STATUS.NONE);
            }, 5000)
            setContactData(defaultState);
        }catch(e){
            console.error(e);
            setMessageStatus(MESSAGE_STATUS.ERROR);
        }
    }
    return(
        <div className={styles['container']}>
        {isLoading &&
        <div className={styles['loading-wrapper']}>
             <span><p>Loading...</p></span>
        </div>
        }
        { messageStatus == MESSAGE_STATUS.SUCCESS &&
            <div className={styles['message-status']}>
                <div>
                    <p>
                    {t('common:success')} 
                    </p>
                    <button onClick={() => router.push('/web-projects')}>{t('common:see_portfolio')}</button>
                    <span onClick={() => setMessageStatus(MESSAGE_STATUS.NONE)}>{t('common:close')}</span>
                </div>
            </div>
        }
         { messageStatus == MESSAGE_STATUS.ERROR &&
            <div className={styles['message-status']}>
                <div>
                    <p>{t('common:error')}</p>
                    <button onClick={() => router.push('/web-projects')}>{t('common:see_portfolio')}</button>
                    <span onClick={() => setMessageStatus(MESSAGE_STATUS.NONE)}>{t('common:close')}</span>
                </div>
            </div>
        }
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
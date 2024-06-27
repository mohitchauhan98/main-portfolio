import './Contact.css'
import ContactLogo from '../../assets/contact-me.svg'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <div className='connect-container'>
        <div className='skills-box'>
            <div className='s-header'>
                <div><span className='skill-text'>Let's Connect</span></div>
                <span className='banner-description'>Feel free to reach out to me for any questions or opportunities!</span>
            </div>
            <div className='contact-main-container'>
              <div className='contact-main-img'><img src = {ContactLogo} alt = 'contactlogo' /></div>
              <div><ContactForm /></div>
            </div>
        </div>
    </div>
  )
}

export default Contact
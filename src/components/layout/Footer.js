import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return (
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <a href="https://www.facebook.com/maria.vicente.965580/?locale=pt_BR" target='_blank'>
              <FaFacebook/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mariavicente1215/" target='_blank'>
              <FaInstagram/>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=82988747547" target='_blank'>
              <FaWhatsapp/>
            </a>
          </li>
        </ul>
        <p className={styles.copy_right}>
          <span>MVM</span> &copy; 2024
        </p>
      </footer>
    )
}


export default Footer;


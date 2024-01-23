import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import styles from './Contact.module.css';
import Maria from '../../img/mvicente.jpg';

function Contact(){
    return (
        <>
          <div className={styles.container_perfil}>
            <img src={Maria} className={styles.perfil} title="Maria Vicente Melo"/>
          </div>
          <section className={styles.contact_container}>
              <h1 className={styles.cnt}>Contatos</h1>
              <div>
                <ul className={styles.contact_list}>
                    <li className={styles.facebook}>
                        <a href='https://www.facebook.com/maria.vicente.965580/?locale=pt_BR' target="_blank" title="Facebook"><FaFacebook/> Facebook </a>
                    </li>
                    <li className={styles.instagram}>
                        <a href='https://www.instagram.com/mariavicente1215/' target='_blank' title="Instagram"><FaInstagram/> Instagram </a>
                    </li>
                    <li className={styles.whats}>
                        <a href='https://api.whatsapp.com/send?phone=82988747547' target="_blank" title="Whatsapp"><FaWhatsapp/> Whatsapp </a>
                    </li>
                </ul>
              </div>
          </section>
          <div className={styles.qsm}>
          <h1 className={styles.qs}>Quem eu sou?</h1>
            <p>
            Meu nome é Maria Vicente, e desde a minha adolescência, mergulhei no maravilhoso mundo do crochê. O artesanato tornou-se meu refúgio, uma terapia que não apenas desenvolvi, mas que também foi fundamental para superar os desafios da depressão. Com agulhas e fios, encontrei não apenas uma forma de expressar minha criatividade, mas também uma maneira de resgatar a alegria e a vitalidade em minha vida.

Há quase três anos, descobri e me encantei pela arte sacra. Cada peça que produzo não é apenas uma expressão de habilidade manual, mas uma manifestação profunda de espiritualidade. Através da arte sacra, encontrei uma conexão mais profunda com minha fé, transformando cada criação em uma jornada espiritual única.

            </p>
          </div>
        </>
    )
}

export default Contact;

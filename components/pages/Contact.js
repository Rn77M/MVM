import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import styles from './Contact.module.css'
import Maria from '../../img/mvicente.jpg'

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
                O Fortuna velut luna statu variabilis,semper crescis
aut decrescis;vita detestabilis nunc obdurat et tunc curat ludo mentis aciem, egestatem, potestatem dissolvit ut glaciem.Na Idade Média distante, uns boémios, os goliardos (clérigos e estudantes), cantavam e tocavam pela noite, nas ruas das cidades, poemas normalmente em latim medieval,  e a sociedade; eram poemas contra o poder estabelecido, a sorte e louvando a vida, as tabernas e o vinho, o jogo e o amor, as mulheres. Estes “poetas”  percorreram a Idade Média, eram, na sua maioria, estudantes das universidades de Espanha, de França, de Itália, de Inglaterra, da Alemanha. Eram, em geral, poemas curtos, mas também outros mais longos.
            </p>
          </div>
        </>
    )
}

export default Contact;
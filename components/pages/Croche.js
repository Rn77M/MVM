import styles from './Croche.module.css';
import Terezinha from '../../img/WhatsApp Image 2024-01-21 at 15.43.57.jpeg';
import Benedito from '../../img/WhatsApp Image 2024-01-21 at 15.43.57 (1).jpeg';
import VestidoVermelho from '../../img/WhatsApp Image 2024-01-21 at 15.43.48 (2).jpeg';
import VestidoVermelhoDois from '../../img/WhatsApp Image 2024-01-21 at 15.43.48.jpeg';
import SaidaPraia from '../../img/720767f4-1bd5-481f-85d0-e47be4e0d9db.jpg';
import Astro from '../../img/atronauta.jpg';
import Cabecudos from '../../img/cabecudos.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LinkButton from '../layout/LinkButton';

function Croche(){
     const scrollToTop = () => {
     window.scrollTo({
        top: 0,
        behavior: 'smooth', // Você pode remover isso se preferir uma rolagem instantânea
      });
     };

    return (
        <>
          <section className={styles.croche_container}>
            <h1 className={styles.crc}>Crochê</h1>
            <h1>Amigurumi</h1>
            <h2>Avengers</h2>
            <Link onClick={scrollToTop} to="/contact">
              <img src={Cabecudos} className={styles.astro} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton clicar={scrollToTop} className={styles.link} to="/contact" text="Compre Agora"/>
            <h2>Astronauta</h2>
            <Link onClick={scrollToTop} to="/contact">
              <img src={Astro} className={styles.astro} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton clicar={scrollToTop}  className={styles.link} to="/contact" text="Compre Agora"/>
            <h2>Santa Terezinha</h2>
            <Link onClick={scrollToTop} to="/contact">
              <img src={Terezinha} className={styles.terezinha} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton clicar={scrollToTop} className={styles.link} to="/contact" text="Compre Agora"/>
            <h2>São Benedito</h2>
            <Link onClick={scrollToTop} to="/contact">
              <img src={Benedito} className={styles.benedito} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton clicar={scrollToTop} to="/contact" text="Compre Agora"/>
          </section>
          <section className={styles.croche_container}>
            <h1>Vestidos de Crochê</h1>
            <h2>Saia - Vestido</h2>
            <Link onClick={scrollToTop} to="/contact">
              <img src={VestidoVermelho} className={styles.vestido} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton clicar={scrollToTop} to="/contact" text="Compre Agora"/>
            <h2>Saida de Praia</h2>
            <Link onClick={scrollToTop} to="/contact">
              <img src={SaidaPraia} className={styles.saida_praia} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton clicar={scrollToTop} to="/contact" text="Compre Agora"/>
            <h2>Saia - Vestido</h2>
            <Link onClick={scrollToTop} to="/contact">
              <img src={VestidoVermelhoDois} className={styles.vestido} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton clicar={scrollToTop} to="/contact" text="Compre Agora"/>
          </section>
        </>
    )
}




export default Croche;



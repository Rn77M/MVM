import styles from './Home.module.css';
import savings from '../../img/comprador.png';
import LinkButton from '../layout/LinkButton';
import Astro from '../../img/atronauta.jpg';
import Cabecudos from '../../img/cabecudos.jpg';
import Vestido from '../../img/WhatsApp Image 2024-01-21 at 15.43.48.jpeg';
import Arte from '../../img/WhatsApp Image 2024-01-21 at 15.43.53.jpeg';
import Familia from '../../img/WhatsApp Image 2024-01-21 at 15.43.56.jpeg';
import { Link } from 'react-router-dom';


function Home(){
    return (
      <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>MVM</span></h1>
        <p><em><strong>Maria Vicente Melo</strong></em></p>
        <p>Comece a comprar agora!</p>
        <Link className={styles.project} to="/croche">
        Projetos de crochê
        </Link>
        <Link to="/contact">
          <img src={Astro} className={styles.astro} title="Gostou da Arte? Clique Aqui!"/>
        </Link>

        
        <LinkButton to="/contact" text="Compre Agora"/>
        <br/>
        
        <Link to="/contact">
          <img src={Cabecudos} className={styles.astro} title="Gostou da Arte? Clique Aqui!"/>
        </Link>

        <LinkButton to="/contact" text="Compre Agora"/>
        <br/>
        
        <Link to="/contact">
          <img src={Vestido} className={styles.vestido} title="Gostou da Arte? Clique Aqui!"/>
        </Link>

        
        <LinkButton to="/contact" text="Compre Agora"/>
        <br/>
        
        <Link className={styles.project} to="/artesacra">Projetos de Arte Sacra</Link>
        <Link to="/contact">
          <img src={Arte} className={styles.arte} title="Gostou da Arte? Clique Aqui!"/>
        </Link>

        
        <LinkButton to="/contact" text="Compre Agora"/>
        <br/>
        <Link to="/contact">
          <img src={Familia} className={styles.familia} title="Gostou da Arte? Clique Aqui!"/>
        </Link>

        
        <LinkButton to="/contact" text="Compre Agora"/>
        <br/>
        
        <Link to="/contact">
          <img src={savings} alt="MVM" title="Você chegou no fim do home. Clique Aqui!"/>
        </Link>
        
        <LinkButton to="/contact" text="Você chegou no fim do home. Clique Aqui!"/>
        <br/>
      </section>
    )
}



export default Home;


import styles from './ArteSacra.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Senhora from '../../img/WhatsApp Image 2024-01-21 at 15.43.50.jpeg';
import Pilar from '../../img/WhatsApp Image 2024-01-21 at 15.43.50 (1).jpeg';
import Fatima from '../../img/WhatsApp Image 2024-01-21 at 15.43.50 (2).jpeg';
import Familia from '../../img/WhatsApp Image 2024-01-21 at 15.43.56.jpeg';
import Arte from '../../img/WhatsApp Image 2024-01-21 at 15.43.53.jpeg';
import Lourdes from '../../img/WhatsApp Image 2024-01-21 at 15.43.51.jpeg';
import LinkButton from '../layout/LinkButton';

function ArteSacra(){
    return (
        <>
          <section className={styles.artesacra_container}>
            <h1 className={styles.art}>Arte Sacra</h1>
            <h1>Imagens de Santos</h1>
            
            <h2>Nossa Senhora do Pilar</h2>
            <Link to="/contact">
              <img src={Pilar} className={styles.pilar} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton to="/contact" text="Compre Agora"/>
            <h2>Nossa Senhora</h2>
            <Link to="/contact">
              <img src={Senhora} className={styles.senhora} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton to="/contact" text="Compre Agora"/>
            <h2>Nossa Senhora de Fátima</h2>
            <Link to="/contact">
              <img src={Fatima} className={styles.fatima} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton to="/contact" text="Compre Agora"/>
            <h2>Sagrada Familia</h2>
            <Link to="/contact">
              <img src={Familia} className={styles.familia} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton to="/contact" text="Compre Agora"/>
            <h2>São José</h2>
            <Link to="/contact">
              <img src={Arte} className={styles.arte} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton to="/contact" text="Compre Agora"/>
            <h2>Nossa Senhora de Lourdes</h2>
            <Link to="/contact">
              <img src={Lourdes} className={styles.lourdes} title="Gostou da Arte? Clique Aqui!"/>
            </Link>
            
            <LinkButton to="/contact" text="Compre Agora"/>
          </section>
        </>
    )
}




export default ArteSacra;



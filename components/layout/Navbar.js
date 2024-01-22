import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../img/coracao.png'

function Navbar(){
    return (
      <nav className={styles.navbar}>
        <Container>
          <Link to="/">
            <img src={logo} alt="Costs RN17"/>
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/croche">Crochê</Link>
            </li>
            <li className={styles.item}>
              <Link to="/artesacra">Arte Sacra</Link>
            </li>
            <li className={styles.item}>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </Container>
      </nav>
    )
}


export default Navbar;














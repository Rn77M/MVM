import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

function LinkButton({ to, text, classeBotao}){
    return (
      <Link className={`${styles.btn} ${classeBotao}`} to={to}>
        {text}
      </Link>
    )
}










export default LinkButton;

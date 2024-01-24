import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

function LinkButton({ to, text, classeBotao, clicar}){
    return (
      <Link className={`${classeBotao} ${styles.btn}`} to={to} onClick={clicar}>
        {text}
      </Link>
    )
}










export default LinkButton;

import styles from './Submit.module.css'


function Submit({ text }){
    return (
        <div className={styles.form_control}>
          <button className={styles.btn} type="submit">{text}</button>
        </div>
    )
}












export default Submit;
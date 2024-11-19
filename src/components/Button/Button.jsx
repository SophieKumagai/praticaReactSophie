import styles from "./Button.module.css"
function Button({titulo, click}) {
    return (
        <button type="submit" onClick={() => {click(titulo)}} className={styles.add}>{titulo}</button>
    )
}

export default Button
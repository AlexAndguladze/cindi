import React from "react"
import styles from "./Header.module.css"
import {useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    return(
        <header className={styles.header}>
            <div className={styles.leftSpace}/>
            <h1 className={styles.title}>Cindi</h1>
            <div className={styles.right}>
                <button className={styles.loginBtn} onClick={() => navigate('/login')}>Login</button>
            </div>
        </header>
    )
}
export default Header
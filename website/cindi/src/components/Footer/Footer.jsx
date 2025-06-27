import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <p>lorem ipsum</p>
                        <p>lorem ipsum</p>
                        <p>lorem ipsum</p>
                    </div>
                    <div className={styles.box}>
                        <p>lorem ipsum</p>
                    </div>
                    <div className={styles.box}>
                        <p>lorem ipsum</p>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
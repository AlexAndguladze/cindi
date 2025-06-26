import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";
import styles from "./LoginPage.module.css"
const LoginPage =()=>{
    return(
        <>
        <div className={styles.container}>
            <img src={"/"} alt={"Logo will be here"} className={styles.cindiLogo}/>
            <div className={styles.loginHeader}>Sign In To Cindi</div>
            <div className={styles.loginPanel}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse)
                        console.log(jwtDecode(credentialResponse.credential))
                    }}
                    onError={()=>console.log("error log in")}
                    size={"large"}
                    shape={"pill"}
                    />
            </div>
        </div>
        </>
    )
}
export default LoginPage
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";

const LoginPage =()=>{
    return(
        <>
        <div>
            <GoogleLogin 
            onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
                console.log(jwtDecode(credentialResponse.credential))
            }}
            onError={()=>console.log("error log in")}/>
        </div>
        </>
    )
}
export default LoginPage
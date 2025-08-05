import axios from "axios"
const env = import.meta.env;

const verify = async () =>{
    try {
        const token = localStorage.getItem('token');
        if(!token){
            return {loggedIn:false};
        }
        const response = await axios.get(`${env.VITE_BACKEND_URL}/api/v1/verify`,{
            headers:{
                'Authorization':'Bearer '+token
            }
        });
        // console.log(response)
        return {
            loggedIn:true,
            username:response.data.user.username,
            sharing:response.data.user.sharing
        }
    } catch (error) {
        return {
            loggedIn:false,
            error:error
        }
    }
}

const logOut = () =>{
    localStorage.removeItem('token');
    window.location.replace(`${env.VITE_FRONTEND_URL}/signin`);
}

export const useAuth = () =>{
    return {
        verify:verify,
        logOut:logOut
    }
}
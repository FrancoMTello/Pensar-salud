import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest,loginRequest } from "../api/auth"



export const Authcontext = createContext()

export const useAuth= ()=>{
    const context= useContext(Authcontext)
    if (!context){
        throw new Error()
    }
    return context
}


export const AuthProvider= ({children}) => {
    const [user,setUser]= useState(null)
    const [isAuthenticated,setIsAuthenticated]= useState(false)
    const [errors,setErrors]= useState([])


    const signup = async (user)=> {
        try{
            const res=  await registerRequest(user)
            console.log(res)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch(error){
            setErrors(error.reponse)
        }
    }   
    const signin = async(user)=>{

        try{
            const res= await loginRequest(user)
            console.log(res)
        } catch(error){
            if (Array.isArray(error.response.data)){
                return setErrors(error.reponse.data)
            }
            setErrors([error.reponse.data.message])
        }
    }   

    useEffect(()=>{
        if (errors.length>0){
            const timer= setTimeout(()=>{
                setErrors([])
            },5000)
            return ()=> clearTimeout(timer)
        }
    },[errors])


    return(
        <Authcontext.Provider value ={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors    
        }}>
            {children}
        </Authcontext.Provider>
    )
}
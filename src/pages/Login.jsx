
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'



function Login(){


    const {register, handleSubmit,formState:{errors}} = useForm()
    const {sigin, errors: signinErrors}=useAuth()


    const onSubmit = handleSubmit((data)=>{
        sigin(data)
    })



    return(
        <div className='flex h-screen items-center justify-center'>
        <div className=' bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            {signinErrors.map((error,i)=>(
                    <div className="bg-red-500 p-2 text-center my-2"> 
                        {error}
                    </div>
                ))}
            <h1 className='text-2xl font-bold'>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="text"{...register("username",{required:true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Nombre de usuario"/>

                {errors.username && (<p className="text-red-500">el nombre de usuario es requerido</p>)}
                <input type="email"{...register("email",{required:true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="email"/> 
                {errors.email && (<p className="text-red-500">el email es requerido</p>)}


                <input type="password"{...register("password",{required:true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="contraseña"/> 
                {errors.password && (<p className="text-red-500">la contraseña es requerida</p>)}

                <button type="submit">entrar</button>        
            </form>
        </div>
        </div>
    )
}
export default Login
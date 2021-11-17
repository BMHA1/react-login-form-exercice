import { useState } from "react"

const LoginPage = () => {

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    const handleChangeEmail = (email) =>{
        setEmail(email)
    }
    const handleChangePassword = (password) =>{
        setPassword(password)
    }

    return (
        <>
            <form className="color">
                <fieldset>
                    <legend>Bienvenido a BMS</legend>
                    <div>
                        <div className="float-right">
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    onChange={(event)=>handleChangeEmail(event.target.value)}
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Password"
                                    onChange={(event)=> handleChangePassword(event.target.value)}
                                    required />
                            </label>
                        </div>
                    </div>
                    <button >
                        Entrar
                    </button>
                </fieldset>
            </form>
        </>
    )

}

export default LoginPage
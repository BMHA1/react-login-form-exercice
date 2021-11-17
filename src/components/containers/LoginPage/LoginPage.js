import { useState } from "react"
import { APIConsumer } from "../../../services/apiConsumer"


const LoginPage = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
 

    const handleChangeEmail = (email) => {
        setEmail(email)
    }
    const handleChangePassword = (password) => {
        setPassword(password)
    }

    const sendinfo = async (e) => {
        e.preventDefault()
        let res = await APIConsumer.loginUser(email, password)
        console.log(res)
        localStorage.setItem("token", res)
    }

    return (
        <>
            <form onSubmit={(e) => sendinfo(e)}>
                <fieldset>
                    <legend>Bienvenido a BMS</legend>
                    <div>
                        <div className="float-right">
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    onChange={(event) => handleChangeEmail(event.target.value)}
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Password"
                                    onChange={(event) => handleChangePassword(event.target.value)}
                                    required />
                            </label>
                        </div>
                    </div>
                    <button type="submit" >
                        Entrar
                    </button>
                </fieldset>
            </form>
        </>
    )

}

export default LoginPage
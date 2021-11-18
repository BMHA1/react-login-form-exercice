
import { APIConsumer } from "../../../services/apiConsumer"

const LoginPage = () => {

    const handleSendData = async (e) => {

        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        try {
            let res = await APIConsumer.loginUser(email, password)
            console.log(res)
            localStorage.setItem("token", res.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <form onSubmit={(e) => handleSendData(e)}>
                <fieldset>
                    <legend>Bienvenido a mi página</legend>
                    <div>
                        <div className="float-right">
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Password"
                                    required />
                            </label>
                        </div>
                    </div>
                </fieldset>
                <button type="onSubmit" >
                    Entrar
                </button>
            </form>
        </>
    )
}
export default LoginPage
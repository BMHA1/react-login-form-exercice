import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <>
            <h1>PÁGINA EJEMPLO</h1>
            <div>
                <ol>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink> 
                    </li>
                </ol>
            </div>
        </>
    )

}

export default Header
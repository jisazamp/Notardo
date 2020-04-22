import React from "react"
import image from "../img/imgLog.jpg"
import 'react-calendar/dist/Calendar.css';

function Login() {
    return (
        <div className="section signup">
            <div className="imgLogin">
                <img src={image} />
            </div>
            <form id="forms" method="post" className="forms">
                <h1>Ingresar</h1>
                <div className="inputs">
                    <label htmlFor="mail">Correo</label>
                    <input type="email" name="mail" id="mail" />
                </div>
                <div className="inputs">
                    <label htmlFor="pass">Contraseña</label>
                    <input type="password" name="pass" id="pass" />
                </div>
                <input type="submit" defaultValue="Ingresar" />
                <a href="/signup">Registrarse</a>
            </form>
        </div>
  )
}

export default Login

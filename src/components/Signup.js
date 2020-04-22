import React from "react"
import image from "../img/imgReg.jpg"
import 'react-calendar/dist/Calendar.css';

function Signup() {
  return (
    <div className="section signup">
      <div className="imgRegistro">
        <img src={image} />
      </div>
      <form id="formRegistro" method="post" className="forms">
        <h1>Registrarse</h1>
        <div className="inputs">
          <label htmlFor="mail">Correo</label>
          <input type="email" name="mail" id="mail" />
        </div>
        <div className="inputs">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="inputs">
          <label htmlFor="pass">Contraseña</label>
          <input type="password" name="pass" id="pass" />
        </div>
        <div className="inputs">
          <label htmlFor="pass">Repetir contraseña</label>
          <input type="password" name="Rpass" id="Rpass" />
        </div>
        <input type="submit" defaultValue="Registrarse" />
        <a href="/login">ingresar</a>
      </form>
    </div>
  )
}

export default Signup

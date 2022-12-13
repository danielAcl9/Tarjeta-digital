import React from "react"
import profPic from "../images/fotoperfil.png"
import imgEmail from "../images/Mail.png"
import imgLinked from "../images/linkedin.png"

export default function Info() {
    return(
        <info>
            <img
                src={profPic}
                alt="Foto de perfil"
                className="info--img"
            />
            
            <h2 className="info--name">Daniel Amado</h2>
            <h3 className="info--title">Frontend Developer</h3>
            <h4 className="info--website">naddniel.com</h4>

            <div className="info--botones">

                <button className="info--btnEmail">
                    <img src={imgEmail}></img>
                    <p>Email</p>
                </button>

                <button className="info--btnLinkedin">
                    <img src={imgLinked}/>
                    <text>LinkedIn</text>
                </button>
            </div>

        </info>
    )
}
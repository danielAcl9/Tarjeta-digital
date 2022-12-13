import React from "react"
import twitterIcon from "../images/Twitter Icon.png"
import facebookIcon from "../images/Facebook Icon.png"
import instaIcon from "../images/Instagram Icon.png"
import gitIcon from "../images/GitHub Icon.png"

export default function Footer() {
    return(

        <div className="divFooter">
            <a href="https://twitter.com/home">
                <img className="IIIMg" src={twitterIcon} />
            </a>

            <a href="https://www.facebook.com/">
                <img className="IIIMg" src={facebookIcon} />
            </a>

            <a href="https://www.instagram.com/">
                <img className="IIIMg" src={instaIcon} />
            </a>

            <a href="https://github.com/">
                <img className="IIIMg" src={gitIcon} />
            </a>
        </div>

        // Cambios solo para probar el Git la misma mondá, parte dos
    )
}
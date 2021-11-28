import React from 'react'
import Erick from './images/Erick.webp'
import Fran from './images/Fran.webp'
import Cesar from './images/Cesar.webp'
import Me from './images/Me.webp'
import Juanma from './images/Juanma.webp'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faInstagram)
library.add(faGithub)
library.add(faLinkedin)

export default function Team() {
    return (
        <section className={"team-section"}>
            <h2 className={"team-header"}>The team</h2>
            <div className={"team-flexbox"}>
                <div className={"teammate-card"} >
                    <img className={"teamamte-card__img"} src={Cesar} alt={"cesar"}/>
                    <h4 className={"teammate-card__name"}>
                        CAbot
                    </h4>
                    <h4 className={"teammate-card__role"}>
                        Digital Artist
                    </h4>
                    <div className={"teammate-card__vitals"}>
                        <a href={'https://www.instagram.com/c_a_bot?r=nametag'} target={"_blank"} rel={"noopener noreferrer"}>
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </div>
                </div>
                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Erick} alt={"erick"}/>
                    <h4 className={"teammate-card__name"}>
                        Hidake
                    </h4>
                    <h4 className={"teammate-card__role"}>
                        Project Manager
                    </h4>
                    <div className={"teammate-card__vitals"}>
                        <a href={"https://twitter.com/CryptographicC1"} className={"right"}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                </div>
                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Fran} alt={"fran"}/>
                    <h4 className={"teammate-card__name"}>
                        Luxroy
                    </h4>
                    <h4 className={"teammate-card__role"}>
                        Developer
                    </h4>
                    <div className={"teammate-card__vitals"}>
                        <a href={"https://twitter.com/franciscogfdz"} className={"right"}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                </div>
                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Me} alt={"me"}/>
                    <h4 className={"teammate-card__name"}>
                        Erzihark
                    </h4>
                    <h4 className={"teammate-card__role"}>
                        Developer
                    </h4>
                    <div className={"teammate-card__vitals"}>
                        <a href={"https://twitter.com/Erzihark"} className={"right"}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                        <a href={'https://www.linkedin.com/in/manuel-sanchez-2b43801bb/'} target={"_blank"} rel={"noopener noreferrer"}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </div>
                </div>
                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Juanma} alt={"juanma"}/>
                    <h4 className={"teammate-card__name"}>
                        Lunefists
                    </h4>
                    <h4 className={"teammate-card__role"}>
                        CMGR
                    </h4>
                    <div className={"teammate-card__vitals"}>
                        <a href={"https://twitter.com/JMSamV"} className={"right"}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
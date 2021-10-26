import React from 'react'
import Erick from './images/Erick.webp'
import Fran from './images/Fran.webp'
import Cesar from './images/Cesar.webp'
import Me from './images/Me.webp'
import Dobby from './images/Dobby.webp'
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
                        <h3 className={"teammate-card__name"}>
                            CAbot
                        </h3>
                        <h4 className={"teammate-card__role"}>
                            Digital Artist
                        </h4>
                        <div className={"teammate-card__vitals"}>
                            <a href={'https://www.instagram.com/c_a_bot?r=nametag'}>
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                        </div>
                    </div>

                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Erick} alt={"erick"}/>
                    <h3 className={"teammate-card__name"}>
                        Hidake
                    </h3>
                    <h4 className={"teammate-card__role"}>
                        Project Manager
                    </h4>
                </div>
                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Fran} alt={"fran"}/>
                    <h3 className={"teammate-card__name"}>
                        Luxroy
                    </h3>
                    <h4 className={"teammate-card__role"}>
                        Developer
                    </h4>
                </div>
                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Me} alt={"me"}/>
                    <h3 className={"teammate-card__name"}>
                        Erzihark
                    </h3>
                    <h4 className={"teammate-card__role"}>
                        Developer
                    </h4>
                    <div className={"teammate-card__vitals"}>
                        <a href={'https://github.com/erzihark'}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href={'https://www.linkedin.com/in/manuel-sanchez-2b43801bb/'}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </div>
                </div>
                <div className={"teammate-card"}>
                    <img className={"teamamte-card__img"} src={Dobby} alt={"dobby"}/>
                    <h3 className={"teammate-card__name"}>
                        StarMaso
                    </h3>
                    <h4 className={"teammate-card__role"}>
                        Discord
                    </h4>
                </div>
            </div>
        </section>
    )
}
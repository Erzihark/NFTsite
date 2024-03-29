import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faDiscord, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
library.add(faTwitter)
library.add(faDiscord)

export default function Navbar(){
    return(
            <StickyNav length='5' >
                <a href={"#introduction"} className={"active"}>Home</a>
                <a href={"#about-project"} >About</a>
                <a href={"https://twitter.com/NechromaticsNFT"} className={"right"}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <a href={"https://discord.gg/EnTSwDyDxc"} className={"right"} target={"_blank"} rel={"noopener noreferrer"}>
                    <FontAwesomeIcon icon={['fab', 'discord']} />
                </a>
            </StickyNav>
    )
}


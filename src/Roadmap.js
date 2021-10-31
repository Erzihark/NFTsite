import React from "react"
import roadmap from "./images/roadmap.webp"

export default function Roadmap(){
    return (
        <section className={"roadmap"}>
            <div className={"roadmap-flexbox"}>
                <div className={"roadmap-img__container"}>
                    <img className={"roadmap-img"} src={roadmap} alt={"roadmap img"}/>
                </div>
                <div className={"roadmap-list__container"}>
                    <ul className={"roadmap-list"}>
                        <li><span>Exclusive Collection of 100 Nechromatics</span></li>
                        <li><span>Implement Nechromatics’ Lottery System 1.0 (30% of royalties go to a lottery wallet for holders)</span></li>
                        <li><span>Begin development of our second collection</span></li>
                        <li><span>Collaborations with other SOL Projects</span></li>
                        <li><span>Community contests with prizes</span></li>
                        <li><span>Release 6,666 Phantomatic</span></li>
                        <li><span>Introduce Holder’s Lottery System 2.0 (30% of royalties go to collection 2 lottery wallet, and 20% go to collection 1 lottery wallet)</span></li>
                        <li><span>Merchandise Production (shirts, mugs, hats, etc.)</span></li>
                        <li><span>3D Printed figurines of the first 100 Nechromatics </span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
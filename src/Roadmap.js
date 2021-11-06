import React from "react"
import roadmap from "./images/roadmap.webp"

export default function Roadmap(){
    return (
        <section className={"roadmap"}>
            <h2 className={"roadmap-title"}>Roadmap</h2>
            <div className={"roadmap-flexbox"}>
                <div className={"roadmap-img__container"}>
                    <img className={"roadmap-img"} src={roadmap} alt={"roadmap img"}/>
                </div>
                <div className={"roadmap-list__container"}>
                    <ul className={"roadmap-list"}>
                        <li><span>Exclusive Collection of <strong>100</strong> Nechromatics with perks for next collection ( </span><strong>LIVE NOW!</strong> )</li>
                        <li><span>Implement Nechromatics’ Lottery System 1.0 (<strong>30%</strong> of royalties go to a lottery wallet for holders)</span></li>
                        <li><span>Begin development of our second <strong>6,666</strong> Nechromatics collection</span></li>
                        <li><span>Collaborations with other SOL Projects</span></li>
                        <li><span>Community contests with prizes</span></li>
                        <li><span>Introduce Holder’s Lottery System 2.0 (<strong>30%</strong> of royalties go to collection 2 lottery wallet, and <strong>20%</strong> go to collection 1 lottery wallet)</span></li>
                        <li><span>Merchandise Production (shirts, mugs, hats, etc.)</span></li>
                        <li><span>3D Printed figurines of the first 100 Nechromatics </span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
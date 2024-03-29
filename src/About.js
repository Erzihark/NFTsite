import React from "react"
import nechro from "./video/spin.webm"


export default function About() {
    return (
            <section className={"about"} id={"about-project"}>
                <div className={"about-text"}>
                    <h1 className={"about-text__title"}>
                        100 stylish skeletons
                    </h1>
                    <br/>
                    <h3>Nechromatics are a collection of hand-drawn NFT's on
                    the Solana blockchain.
                    All are unique and carefully designed by our digital artist.</h3>
                </div>
                <video className={"about-img"} width={500} autoPlay muted loop>
                    <source src={nechro} type={"video/mp4"}/>
                </video>
            </section>
    )
}
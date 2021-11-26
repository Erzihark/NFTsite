import React from "react";
import logo from "./images/logoS.webp"
import nechro from "./video/display.webm";

export default function Intro(){
    return (
        <section className={"intro"} id={"introduction"}>
            <div className={"intro-flexbox"}>
                <div className={"intro-flexbox__left"}>
                    <div className={"intro-logo__container"}>
                        <img className={"intro-img"} src={logo} alt={"nechromatics logo"}/>
                    </div>
                    <h3 className={"intro-text"}>
                        It's well past spooky season, but the dead are roaming the land of the living regardless...
                    </h3>
                </div>
                <div className={"intro-flexbox__right"}>
                    <video className={"intro-flexbox__right-img"} width={400} autoPlay muted loop>
                        <source src={nechro} type={"video/mp4"}/>
                    </video>
                </div>
            </div>
        </section>
    )
}
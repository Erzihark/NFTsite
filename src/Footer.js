import React from "react";
import Sol from "./images/solana-sol-logo.svg";

export default function Footer(){
    return (
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <h1 className={"footer-container__top"}>
                    Relaunch coming soon
                </h1>
                <div className={"solana"}>
                    <h4 className={"footer-container__bottom"}>
                    Powered by Solana
                        <img src={Sol} height={15} width={20} alt={"Solana logo"}/>

                    </h4>
                </div>

            </div>
        </footer>
    )
}
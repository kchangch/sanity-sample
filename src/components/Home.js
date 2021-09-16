import React from "react"
import Particles from 'react-particles-js';
import particlesConfig from "./particlesConfig";
import image from "../background.jpeg"

export default function Home() {
    return (
        <main className="relative">
            {/* <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/> */}
            <img 
                src={image}
                alt="Background"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 
                    className="text-6xl textColor font-bold cursive leading-none lg:leading-snug home-name" 
                    style={{color: "#66fcf1"}}
                >
                    Welcome!
                </h1>
            </section>
        </main>
    )
}
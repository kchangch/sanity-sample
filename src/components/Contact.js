import React from "react"
import image from "../background.jpeg"

export default function Contact() {
    return (
        <main className="relative">
            {/* <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/> */}
            <img 
                src={image}
                alt="Background"
                className="absolute object-cover w-full h-full"
            />
            <article className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
                <div className="text-lg justify-center">
                    <div className="justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4 justify-center">
                            Get In Touch!
                        </h1>
                    </div>
                    <div className="py-5 prose lg:prose-xl max-w-full">
                        <article className="prose lg:prose-xl justify-center">
                            <p className="text-3xl text-white">
                                I am currently looking for opportunities focused on Back-End Development. 
                                However, I am open for any and every opportunity. Feel free to send me an email. 
                                I would love to connect with you!
                            </p>
                        </article>
                    </div>
                </div>
            </article>
        </main>
    )
}
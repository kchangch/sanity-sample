import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';
import particlesConfig from "./particlesConfig";
import image from "../background.jpeg"

export default function Work() {

    const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return (
        <main className="relative">
            {/* <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/> */}
            <img 
                src={image}
                alt="Background"
                className="absolute object-cover w-full h-full"
            />
            {/* <div className="p-10 container mx-auto relative"> */}
            <div className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
                <section className="container mx-auto">
                    <h1 className="text-5xl flex justify-center cursive textColor">My Work Experience</h1>
                    {/* <h2 className="text-lg text-gray-500 flex justify-center mb-12 pt-5">Welcome to my Blog Posts</h2> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
                        { postData && postData.map((post, index) => (
                            <article>
                                <Link to={"/work/" + post.slug.current} key={post.slug.current}>
                                    <span 
                                        className="block h-60 relative rounded shadow leading-snug bg-white border-l-8 border-green-400 justify-center flex items-center"
                                        key={index}
                                    >
                                        <img 
                                            src={post.mainImage.asset.url}
                                            alt={post.mainImage.alt}
                                            className="w-full h-full rounded-r object-cover absolute"
                                            style={{height: "auto", maxWidth: "90%"}}
                                        />
                                    </span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../background.jpeg"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div className="min-h-screen p-12 bg-black text-white flex justify-center">Loading...</div>

    return (
        <main className="relative">
            {/* <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/> */}
            <img 
                src={image}
                alt="Background"
                className="absolute object-cover w-full h-full"
            />
            <div className="p-10 container mx-auto relative">
                <section className="lg:flex p-20 justify-center">
                    <img 
                        src={urlFor(author.authorImage).url()} 
                        className="rounded-full w-25 h-25 lg:w-64 lg:h-64 mr-8 border-2"
                        style={{borderColor: "#66fcf1"}} 
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there. I'm{" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="m7sihnvj" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
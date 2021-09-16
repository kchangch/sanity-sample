import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../background.jpeg"

const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source);
// }

export default function SingleWork() {

    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();
    
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error)
    }, [slug]);

    if (!singlePost) return <div className="min-h-screen p-12 bg-black text-black flex justify-center">Loading...</div>

    return (
        <main className="relative">
            <img 
                src={image}
                alt="Background"
                className="absolute object-cover w-full h-full"
            />
            <article className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
                <div className="text-lg justify-center">
                    <div>
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            {singlePost.title}
                        </h1>
                    </div>
                    <div className="py-5 prose lg:prose-xl max-w-full">
                        <BlockContent blocks={singlePost.body} projectId="m7sihnvj" dataset="production" className="text-white"/>
                    </div>
                </div>
            </article>
        </main>
    )
}
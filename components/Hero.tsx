"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll =()=> {}
 return(
    <div className="hero">
        <div className="flex-1 pt-36 padding-x" >
            <h1 className="hero_title font-extrabold text-4xl ">
                Find, book, or rent a car --quickly
                and easily!
            </h1>
            
<p className="hero_subtitle">
    Streamline your car rental expereince
    with our effortless booking process.
</p>
<CustomButton
title="Explore Cars"
containerStyles="bg-primary-blue text-white rounded-full mt-10"
handleClick={handleScroll}

/>
        </div>
        <div className="hero_image_container mt-10">
            <div className="hero_image">
            <Image src="/hero.png" alt="hero" layout="responsive" width={1440} height={900} className="hero__image object-contain"/>
            <div className="hero__image-overlay"/>
            </div>
        </div>
    </div>
 )
}
export default Hero
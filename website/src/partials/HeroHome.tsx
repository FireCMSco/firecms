import React, { Suspense } from "react";
import HeroButtons from "./HeroButtons";
import BrowserOnly from "@docusaurus/BrowserOnly";

// @ts-ignore
import darkModeVideo from "@site/static/img/dark_mode.mp4";

// const LazyThreeJSAnimationShader = React.lazy(() => import("../shape/ThreeJSAnimationShader"));

function HeroHome({}) {

    const video = <div
        // data-aos="fade-up"
        data-aos="fade-left"
        data-aos-delay="400"
        className="max-h-96 xl:max-h-max xl:max-w-3xl px-8 sm:px-16 md:px-24 xl:px-4 flex content-center justify-center">
        <video
            style={{
                aspectRatio: 512 / 384
            }}
            className={"rounded-xl border border-solid dark:border-gray-800 border-gray-200 max-w-lg xl:max-w-none"}
            width="100%"
            loop autoPlay muted>
            <source src={darkModeVideo} type="video/mp4"/>
        </video>
    </div>;

    const titleDiv = <div
        className="px-8 md:px-16 my-4 xl:my-8">

        <div className="text-center xl:text-right">
            <h1 className="block tracking-tight text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
                <div className={"block"}>
                <span
                    data-aos="zoom-y-out"
                    data-aos-delay="100">Your </span>
                    <span
                        data-aos="zoom-y-out"
                        data-aos-delay="200"
                        style={{
                            // mixBlendMode: "color-dodge",
                            fontSize: "10rem",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            backgroundImage: "linear-gradient(to right, #EC4C51, #FA5574, #9543C1, #9543C1)"
                        }}
                        className="font-extrabold text-transparent bg-clip-text">CMS</span>
                </div>
                <span
                    data-aos="zoom-y-out"
                    data-aos-delay="300">based on </span>
                <span
                    data-aos="zoom-y-out"
                    data-aos-delay="400"
                    className={"text-5xl md:text-8xl "}
                    style={{ color: "#FFA000" }}>Firebase</span>

            </h1>

            <h2 className={"text-3xl"}>
                The missing piece for your project
            </h2>

            <div className="mt-8 mb-8 flex justify-center xl:justify-end">
                <HeroButtons/>
            </div>

        </div>

    </div>;

    return (
        <section className="relative my-16" style={{
            isolation: "isolate"
        }}>

            <div className="xl:grid xl:grid-cols-12 xl:my-24 md:my-16 my-8">

                <div
                    className={"col-span-7 xl:flex xl:items-center xl:justify-end"}>
                    {titleDiv}
                </div>

                <div className={"col-span-5 xl:flex xl:items-center"}>
                    {video}
                </div>

            </div>

        </section>
    );
}

export default HeroHome;

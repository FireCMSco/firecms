import React from "react";
import HeroButtons from "./HeroButtons";

// @ts-ignore
import editingDemoDarkVideo from "@site/static/img/demo_square_2.webm";
import { defaultBorderMixin } from "../styles";
import { Panel } from "../general/Panel";
import clsx from "clsx";
import { LinedSpace } from "../layout/LinedSpace";
import { MainHeroBackground } from "../general/MainHeroBackground";

function HeroHome({}) {


    const video = <div
        className={"flex flex-col items-center content-center justify-center -m-px"}>
        <video
            style={{
                pointerEvents: "none",
                aspectRatio: 1,
                padding: "1px",
            }}
            className={clsx("rounded-2xl")}
            width="100%"
            loop autoPlay muted>
            <source src={editingDemoDarkVideo}
                    type="video/mp4"/>
        </video>
    </div>;

    const titleDiv = <>

        <h1 className={clsx("m-0 text-center block text-5xl md:text-6xl font-extrabold tracking-tight leading-none uppercase text-white",
            "px-16 md:px-24 py-8 md:py-16",
            "border-0 border-b",
            defaultBorderMixin)}>
            <span className={"block"}>
                <span>Your </span>
                <span
                    style={{
                        // mixBlendMode: "color-dodge",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(to right, #EC4C51, #FA5574, #9543C1, #9543C1)"
                    }}
                    className="font-extrabold text-transparent bg-clip-text text-7xl md:text-8xl">CMS</span>
            </span>
            <span>based on </span>
            <span
                className={"text-5xl md:text-7xl"}
                style={{ color: "#FFA000" }}>Firebase</span>

            <span style={{
                whiteSpace: "nowrap",
                color: "#001E2B",
                background: "#00ed64",
                // color: "white",
                // background: "#00684A",
                borderRadius: "4px",
                padding: "4px 8px",
                fontSize: "large",
                position: "absolute",
                transform: "translateX(-78px) translateY(60px) rotate(-13deg)"
            }}>or MongoDB</span>

        </h1>

        <HeroButtons/>

        <h2 className={clsx("font-mono text-center uppercase m-0 text-2xl px-8 md:px-16 py-8 md:py-12 border-0 border-t text-white", defaultBorderMixin)}>
            The prime choice for innovative CMS
        </h2>


    </>;

    return (
        <div
            className={clsx("w-full relative border-0 border-b -mt-20 bg-gray-950", defaultBorderMixin)}>
            <MainHeroBackground/>
            <Panel includeMargin={false}
                   includePadding={false}
                   container={false}
                   color={"transparent"}
                   className={"border-t-0"}>
                <div className={"h-20 "}/>
                <div className="flex flex-wrap w-full">
                    <div className={clsx("w-full lg:w-1/2 border-0 border-r", defaultBorderMixin)}>
                        <LinedSpace/>
                        {titleDiv}
                    </div>
                    <div className="w-full lg:w-1/2">
                        {video}
                    </div>
                </div>
                <LinedSpace position={"top"}/>
            </Panel>
        </div>
    );
}

export default HeroHome;

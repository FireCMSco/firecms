import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";


import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";

import Separator from "../partials/Separator";
import FirebaseIntro from "../partials/FirebaseIntro";

import AOS from "aos";
import "aos/dist/aos.css";
import "../css/tailwind.css";
import Pricing from "../partials/Pricing";
import Head from "@docusaurus/Head";
import { Newsletter } from "../partials/Newsletter";
import { PagesBackground } from "../partials/PagesBackground";
import { FireCMSCloudIntro } from "../partials/FireCMSCloudIntro";

// import { Newsletter } from "../partials/Newsletter";

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    const documentEnabled = ExecutionEnvironment.canUseDOM ? document : undefined

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            AOS.init();
            updateDarkModeClass();
        }
    }, [ExecutionEnvironment.canUseDOM, documentEnabled]);

    function updateDarkModeClass() {
        if (!document) return;
        if (document.documentElement?.dataset?.theme === "dark" && !document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        if (!ExecutionEnvironment.canUseDOM) return;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(function(mutation) {
                if (mutation.type == "attributes"
                    && mutation.attributeName === "data-theme") {
                    updateDarkModeClass();
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            childList: false,
            subtree: false
        });
        return () => {
            observer.disconnect();
        };
    }, [ExecutionEnvironment.canUseDOM, documentEnabled]);


    return (
        <Layout
            title={"FireCMS"}
            description="Awesome headless CMS based Firestore/Firebase and React, and completely open-source">
            <Head>
                <title>FireCMS - Firestore/Firebase headless CMS</title>
            </Head>
            <div className="flex flex-col min-h-screen overflow-hidden ">

                <main className="flex-grow">

                    <HeroHome/>

                    {/*<Separator/>*/}

                    <FireCMSCloudIntro/>
                    {/*<Separator/>*/}

                    <FirebaseIntro/>

                    <FeaturesHome/>
                    {/*<Separator/>*/}

                    <FeaturesBlocks/>
                    {/*<Separator/>*/}

                    <Pricing/>
                    {/*<Separator/>*/}


                    <Testimonials/>

                    <Newsletter/>

                </main>

            </div>
        </Layout>
    );
}

export default Home;


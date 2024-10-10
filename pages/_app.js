import "@/styles/globals.css";

import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
        };

        window.addEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt
        );

        return () => {
            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt
            );
        };
    }, []);

    return (
        <>
            <Head>
                <link rel='manifest' href='/manifest.json' />
                <meta name='theme-color' content='#000000' />
                <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
                <meta
                    name='description'
                    content='A Progressive Web App built with Next.js'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

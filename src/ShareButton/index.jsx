import React from "react";
import html2canvas from "html2canvas";

const ShareButton = () => {
    const takeScreenshot = async () => {
        try {
            const canvas = await html2canvas(document.body);
            const screenshot = await canvas.toBlob((blob) => {
                const item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item]);
                alert(
                    "Screenshot copied to clipboard! You can now paste it (Ctrl + V) or open editing tools."
                );
            });
        } catch (err) {
            console.error("Failed to capture screenshot:", err);
            alert("Failed to capture screenshot.");
        }
    };

    return (
        <button onClick={takeScreenshot} className='absolute top-4 right-4'>
            <svg
                viewBox='0 0 72 72'
                xmlns='http://www.w3.org/2000/svg'
                className='h-9 w-9 9 '
            >
                <g
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 2,
                    }}
                >
                    <circle cx='50' cy='22' r='5' />
                    <circle cx='22' cy='38' r='5' />
                    <circle cx='50' cy='50' r='5' />
                    <path d='m27 40 18 8' />
                    <path d='m45 25-18 10' />
                </g>
            </svg>
        </button>
    );
};

export default ShareButton;

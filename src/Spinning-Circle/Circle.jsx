import React, { useState } from "react";

export default function Circle() {
    const [angle, setAngle] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [borderScale, setBorderScale] = useState(1);
    const [scaleDirection, setScaleDirection] = useState(1);
    const texts = [
        { rate: "1,000,000", title: "On Average" },
        { rate: "10000", title: "Approximately" },
        { rate: "1040", title: "In the year 1402" },
        { rate: "300", title: "Text" },
    ];
    const circleCount = 8;
    const handleMouseDown = () => {
        setIsSwiping(true);
    };

    // Handle mouse up to stop swiping
    const handleMouseUp = () => {
        setIsSwiping(false);
        snapToNearestBlackCircle();
        setBorderScale(1);
    };

    // Handle mouse movements to rotate and scale the border
    const handleMouseMove = (e) => {
        if (isSwiping) {
            setAngle((prev) => (prev + e.movementX) % 360);

            setBorderScale((prev) => {
                const newScale = prev + 0.003 * scaleDirection;
                if (newScale >= 1.05) {
                    setScaleDirection(-1);
                    return 1.05;
                } else if (newScale <= 0.95) {
                    setScaleDirection(1);
                    return 0.95;
                }
                return newScale;
            });

            const normalizedAngle = (angle + e.movementX + 360) % 360;
            const index = Math.floor(normalizedAngle / (360 / circleCount));

            if (index % 2 === 0) {
                const currentTextIndex = Math.floor(index / 2);

                if (
                    currentTextIndex < texts.length &&
                    currentTextIndex !== textIndex &&
                    (currentTextIndex > 0 ||
                        currentTextIndex < texts.length - 1)
                ) {
                    setTextIndex(currentTextIndex);
                }
            }
        }
    };

    const snapToNearestBlackCircle = () => {
        const normalizedAngle = (angle + 360) % 360;
        const index =
            Math.round(normalizedAngle / (360 / circleCount)) % circleCount;

        if (index % 2 === 0) {
            setAngle((index * (360 / circleCount)) % 360);
            const currentTextIndex = index / 2;

            if (currentTextIndex < texts.length) {
                setTextIndex(currentTextIndex);
            }
        } else {
            const prevBlackCircleIndex = index - 1;
            setAngle((prevBlackCircleIndex * (360 / circleCount)) % 360);
            const currentTextIndex = prevBlackCircleIndex / 2;

            if (currentTextIndex < texts.length) {
                setTextIndex(currentTextIndex);
            }
        }
    };

    return (
        <div
            className='h-screen w-screen flex items-center justify-center'
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ userSelect: "none" }}
        >
            <div className='relative flex items-center justify-center'>
                <div
                    className=' flex items-center  justify-center w-48 h-48 p-3  bg-white  bg-opacity-30   rounded-full '
                    style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className='text-center space-y-2'>
                        <div className='text-sm text-gray-700 '>
                            {" "}
                            {texts[textIndex].title}
                        </div>
                        <div className='text-2xl font-bold'>
                            {texts[textIndex].rate}
                        </div>
                        <div className='text-xs text-gray-700 '>
                            Test Test Test Test Test Test Test Test
                        </div>
                    </div>
                </div>
                <div
                    className='absolute w-64 h-64 rounded-full border-2 border-black flex items-center justify-center'
                    style={{
                        transform: `rotate(${angle}deg) scale(${borderScale})`,
                        transition: "transform 0.1s ease",
                    }}
                >
                    {[...Array(circleCount)].map((_, i) => {
                        const isBlack = i % 2 === 0;
                        return (
                            <div
                                key={i}
                                className={`w-4 h-4 rounded-full absolute ${
                                    isBlack ? "bg-black" : "bg-gray-400"
                                }`}
                                style={{
                                    transform: `rotate(${
                                        (i * 360) / circleCount
                                    }deg) translate(128px)`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

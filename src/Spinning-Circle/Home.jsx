import React from "react";
import Circle from "./Circle";
import ShareButton from "../ShareButton";

export default function Home() {
    return (
        <div className='min-h-screen flex items-center justify-center overflow-hidden relative'>
            <ShareButton />
            <Circle />
        </div>
    );
}

import { useRouter } from "next/router";
import React from "react";

const Landing = () => {
    const router = useRouter();

    const handleSubmit = () => {
        router.push("/Spinning-Circle");
    };
    return (
        <div className='h-screen flex items-center flex-col justify-center space-y-10'>
            <div
                className='flex items-center flex-col  bg-opacity-40  bg-white w-64 h-50 py-7 rounded-3xl'
                style={{ boxShadow: "0 2px 20px rgba(0, 0, 0, 0.25)" }}
            >
                <div className='text-lg font-bold'>Welcome,</div>
                <div className='text-lg'>A review of the year 1402 🎉</div>
            </div>
            <button
                onClick={handleSubmit}
                className='  bg-opacity-40  bg-white  p-2 px-6 rounded-full'
                style={{ boxShadow: "0 2px 20px rgba(0, 0, 0, 0.25)" }}
            >
                See More ➡️
            </button>
        </div>
    );
};

export default Landing;

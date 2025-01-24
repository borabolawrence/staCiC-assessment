"use client";

import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    const reset = () => setCounter(0);

    const isEven = counter % 2 === 0;

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <div className="text-2xl font-bold">Counter: {counter}</div>

            <div className={`text-lg ${isEven ? "text-green-500" : "text-red-500"}`}>
                {isEven ? "Even" : "Odd"}
            </div>

            <div className=" flex flex-col items-center justify-center md:flex-row gap-6 md:gap-y-4">
                <button
                    onClick={increment}
                    className="py-2 w-36 text-white bg-sky-700/80 rounded-md hover:bg-sky-800 transition duration-300"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="py-2 w-36 text-white bg-red-400 rounded-md hover:bg-red-800/60 transition duration-300"
                >
                    Decrement
                </button>
                <button
                    onClick={reset}
                    className="py-2 w-36 text-white bg-cyan-600/80 rounded-md hover:bg-cyan-400 transition duration-300"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

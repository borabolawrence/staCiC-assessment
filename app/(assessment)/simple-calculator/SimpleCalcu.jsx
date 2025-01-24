"use client";

import { useState } from "react";

export default function SimpleCalcu() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleReset = () => {
        setNum1(0);
        setNum2(0);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                className="p-2 border rounded"
                placeholder="Enter first number"
            />

            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                className="p-2 border rounded"
                placeholder="Enter second number"
            />

            <div className="text-lg font-bold">
                Sum: {num1 + num2}
            </div>

            <button
                onClick={handleReset}
                className="px-4 py-2 w-[200] text-white bg-blue-500/70 hover:text-gray-800 duration-200 rounded-md shadow-md hover:shadow-lg"
            >
                <span className="p-4 font-bold">Reset</span>
            </button>
        </div>
    );
}

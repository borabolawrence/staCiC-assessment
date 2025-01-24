import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export default function AssessmentLayout({ children }) {
    return (
        <section>
            <div className="fixed top-4 left-4 z-50 p-2 bg-gray-100/60 rounded shadow-md">
                <Link href="/" className=" flex flex-row text-gray-800 font-bold hover:text-blue-500 duration-200 cursor-pointer border-gray-400">
                <ArrowBigLeft />
                <span>Back</span>
                </Link>
            </div>
            {children}
        </section>
    );
}

"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Show(){

    const router = useRouter();
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [selectedRating, setSelectedRating] = useState(0);

    function navigateWrite(){
        router.push("/Write")
    }

    function Rating(){
        const result = [];
        var star;
        for (let i = 1; i <= 5; i++){
            star = <svg key={i} className={`w-4 h-4 fill-current ${
                        i <= (hoverIndex === -1 ? selectedRating : hoverIndex)
                        ? "text-green-800"
                        : "text-gray-400"
                }`}
                    viewBox="0 0 20 20"
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(-1)} 
                    onClick={() => setSelectedRating(i)}
                   >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                    </svg>;
            result.push(star);
        }
        return(
            result
        )
    }

    function Rated(){
        alert(selectedRating);
    }
    return (
        <>
            <div className="flex justify-between m-5 header">
                <div>
                    <h1 className="font-serif font-medium text-green-800 text-3xl">Story-Sphere</h1>
                </div>
                <div className="flex">
                    <div>
                        <button className="rounded-lg border-2 border-solid bg-green-800 hover:bg-green-900 px-2 py-1 text-white text-l mx-3" onClick={navigateWrite}>Write Story</button>
                    </div>
                </div>
            </div>

            <div className="m-5 details">
                <p>Author: Raj</p>
                <p>Title: Robot</p>
            </div>

            <div className="flex m-5 border-2 p-2 body">
                <p>this is the story</p>
            </div>
            <div className="m-5">
                <p className="font-semibold text-green-800">Rate the Story</p>
                <div className="flex mt-2">
                    <Rating />
                </div>
                <button className="p-1 bg-green-800 text-white mt-2 rounded text-sm" onClick={Rated}>Submit</button>
                    
            </div>
        </>
    )
}
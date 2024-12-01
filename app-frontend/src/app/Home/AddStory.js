"use client"
import {useRouter} from "next/navigation"
import { useState } from "react";
import { useEffect } from "react";

export default function AddPhoto() {

    const router = useRouter();

    function Show(){
        router.push("/Show");
    }

    function AddStar(rate){

        const result = [];
        var star;
        rate = rate.rate
        for (let i = 1; i <= rate; i++){
            star = <svg key={i} className="w-4 h-4 text-green-700 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" /> </svg>;
            result.push(star);
        }
        for (let i = rate + 1; i <= 5; i++){
            star = <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" /> </svg>;
            result.push(star);
        }
        return(
            result
        )
    }

    function FetchData(){

        const [rows, setRows] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8989/GetStory").then((data) => data.json()).then((data) => setRows(data));
            }, []);
    return (
        <>
        { rows.map((row, index) => (
            
            <div key={index} className="mt-5 mx-5 border-2 p-2 rounded" onClick={Show}>
                <div>
                    <img className="w-[300px] h-[200px]" src="/Robot-Story.jpg" alt="Picture of Robot Story"/>
                </div>
                <div className="my-2">
                    <div className="flex justify-between">
                        <p className="font-serif text-sm">{row.author}</p>
                        <p className=" text-sm">{row.date.slice(0,10)}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-green-800">{row.title}</h3>
                        <p className="italic text-sm">{row.story}.</p>
                    </div>
                    <div className="flex justify-between my-1">
                        <div id="rating" className="flex">       
                            <AddStar rate={row.rating}/>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-green-800">Views:{row.views}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
        }  
        </>
    )
}

    return (
        <>
            <FetchData />
        </>
    )
}
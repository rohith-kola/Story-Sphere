"use client"

import AddStory from "./AddStory";
import Header from "./header";

export default function Main(){
    
    return(
        <div>
            <Header />
            <div className="flex justify-between my-10 mx-5">
                <div>
                    <h1 className="font-serif font-medium text-2xl">Stories</h1>
                </div>
                <div>
                    <button className="rounded-full border-solid bg-green-800 hover:bg-green-900 px-3 py-1 text-white text-l">Filter</button>
                </div>
            </div>

            <div>
                <hr className="h-px mx-5 bg-gray-300 border-0 dark:bg-gray-700" />
            </div>

            <div className="flex flex-wrap">

                <AddStory />  

            </div>

            <div>
                <hr className="h-px m-5 bg-gray-300 border-0 dark:bg-gray-700" />
            </div>

            <div id="About" className="flex flex-col m-5">
                <div>
                    <h3 className="text-green-800 font-semibold">About</h3>
                </div>
                <div>
                    <p className="text-sm">Designed by <span className="text-green-800 font-semibold">Rohith Kola</span></p>
                </div>
            </div>

        </div>
    )
}
"use client"
import { useState } from "react"

export default function Write(){

    const [file, setFile] = useState();

    function HandleChange(e){
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
        <div className="flex flex-col">
            <div className="flex m-5">
                <div>
                    <h1 className="font-serif font-medium text-green-800 text-3xl">Story-Sphere</h1>
                </div>
            </div>
            <div className="mx-5">
                <form>
                    <label className="text-green-800 font-bold text-xl">Write Story</label>
                    <br />
                    <label className="text-green-800 text-l">Your Name</label>
                    <br />
                    <input className=" border-2 rounded mb-3 p-1" type="text"></input>
                    <br />
                    <label className="text-green-800 text-l">Title of Story</label>
                    <br />
                    <input className="w-full border-2 rounded mb-3 p-1" type="text"></input>
                    <br />
                    <label className="text-green-800 text-l mty-3">Story</label>
                    <textarea className="w-full h-[240px] border-2 rounded mb-3 p-1"></textarea>
                    <br />
                    <input className="mb-3" type="file" onChange={HandleChange} accept="image/*"/>
                    {file && (<img className=" w-[300px] h-[200px] object-cover" src={file} />)}
                    <br />
                    <button className="border bg-green-700 text-white font-bold p-1 rounded " type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default function Write(){
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
                    <input className=" border-2 rounded mb-3" type="text"></input>
                    <br />
                    <label className="text-green-800 text-l">Title of Story</label>
                    <br />
                    <input className="w-full border-2 rounded mb-3" type="text"></input>
                    <br />
                    <label className="text-green-800 text-l mty-3">Story</label>
                    <textarea className="w-full h-32 border-2 rounded mb-3"></textarea>
                    <br />
                    <input className="border bg-green-700 text-white font-bold p-1 rounded " type="submit"></input>
                </form>
            </div>
        </div>
        </>
    )
}
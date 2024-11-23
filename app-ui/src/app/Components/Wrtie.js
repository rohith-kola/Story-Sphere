export function Write(){
    return (
        <>
        <div className="flex flex-col">
            <div className="flex m-5">
                <div>
                    <h1 className="font-serif font-medium text-green-800 text-3xl">Story-Sphere</h1>
                </div>
            </div>
            <div className="m-5">
                <form>
                    <label className="text-green-800 font-bold text-xl">Write Story</label>
                    <br />
                    <input className="border-2 rounded" type="text"></input>
                    <br />
                    <input className="border my-3 bg-green-700 text-white font-bold p-1 rounded" type="submit"></input>
                </form>
            </div>
        </div>
        </>
    )
}
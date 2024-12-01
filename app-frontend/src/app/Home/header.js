import { useRouter } from "next/navigation"
import Link from "next/link"

export default function header(){

    const router = useRouter();

    function navigateWrite(){
        router.push("/Write")
    }

    return (
        <>
            <div className="flex justify-between m-5">
                <div>
                    <h1 className="font-serif font-medium text-green-800 text-3xl">Story-Sphere</h1>
                </div>
                <div className="flex">
                    <div>
                        <button className="rounded-lg border-2 border-solid bg-green-800 hover:bg-green-900 px-2 py-1 text-white text-l mx-3" onClick={navigateWrite}>Write Story</button>
                    </div>
                    <div>
                        <Link href="#About"><button className="rounded-lg border-2 border-solid bg-green-800 hover:bg-green-900 px-2 py-1 text-white text-l">About</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
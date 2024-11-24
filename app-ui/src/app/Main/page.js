"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Main(){

    const router = useRouter();

    function navigateWrite(){
        router.push("/Write")
    }
    
    return(
        <div>
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

            <div className="flex justify-between my-12 mx-5">
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
                <div className="my-10 mx-5 border p-1 rounded">
                    <div>
                        <Image  
                        src="/Robot-Story.jpg"
                        width={350}
                        height={300}
                        alt="Picture of Robot Story"
                        />
                    </div>
                    <div className="my-2">
                        <div className="flex justify-between">
                            <p className="font-serif text-sm">Rohith Kola</p>
                            <p className="font-serif text-sm">Nov 16</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-green-800">Monster Robot</h3>
                            <h4 className="italic">A robot became a monster after seeing a movie</h4>
                        </div>
                        
                        <div className="flex justify-between my-1">
                            <div id="rating" className="flex">
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="1"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="2"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="3"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="4"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="5"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                            </div>

                            <div>
                                <p className="font-bold text-sm text-green-800">Views:567</p>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="my-10 mx-5 border p-1 rounded">
                    <div className="justify-stretch">
                        <Image  
                        src="/Robot-Story.jpg"
                        width={350}
                        height={300}
                        alt="Picture of Robot Story"
                        />
                    </div>
                    <div className="my-2">
                        <div className="flex justify-between">
                            <p className="font-serif text-sm">Rohith Kola</p>
                            <p className="font-serif text-sm">Nov 16</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-green-800">Monster Robot</h3>
                            <h4 className="italic">A robot became a monster after seeing a movie</h4>
                        </div>
                        
                        <div className="flex justify-between my-1">
                            <div id="rating" className="flex">
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="1"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="2"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="3"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="4"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="5"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                            </div>

                            <div>
                                <p className="font-bold text-sm text-green-800">Views:567</p>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="my-10 mx-5 border p-1 rounded">
                    <div>
                        <Image  
                        src="/Robot-Story.jpg"
                        width={350}
                        height={300}
                        alt="Picture of Robot Story"
                        />
                    </div>
                    <div className="my-2">
                        <div className="flex justify-between">
                            <p className="font-serif text-sm">Rohith Kola</p>
                            <p className="font-serif text-sm">Nov 16</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-green-800">Monster Robot</h3>
                            <h4 className="italic">A robot became a monster after seeing a movie</h4>
                        </div>
                        
                        <div className="flex justify-between my-1">
                            <div id="rating" className="flex">
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="1"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="2"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="3"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="4"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="5"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                            </div>

                            <div>
                                <p className="font-bold text-sm text-green-800">Views:567</p>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="my-10 mx-5 border p-1 rounded">
                    <div className="justify-stretch">
                        <Image  
                        src="/Robot-Story.jpg"
                        width={350}
                        height={300}
                        alt="Picture of Robot Story"
                        />
                    </div>
                    <div className="my-2">
                        <div className="flex justify-between">
                            <p className="font-serif text-sm">Rohith Kola</p>
                            <p className="font-serif text-sm">Nov 16</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-green-800">Monster Robot</h3>
                            <h4 className="italic">A robot became a monster after seeing a movie</h4>
                        </div>
                        
                        <div className="flex justify-between my-1">
                            <div id="rating" className="flex">
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="1"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="2"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="3"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="4"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-400 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-value="5"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951-3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 1.286-3.95z" />
                                </svg>
                            </div>

                            <div>
                                <p className="font-bold text-sm text-green-800">Views:567</p>
                            </div>
                        </div>

                    </div>


                </div>

                

            </div>


            <div>
                <hr className="h-px mx-5 bg-gray-300 border-0 dark:bg-gray-700" />
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
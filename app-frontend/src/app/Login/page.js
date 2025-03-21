"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username == "rohit" && password == "123"){
            router.push('/Home');
        }
        else{
            alert("Invalid credentials")
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col bg-white p-8 rounded shadow-md border w-full max-w-sm">
            <h1 className="text-2xl font-bold text-center text-green-800 mb-3">Story Sphere</h1>
                <h2 className="text-xl font-bold text-center text-green-800 my-3">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                    <label className="text-green-800">Username</label>
                    <input
                     className="border-2 border-green-800 rounded w-full px-1"
                     type="text" 
                     id="username"
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}
                    />
                    </div>
                    <div className="flex flex-col mt-2">
                    <label className="text-green-800">Password</label>
                    <input
                     className="border-2 border-green-800 rounded w-full px-1"
                     type="password" 
                     id="password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                    />
                    </div>
                    <br />
                    <button className="border my-3 bg-green-700 text-white font-bold p-1 rounded w-full"
                     type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
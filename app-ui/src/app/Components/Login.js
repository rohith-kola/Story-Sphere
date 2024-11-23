export function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col bg-white p-8 rounded shadow-md border">
            <h1 className="text-2xl font-bold text-center text-green-800 myb-3">Story Sphere</h1>
                <h2 className="text-xl font-bold text-center text-green-800 my-3">Login</h2>
                <form>
                    <label className="font-semibold text-green-800">Username</label>
                    <input className="border-2 border-green-800 rounded mx-2" type="text" id="username"/>
                    <br />
                    <label className="font-bold text-green-800">Password</label>
                    <input className="border-2 border-green-800 rounded m-2" type="password" id="password"/>
                </form>
            </div>
        </div>
    );
}
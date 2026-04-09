import { useUser } from "../../store/zustand"

export default function UserFetch(){
    const {user, increaseOneUser} = useUser()
    return (
        <div className="pt-20">
            <h1 className="text-2xl">zustand example:</h1>
            <br></br>
        <p> user count is {user}</p>
        <button onClick={increaseOneUser} className="bg-amber-400 rounded-full text-base text-red-900 px-4 py-2 font-bold">Increase</button>
        </div>
    )
}

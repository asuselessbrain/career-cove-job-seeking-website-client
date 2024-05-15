import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import "../login/login.css"


const UserProfilel = () => {

    const { user } = useContext(AuthContext);

    const { displayName, email, photoURL } = user;


    return (
        <div className="min-h-[calc(100vh-390px)]  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover rounded-xl bg my-10">
            <div className="flex flex-col items-center justify-center backdrop-blur-xl backdrop-brightness-150 p-8 rounded-xl text-red-500">
                <img className="rounded-full w-[200px]" src={photoURL} alt="" />
                <h2 className="font-bold text-4xl mt-10 mb-2">Name: <span className="font-normal text-3xl text-slate-400">{displayName}</span></h2>
                <h3 className="font-bold text-4xl">Email: <span className="font-normal text-3xl text-slate-400">{email}</span></h3>
            </div>
        </div>



    );
};

export default UserProfilel;
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import "./login.css"

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div className="min-h-[calc(100vh-192px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg my-10">
            <div className="max-w-md w-full space-y-8 backdrop-blur-xl backdrop-brightness-150 p-6 rounded-xl">
                <div className="p-5">
                    <h3 className="text-2xl mb-0.5 font-medium"></h3>
                    <p className="mb-4 text-sm font-normal text-gray-800"></p>

                    <div className="text-center">
                        <p className="mb-3 text-4xl font-bold text-green-500">
                            Login to your account
                        </p>
                        <p className="mt-2 text-sm leading-4 text-slate-400">
                            You must be logged in to perform this action.
                        </p>
                    </div>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label className="text-slate-400">Email address</label>
                            <input {...register("email", { required: true })} type="email" className="block w-full rounded-lg border border-gray-300 my-2 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Email" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}

                        </div>
                        <div>
                            <label className="text-slate-400">Password</label>
                            <input {...register("password", { required: true })} type="password" required className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Password" />
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>
                    </div>

                    <div>
                        <input type="submit" value="Login" className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400" />
                    </div>
                </form>

                <div className="flex w-full items-center gap-2 py-6 font-bold text-red-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            className="h-[18px] w-[18px] " />Continue with
                        Google
                    </button>
                </div>
                <div className="text-center">
                    <p className="mt-2 text-sm text-gray-600">
                        Do not have an account? <Link to="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
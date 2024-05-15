import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import "../login/login.css"
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    const { signUpUser, updateUser, loginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/"


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password, name, photoUrl, confirmPassword } = data;
        // Check if passwords match
        try {
            const result = await signUpUser(email, password);


            updateUser(name, photoUrl)
            toast.success("SignUp successful");
            if (result.user) {
                navigate(from);
            }


            console.log(result.user);

            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!passwordRegex.test(password)) {
                toast.error("Password must have at least 6 characters, a capital & special letter, and a number");
                return;
            }

            const emailRegex = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!emailRegex.test(email)) {
                toast.error("Please enter a valid email");
                return;
            }

        } catch (error) {
            console.error("Error signing up:", error.message);
            toast.error("Error signing up. Please try again.");
        }
    };

    const handleLogin = (provider) => {
        provider().then((result) => {
            if (result.user) {
                toast.success("Login successful");
                navigate(from)
            }
        }).catch((error) => {
            toast.error("Error signing in. Please try again.");
        });
    }


    return (
        <div className="min-h-[calc(100vh-152px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg my-10">
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
                            <label className="text-slate-400">Name</label>
                            <input {...register("name", { required: true })} type="text" className="block w-full rounded-lg border border-gray-300 my-2 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Enter Your Name" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}

                        </div>
                        <div>
                            <label className="text-slate-400">Email address</label>
                            <input {...register("email", { required: true })} type="email" className="block w-full rounded-lg border border-gray-300 my-2 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Email" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}

                        </div>
                        <div>
                            <label className="text-slate-400">Password</label>
                            <input {...register("password", { required: true })} type="password" required className="my-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Password" />
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>

                        <div>
                            <label className="text-slate-400">Confirm Password</label>
                            <input {...register("confirmPassword", { required: true })} type="password" required className="my-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Confirm Password" />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">Confirm Password is required</p>}
                        </div>

                        <div>
                            <label className="text-slate-400">Photo URL</label>
                            <input {...register("photoUrl", { required: true })} type="text" required className="my-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Photo URL" />
                            {errors.photoUrl && <p className="text-red-500 text-sm mt-1">Photo URL is required</p>}
                        </div>
                    </div>

                    <div>
                        <input type="submit" value="Register" className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400" />
                    </div>
                </form>

                <div className="flex w-full items-center gap-2 py-6 font-bold text-red-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>

                <div className="flex justify-center mt-4">
                    <button onClick={() => handleLogin(loginWithGoogle)}
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            className="h-[18px] w-[18px] " />Continue with
                        Google
                    </button>
                </div>
                <div className="text-center">
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login Now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
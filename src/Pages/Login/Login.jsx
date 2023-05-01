import React from "react";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-error">Login now!</h1>
                        <p className="py-6">
                            Please Login to get exciting recipeies from top
                            rated Chef!
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        New here? Please Register
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-error">
                                    Login
                                </button>
                                <button className="btn  bg-red-500 mt-4 hover:bg-red-600 border-none">
                                    Login with Google
                                </button>
                                <button className="btn bg-slate-600 mt-4 border-none">
                                    Login with GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { googleSignIn,setUser,loginWithEmail } = useContext(AuthContext);

    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleGoogleSignIn = () =>{
        setStatus(null);
        setError(null);
        googleSignIn()
        .then(result=>{
            setStatus('Sign In Successfull');
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const hangleEmailLogin = event =>{
        setStatus(null);
        setError(null);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmail(email,password)
        .then(result => {
            setStatus('Sign In Successfull');
            setUser(result.user);
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-error">
                            Login now!
                        </h1>
                        <p className="py-6">
                            Please Login to get exciting recipeies from top
                            rated Chef!
                        </p>
                    </div>
                    <Form onSubmit={hangleEmailLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
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
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>
                            <p className="text-md">
                                {" "}
                                New here? Please{" "}
                                <Link to={"/register"} className="text-indigo-500">
                                    Register here
                                </Link>
                            </p>
                            <div className="text-center">
                                {status ? (
                                    <p className="text-teal-600">{status}</p>
                                ) : (
                                    <></>
                                )}
                                {error ? (
                                    <p className="text-red-500">{error}</p>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-error" type="submit">Login</button>
                                <button className="btn  bg-red-500 mt-4 hover:bg-red-600 border-none" onClick={handleGoogleSignIn}>
                                    Login with Google
                                </button>
                                <button className="btn bg-slate-600 mt-4 border-none">
                                    Login with GitHub
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;

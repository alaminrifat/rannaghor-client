import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    // const { createUser } = useContext(AuthContext);
    const {createUser} = useContext(AuthContext);
    const [status, setStatus] = useState(null); 
    const [error, setError] = useState(null);      

    const handleRegister = event =>{
        setStatus(null);
        setError(null);
        // console.log('clicnke');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setStatus('Account Created!! Please Login');
                
            })
            .catch(error => {
                setError(error.message);
                
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-error">
                            Register now!
                        </h1>
                        <p className="py-6">
                            Please Login to get exciting recipeies from top
                            rated Chef!
                        </p>
                    </div>
                    <Form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Your name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name='email'
                                    placeholder="Your email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name='photo'
                                    placeholder="Your Photo URL"
                                    className="input input-bordered"
                                />
                            </div>
                            <p className="text-md">
                                {" "}
                                Already have an account? Please{" "}
                                <Link to={"/login"} className="text-indigo-500">
                                    Login here
                                </Link>
                            </p>
                            <div className="text-center">
                                {status ? <p className="text-teal-600">{status}</p> : <></>}
                                {error ? <p className="text-red-500">{error}</p> : <></>}
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-error" type="submit">Signup</button>
                                <button className="btn  bg-red-500 mt-4 hover:bg-red-600 border-none">
                                    Signup with Google
                                </button>
                                <button className="btn bg-slate-600 mt-4 border-none">
                                    Signup with GitHub
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;

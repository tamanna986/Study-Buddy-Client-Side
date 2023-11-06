import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
                    <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-sky-900 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-sky-900 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>

                <div className="w-1/2 mr-12">
                    <img src= "https://i.ibb.co/TRNSwxf/focused-tiny-people-reading-books-74855-5836-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;
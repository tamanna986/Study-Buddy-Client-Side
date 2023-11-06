import { Link } from "react-router-dom";


const LogIn = () => {
    return (
 <div className="mt-20">
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col items-center justify-center lg:flex-row">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-sky-900 text-white" type="submit" value="Login" /> <br />
                            <div className="flex items-center gap-4 ml-3">
                            <h3>Or Log In with</h3>
                            <button className="w-20 rounded-full"><img className="w-10 rounded-full" src="https://i.ibb.co/njZzjPg/search.png" alt="" /></button>
                            </div>

                        </div>
                    </form>
                    <p className='my-4 text-center'>Don't have an account? <Link className='text-sky-900 font-bold' to="/register">Register Now</Link> </p>
                </div>
            </div>
            <div className="w-1/2 mr-12">
                <img className="full" src="https://i.ibb.co/TRNSwxf/focused-tiny-people-reading-books-74855-5836-removebg-preview.png" alt="" />
            </div>
        </div>
    </div>
 </div>
    );
};

export default LogIn;
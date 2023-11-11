import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";


const LogIn = () => {
    const [error, setError] = useState('')
    const { signIn , signInWithGoogle , user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        
        if (!email) {
            setError('Enter your email please')
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError('please write a valid email')
            return;
        }
        setError('');



        signIn(email, password)
            .then(result => {
                console.log(result.user)

                const user = { email };
                axios.post('https://study-buddy-server-ruby.vercel.app/jwt',user, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                    if (res.data.success) {
                        navigate(location?.state ? location?.state : '/')
                    }
                })

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log In Sucessful',
                    showConfirmButton: false,
                    timer: 1500
                  })

              // to go to desired page using navigate
              navigate(location?.state ? location.state : '/');


            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })

    }


    // google log in

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const userEmail = result.user?.email 
                const loggedUser = {email: userEmail};
                console.log(result.user)
                console.log("loggedUser",loggedUser)
                if(result.user)
                {
                    axios.post('https://study-buddy-server-ruby.vercel.app/jwt',loggedUser, {withCredentials: true})
                    .then(res =>{
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
                }
                else{
                    axios.post('https://study-buddy-server-ruby.vercel.app/logout', loggedUser, {useCredentials:true})
              .then(res => console.log('after log out', res.data))
                }


                
                // axios.post('https://study-buddy-server-ruby.vercel.app/jwt',userEmail, {withCredentials: true})
                // .then(res =>{
                //     console.log(res.data)
                //     if (res.data.success) {
                //         navigate(location?.state ? location?.state : '/')
                //     }
                // })

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log In Sucessful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                //      // to go to desired page using navigate
                // navigate(location?.state ? location.state : '/');


            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
 <div className="mt-20">
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col items-center justify-center lg:flex-row">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLoginSubmit}>
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
                            {
                                        error && <li className="text-red-600 mt-1 text-center  ">{error}</li>

                                    }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-sky-900 text-white" type="submit" value="Login" /> <br />
                            <div className="flex items-center gap-4 ml-3">
                            <h3>Or Log In with</h3>
                            <button onClick={handleGoogleSignIn} className="w-20 rounded-full"><img className="w-10 rounded-full" src="https://i.ibb.co/njZzjPg/search.png" alt="" /></button>
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
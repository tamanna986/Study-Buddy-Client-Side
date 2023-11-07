import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)
    

    
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password, photo)
        // check conditions for valid password

        if (password.length < 6) {
            setError('password should be atleast 6 characters or long');
            
            return;
        }
        else if (!/[A-Z]/.test(password)) {

            setError('password should contain atleast one uppercase')
            return;
        }
        else if (!/[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(password)) {

            setError('password should contain atleast one special Character')
            return;
        }
        setError('');

        // creating user
        createUser(email , password)
        .then(res => {
            console.log(res)

           updateProfile(res.user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('profile Updated')
                })
                .catch((error) => {
                    console.log(error.message)
                })


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registration Sucessfull',
                    showConfirmButton: false,
                    timer: 1500
                  })

        })
        .catch(error =>{
            console.log(error)
        })



        

    }



    return (
        <div>
                    <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmitRegister}>
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
                                
                                {
                    error && <li className="text-red-900  mt-10  ">{error}</li>
                  
                }  
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-sky-900 text-white" type="submit" value="Sign Up" />
{/* 
                                {
                    error && <li className="text-red-900  mt-10  ">{error}</li>
                  
                }   */}
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
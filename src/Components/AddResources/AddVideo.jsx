import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";


const AddVideo = () => {

    const {user} = useContext(AuthContext)
    const formRef =useRef(null);
    const email = user.email

    const handleResourceSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const link = form.link2.value;
        const title = form.title2.value;      
        const newResource = { email,link, title};
        console.log(newResource)
    
    // validating if the fields are field or not before sending data
        if (!link || !title ) {
           Swal.fire({
                title: 'Error!',
                text: 'Please fill out all fields',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }
    
    
    
        fetch('http://localhost:5000/resources' , {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newResource)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Resource Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
            formRef.current.reset(); 
        })
    
    
    
    
    }
    
    
    return (
        <div>
            <div className="my-20">
                <h1 className="text-3xl font-bold text-sky-900 text-center mt-10">Add Resources</h1>
                <form ref={formRef} onSubmit={handleResourceSubmit}>
                    <div className=" w-[300px] md:w-[500px] lg:w-[600px] mx-auto">

                        <div className="card-body ">
                            <div className="flex justify-center items-center">

                                <label className="label">
                                    <span className="label-text t text-lg py-3 px-11 bg-yellow-100  text-sky-700 rounded-lg font-semibold">Resource
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="resource Video Link Url"
                                    name="link2"

                                    required
                                    className="input input-bordered input-warning w-full" />
                            </div>

                            <div className="flex justify-center items-center">
                                <label className="label">
                                    <span className="label-text t text-lg py-3 px-16  bg-yellow-100  text-sky-700 font-semibold rounded-lg">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Resource Title"
                                    name="title2"

                                    required
                                    className="input input-bordered input-warning w-full" />
                            </div>

                            <div className="form-control ">
                                <button className="btn  bg-sky-900 text-white ">Add Resources</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVideo;
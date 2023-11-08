import axios from "axios";
import Swal from "sweetalert2";
import DatePick from "./DatePick";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useRef } from "react";


const CreateAssignments = () => {
    const {user} = useContext(AuthContext)
    const formRef = useRef(null);
    const email = user.email
    
// State for the selected due date
    const [dueDate, setDueDate] = useState(new Date()); 


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const category = form.category.value;
        
        

        const newAssignment = { photo, title, description,marks, category, dueDate: dueDate , email};
        console.log(newAssignment)


        fetch('http://localhost:5000/assignments' , {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment created Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
            formRef.current.reset(); // Reset the form after successful form submission
        })
    



    }
    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-sky-900 text-center mt-10">Create Assignment</h1>
            <form ref={formRef} onSubmit={handleFormSubmit}>
                <div className=" w-[300px] md:w-[500px] lg:w-[600px] mx-auto">
                      
                    <div className="card-body ">
                        <div className="flex justify-center items-center">

                            <label className="label">
                                <span className="label-text t text-lg py-3 px-10 bg-yellow-100  text-sky-700 rounded-lg font-semibold">Thumbnail
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Thumbnail Photo Url"
                                name="photo"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-16  bg-yellow-100  text-sky-700 font-semibold rounded-lg">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Assignment Title"
                                name="title"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-9 bg-yellow-100  text-sky-700 font-semibold rounded-lg">Description</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Description"
                                name="description"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>
                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-14 bg-yellow-100  text-sky-700 font-semibold rounded-lg">Marks</span>
                            </label>

                            <input
                                type="number"
                                placeholder="Marks"
                                name="marks"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-[60px] bg-yellow-100  text-sky-700 font-semibold rounded-lg">Level </span>
                            </label>

                            <select name="category" className="select select-bordered w-full ">
                                <option value="">Select a category</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>

                            </select>
                        </div>
                        <div className="flex  items-center gap-3">
                    <label className="label">
                        <span className="label-text t text-lg py-3 px-12 bg-yellow-100  text-sky-700 font-semibold rounded-lg">
                            Due Date
                        </span>
                    </label>
                    
                    <DatePick selected={dueDate} setStartDate={setDueDate} />
                </div>

                        
                        

                        <div className="form-control ">
                            <button className="btn  bg-sky-900 text-white ">Create Assignment</button>
                        </div>
                    </div>







                </div>





            </form>
        </div>
    );
};

export default CreateAssignments;
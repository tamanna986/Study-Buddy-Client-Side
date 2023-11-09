import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import DatePick from "../CreateAssignments/DatePick";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateAssignments = () => {
    
    const{user} = useContext(AuthContext);
    const email = user.email;
    const assignmentForUpdate = useLoaderData();
    const {_id} = assignmentForUpdate;
    // State for the selected due date
    const [dueDate, setDueDate] = useState(new Date(assignmentForUpdate.dueDate)); 

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const category = form.category.value;
        
        

        const updatedAssignment = { photo, title, description,marks, category, dueDate: dueDate , email};
        console.log(updatedAssignment)


        


         // send data to the server

         fetch(`http://localhost:5000/update/${_id}` , {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
               Swal.fire({
                    title: 'Success!',
                    text: 'Assignment Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
                  .then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/allAssignments'; 
                    }
                });
            }
        })

            // validating if the fields are field or not before sending data
    if (!photo || !title || !description || !marks || !category) {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill out all fields',
            icon: 'error',
            confirmButtonText: 'Close'
        });
        return;
    }
    }



    return (
        <div className="my-10">
        <h1 className="text-3xl font-bold text-sky-900 text-center mt-10">Assignment Update</h1>
        <form  onSubmit={handleFormSubmit}>
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
                            defaultValue={assignmentForUpdate.photo }

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
                            defaultValue={assignmentForUpdate.title }

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
                            defaultValue={assignmentForUpdate.description }

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
                            defaultValue={assignmentForUpdate.marks }

                            required
                            className="input input-bordered input-warning w-full" />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="label">
                            <span className="label-text t text-lg py-3 px-[60px] bg-yellow-100  text-sky-700 font-semibold rounded-lg">Level </span>
                        </label>

                        <select name="category" 
                        defaultValue={assignmentForUpdate.category }
                         className="select select-bordered w-full ">
                            {/* <option  defaultValue={assignmentForUpdate.category }>Select a category</option> */}
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>

                        </select>
                    </div>
                    <div className="flex  items-center gap-3">
                <label className="label">
                    <span className="label-text t text-lg py-3 px-11 bg-yellow-100  text-sky-700 font-semibold rounded-lg">
                        Due Date
                    </span>
                </label>
                
                <DatePick selected={dueDate}   setStartDate={setDueDate} />
            </div>

                    
                    

                    <div className="form-control ">
                        <button className="btn  bg-sky-900 text-white ">Update Assignment</button>
                    </div>
                </div>







            </div>





        </form>
    </div>
    );
};

export default UpdateAssignments;
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";




const AssignmentDetails = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const formRef = useRef(null);
    const {user} = useContext(AuthContext)
    const userEmail = user.email
    const examineeName = user.displayName
    const title = details.title
    const marks = details.marks
    const obtainedMarks = null
    const feedback = "No feedBack yet"
    const status = "pending"


    console.log(examineeName)
    console.log(details)

    useEffect(() => {
        fetch(`http://localhost:5000/allAssignments/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

   

    const handleSubmit = (e) => {
        e.preventDefault();
       const pdfLink = e.target.pdf.value
       const  note = e.target.note.value
        console.log("PDF Link:", pdfLink);
        console.log("Note:", note);
        const newSubmittedAssignment = {pdfLink, note , userEmail ,  examineeName , title, marks , obtainedMarks, feedback,status}
        



        // for posting submitted pdf link and note to database
    fetch('http://localhost:5000/submittedAssignments' , {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newSubmittedAssignment)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
           Swal.fire({
                title: 'Success!',
                text: 'Assignment Submitted Successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        }
        if (formRef.current) {
            formRef.current.reset();
          }
          const dialog = document.getElementById('my_modal_5');
          if (dialog) {
            dialog.close();
          }
    })




    }

    const handleClose = (e) => {
        e.preventDefault();
        document.getElementById('my_modal_5').close();
    };

    
    return (


        <div className="container mx-auto my-20 ">



            <h1 className="text-lg text-sky-900 font-bold mx-2 mb-10">Assignment Details for <span className="text-yellow-600 font-normal ">{details.title}</span></h1>

            <div className="card glass shadow-xl">
                <div className="card-body" >

                    <div className="flex justify-between">

                        <h2 className="card-title text-sky-800">Description:</h2>
                        <h3 className=""><span className=" font-bold text-red-700">Due Date:</span> {details.dueDate}</h3>
                    </div>
                    <p className="text-start text-yellow-700">{details.description}</p>
                    <div className="card-actions justify-between mt-5">
                        <div className="flex justify-center items-center gap-2">  <FcBullish></FcBullish>
                            <h4 className="text-lg font-semibold text-green-800">Level : {details.category}</h4> </div>
                        {/* <button className="btn btn-warning text-white" >Take Assignment</button> */}

                        <button className="btn btn-warning text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="text-2xl text-center font-bold mt-8 text-sky-800">Assignment Submission</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog " onSubmit={handleSubmit} className="mt-8  mx-auto" ref={formRef}>
                                    <div className="mb-4">
                    <label className="block text-sky-700 text-sm font-bold mb-2" htmlFor="pdfLink">
                        PDF Link Submission
                    </label>
                    <input
                        type="text"
                        
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                        placeholder="Enter PDF link here"
                        name = "pdf"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sky-700 text-sm font-bold mb-2" 
                    >
                        Quick Note
                    </label>
                    <textarea
                        // value={note}
                        // onChange={handleNoteChange}
                        name = "note"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="note"
                        placeholder="Enter a quick note here"
                        rows="4"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={handleClose} className="bg-yellow-400 font-bold px-6 rounded focus:outline-none focus:shadow-outline text-white py-2 ">Close</button>
                </div>

                                        
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;
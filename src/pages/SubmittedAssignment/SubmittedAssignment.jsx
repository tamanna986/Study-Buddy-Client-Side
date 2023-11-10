import { useContext, useRef } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SubmittedAssignment = ({ submittedAssignment}) => {
    const formRef =useRef(null);
    const {user} = useContext(AuthContext)
    const userEmail = user.email
    const examineeName = user.displayName
    const title = submittedAssignment.title
    const AssignmentMark = submittedAssignment.marks
    const id = submittedAssignment._id
    // console.log(submittedAssignment)

    const handleClose = (e) => {
        e.preventDefault();
        document.getElementById(id).close();
    };


//        const handleSubmit = (e) => {
//         e.preventDefault();
//        const marks = e.target.marks.value
//        const  feedback = e.target.feedback.value
        
//         const newSubmittedMark = {marks, feedback, userEmail ,  examineeName , title,AssignmentMark}
        

// console.log('submit button clicked', newSubmittedMark)

//         // for posting marks and feedback to database
//     fetch('http://localhost:5000/marks' , {
//         method: 'POST',
//         headers:{
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(newSubmittedMark)
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         if(data.insertedId){
//            Swal.fire({
//                 title: 'Success!',
//                 text: 'Marks Submitted Successfully',
//                 icon: 'success',
//                 confirmButtonText: 'Close'
//               })
//         }
//         formRef.current.reset(); 
//     })




//     }


const handleSubmit = (e) => {
    e.preventDefault();
    const marks = e.target.elements.marks.value;
    const feedback = e.target.elements.feedback.value;

    const newSubmittedMark = { marks, feedback, userEmail,examineeName,title, AssignmentMark,
        status: 'Completed'
    };

    console.log('submit button clicked', newSubmittedMark);

    // for posting marks and feedback to database
    fetch('http://localhost:5000/marks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSubmittedMark),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
         Swal.fire({
            title: 'Success!',
            text: 'Marks Submitted Successfully',
            icon: 'success',
            confirmButtonText: 'Close',
          });
        }
        if (formRef.current) {
          formRef.current.reset();
        }
        const dialog = document.getElementById(id);
        if (dialog) {
          dialog.close();
        }
      });
  };



    return (

        
 
   <>
    
      {/* row 1 */}
  
     <tr className="text-lg  text-yellow-600">
        
        <td>{submittedAssignment.title}</td>
        <td>{submittedAssignment.marks}</td>
        <td>{submittedAssignment.examineeName}</td>
        <td><button>Pending</button></td>
        <td><button className="btn btn-outline btn-warning" onClick={() => document.getElementById(id).showModal()}>Give Mark</button>
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="text-2xl text-center font-bold mt-8 text-sky-800">Assignment Submission</h3>
                                <div className="my-10 mx-auto text-sky-800 font-semibold space-y-4">
                                    <h1>Google Drive Link : <span className="font-normal text-black">{submittedAssignment.pdfLink}</span></h1>
                                    <h1>Note By Examinee : <span className="font-normal text-black">{submittedAssignment.note}</span></h1>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog " onSubmit={handleSubmit} className="mt-8  mx-auto" ref={formRef}>
                                    <div className="mb-4">
                    <label className="block text-sky-700 text-sm font-bold mb-2" >
                        Mark Submission
                    </label>
                    <input
                        type="text"
                        
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                        placeholder="Enter Marks here"
                        name = "marks"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sky-700 text-sm font-bold mb-2" 
                    >
                       Feedback
                    </label>
                    <textarea
                        // value={note}
                        // onChange={handleNoteChange}
                        name = "feedback"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="feedback"
                        placeholder="Enter feedback here"
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
        </td>
      </tr>
   
   
</>
            
        
    );
};

export default SubmittedAssignment;
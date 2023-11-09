import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Assignment = ({ assignment, updatedAssignments, setUpdatedAssignments }) => {
  const { _id } = assignment;
  const { user } = useContext(AuthContext)
  console.log(user.email);
  const [email, setEmail] = useState('')
  console.log(email.email)

  useEffect(() => {
    fetch(`http://localhost:5000/allAssignments/${_id}`)
      .then(res => res.json())
      .then(data => setEmail(data))
  }, [])


  const handleDelete = (_id) => {


    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {

          if(email.email !== user.email){
                  return Swal.fire('Error!', 'UnAuthorized user cant delete ');
      
          }

          else{
            fetch(`http://localhost:5000/allAssignments/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
  
  
                if (data.deletedCount > 0) {
                  Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
  
  
  
                  // to show remaining product on ui  after deleting
                  const remaining = updatedAssignments.filter(updatedAssignment => updatedAssignment._id !== _id)
                  setUpdatedAssignments(remaining);
  
                }
              })
              .catch(error => {
                console.error('Error:', error);
              });
  
          }

          // fetch(`http://localhost:5000/allAssignments/${_id}`, {
          //   method: 'DELETE'
          // })
          //   .then(res => res.json())
          //   .then(data => {
          //     console.log(data);


          //     if (data.deletedCount > 0) {
          //       Swal.fire('Deleted!', 'Your file has been deleted.', 'success');



          //       // to show remaining product on ui  after deleting
          //       const remaining = updatedAssignments.filter(updatedAssignment => updatedAssignment._id !== _id)
          //       setUpdatedAssignments(remaining);

          //     }
          //   })
          //   .catch(error => {
          //     console.error('Error:', error);
          //   });



        }
      })


  }


  return (
    <div>

      <div className="card card-compact  bg-base-100 shadow-xl">

        <div className="flex justify-between">
          <h1 className="badge badge-info badge-outline mb-4 font-semibold text-lg ">Marks : {assignment.marks}</h1>
          <button className="mx-auto mb-2" onClick={() => handleDelete(_id)}><RiDeleteBin6Line className="w-54 mx-auto"></RiDeleteBin6Line></button>
          <h1 className="badge badge-error badge-outline mb-4 font-semibold text-lg ">Level : {assignment.category}</h1>
        </div>
        <figure><img className="w-[350px] h-[200px]" src={assignment.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="h-32">
            <h2 className=" text-start text-sky-900 text-xl"><span className="font-bold">Title:</span> {assignment.title}</h2>
          </div>
          <div className=" flex  gap-4 justify-around ">
            <Link to={`/allAssignments/${assignment._id}`} ><button className="btn btn-warning btn-outline text-white">View Assignment</button></Link>

            <Link to={`/update/${assignment._id}`}><button className="btn btn-warning btn-outline  text-white">Update Assignment</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
import { useEffect, useState } from "react";
import SubmittedAssignment from "../SubmittedAssignment/SubmittedAssignment";



const AllSubmittedAssignments = () => {
    const [submittedAssignmentsBeforeMarkings, setSubmittedAssignmentsBeforeMarkings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allSubmittedAssignments')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setSubmittedAssignmentsBeforeMarkings(data)
            } )
    }, [submittedAssignmentsBeforeMarkings])


 
    // Filter out the submitted assignments with a 'Completed' status
   const pendingSubmittedAssignments = submittedAssignmentsBeforeMarkings.filter(submittedAssignmentsBeforeMarking => submittedAssignmentsBeforeMarking.status === 'pending');
   console.log(pendingSubmittedAssignments)

    
    return (
        <div className="mx-auto container py-20">
            <h1 className="text-sky-900 font-bold text-xl md:text-3xl mb-10">Submitted Assignments</h1>
            <div className="  ">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-sky-700 font-semibold text-lg">
                        
                        <th>Title</th>
                        <th>Mark</th>
                        <th>Examinee Name</th>
                        <th><button className="">Status</button></th>
                        <td><button>Give Mark</button></td>
                    </tr>
                </thead>
                      <tbody>
                      {
                    pendingSubmittedAssignments.map(submittedAssignment => <SubmittedAssignment
                        key={submittedAssignment._id}
                        submittedAssignment={submittedAssignment}
                    >


                    </SubmittedAssignment>)
                }
                      </tbody>
                

            </table>
</div>

        </div>
    );
};

export default AllSubmittedAssignments;
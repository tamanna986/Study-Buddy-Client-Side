import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyAssignment from "../MyAssignment/MyAssignment";



const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const [myAssignments, setMyAssignments] = useState([]);
    console.log(myAssignments)
    

    const url = 'http://localhost:5000/myAssignment';
    useEffect(() => {

        fetch(url)
        .then(res => res.json())
        .then(data => setMyAssignments(data))
        
  
    //    axios.get(url, {withCredentials: true})
            
    //         .then(res => setMyAssignments(res.data))
    }, [url]);


    return (
        <div className="my-20">
            <h1 className="text-sky-900 font-bold mb-10">My Assignment</h1>
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Total Mark</th>
                    <th>My Mark</th>
                    <th>Feedback</th>
                </tr>
            </thead>
            <tbody>
                
                
                {
                            myAssignments.map(myAssignment =>
                                <MyAssignment
                                key = {myAssignment._id}
                                myAssignment = {myAssignment}
                                >
            
                                </MyAssignment>
                            )
                }
            </tbody>

        </table>
    </div>
        </div>


    );
};

export default MyAssignments;
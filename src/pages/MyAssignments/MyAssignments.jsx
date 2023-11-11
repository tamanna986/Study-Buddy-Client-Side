import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyAssignment from "../MyAssignment/MyAssignment";
import axios from "axios";



const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const [myAssignments, setMyAssignments] = useState([]);
    console.log(myAssignments)
    

    // const url = 'https://study-buddy-server-ruby.vercel.app/allSubmittedAssignments';
    // useEffect(() => {

    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setMyAssignments(data))
        
  
    // //    axios.get(url, {withCredentials: true})
            
    // //         .then(res => setMyAssignments(res.data))
    // }, [url]);

console.log(user.email)
    
    
    // const url =  'https://study-buddy-server-ruby.vercel.app/myAssignments?userEmail=j@gmail.com'

    useEffect(() => {
        const url = ` https://study-buddy-server-ruby.vercel.app/myAssignments?userEmail=${user?.email}`
  
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setMyAssignments(data))
  
        axios.get(url, {withCredentials: true})
            
            .then(res => setMyAssignments(res.data))
    }, [user]);


    return (
        <div className="my-20 mx-auto container">
            <h1 className="text-sky-900 font-bold mb-10  text-xl md:text-3xl">My Assignment</h1>
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr className="text-lg font-bold text-sky-700">
                    
                    
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
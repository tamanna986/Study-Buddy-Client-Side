import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyAssignment from "../MyAssignment/MyAssignment";
// import MyAssignment from "../MyAssignment/MyAssignment"


const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const [myAssignments, setMyAssignments] = useState([]);
    console.log(myAssignments)

    const url = ` http://localhost:5000/myAssignment?email=${user?.email}`;
    useEffect(() => {

        fetch(url)
        .then(res => res.json())
        .then(data => setMyAssignments(data))
        
  
    //    axios.get(url, {withCredentials: true})
            
    //         .then(res => setMyAssignments(res.data))
    }, [url]);


    return (
        <div>
            {
                myAssignments.map(myAssignment =>
                    // <MyAssignment
                    // key ={myAssignment._id}
                    // myAssignment = {myAssignment}
                    // ></MyAssignment>

                    <MyAssignment
                    key ={myAssignment._id}
                    // myAssignment = {myAssignment}
                    >

                    </MyAssignment>
                    
                    )
            }
        </div>
    );
};

export default MyAssignments;
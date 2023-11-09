import { useEffect, useState } from "react";
import Assignment from "../Assignment/Assignment";



const AllAssignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    
    // console.log(assignments)
    
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    

    useEffect(() =>{
       
        fetch('http://localhost:5000/allAssignments')
        .then(res => res.json())
        .then(data => setAssignments(data))
        
        
    },[])


    const filteredAssignments = selectedCategory
        ? assignments.filter(assignment => assignment.category === selectedCategory)
        : assignments;


    return (
        <div className="">
            <h1 className="text-2xl mx-auto text-sky-900 font-bold mt-10">All Assignments</h1>
            <hr  className="w-56 mx-auto mb-10"/>
            <div className="flex flex-col md:flex-row justify-center items-center w-[400px] mx-auto">
                            <label className="label w-64 ">
                                <span className="label-text   py-4 px-16 md:px-4  bg-orange-400  text-white font-semibold rounded-lg">Filter By Level </span>
                            </label>

                            <select name="category" className="select select-bordered w-full "  onChange={handleCategoryChange}>
                                <option value="">Select a category</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>

                            </select>
                        </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                
            {
                filteredAssignments.map(assignment => <Assignment
                key = {assignment._id}
                assignment = {assignment}
                
                ></Assignment>)
            }
            </div>
        </div>
    );
};

export default AllAssignments;
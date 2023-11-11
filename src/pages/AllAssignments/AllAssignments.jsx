import { useEffect, useState } from "react";
import Assignment from "../Assignment/Assignment";
import { useLoaderData } from "react-router-dom";



const AllAssignments = () => {

    const {count} = useLoaderData();
    console.log(count)
    const[featuredAssignments,setFeaturedAssignments] = useState([])
    const [assignments, setAssignments] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const[updatedAssignments, setUpdatedAssignments] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    
    console.log("updatedAssignments", updatedAssignments)
    
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    
        
    // for pagination
    // const itemsPerPage = 6;
    const noOfPages = Math.ceil(count/itemsPerPage);
    console.log(noOfPages)

// instead of for loop
    const pages = [...Array(noOfPages).keys()];
    console.log("pages", pages)

    const handleItemsPerPage = (e)=>{
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/allAssignments?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setUpdatedAssignments(data))
    }, [currentPage, itemsPerPage]);


    // useEffect(() =>{
       
    //     fetch('http://localhost:5000/allAssignments')
    //     .then(res => res.json())
    //     .then(data => setUpdatedAssignments(data))
    //     // .then(data => setAssignments(data))
        
        
    // },[])


        // to handle prev and next buttons

const handlePrev = () =>{
    if(currentPage > 0){
      setCurrentPage(currentPage-1);
    }
  
  }
  
  const handleNext = () =>{
      if(currentPage < pages.length ){
          setCurrentPage(currentPage + 1)
      }
  }


    // const filteredAssignments = selectedCategory
    //     ? assignments.filter(assignment => assignment.category === selectedCategory)
    //     : assignments;
    const filteredAssignments = selectedCategory
        ? updatedAssignments.filter(updatedAssignment => updatedAssignment.category === selectedCategory)
        :  updatedAssignments;

        


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
                updatedAssignments={updatedAssignments}
                setUpdatedAssignments={setUpdatedAssignments}
                
                ></Assignment>)
            }
            </div>


            {/* for pagination */}
            <div className="mb-20">
                <h1>currentPage: </h1>
                <button  onClick={handlePrev} className="mx-1 px-2 bg-yellow-950 text-white">prev</button>
                {
                    pages.map(page => <button  onClick={() => setCurrentPage(page)} className="text-white px-2 mx-1 bg-sky-700"
                    key = {page.index}
                    >{page}</button>)
                }
                <button  onClick={handleNext}  className="mx-1 px-2 bg-yellow-950 text-white">next</button>

                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">30</option>
                </select>

                
            </div>


        </div>
    );
};

export default AllAssignments;
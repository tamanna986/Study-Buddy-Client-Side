

const Assignment = ({assignment}) => {
    return (
        <div>
            
           <div className="card card-compact  bg-base-100 shadow-xl">
           <div className="flex justify-between">
           <h1 className="badge badge-info badge-outline mb-4 font-semibold text-lg ">Marks : { assignment.marks}</h1>
           <h1 className="badge badge-error badge-outline mb-4 font-semibold text-lg ">Level : { assignment.category}</h1>
           </div>
  <figure><img className="w-[350px] h-[200px]" src={assignment.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="h-32">
    <h2 className=" text-start text-sky-900 text-xl"><span className="font-bold">Title:</span> {assignment.title}</h2>
    </div>
    <div className=" flex  gap-4 justify-between ">
      <button className="btn btn-warning btn-outline text-white">View Details</button>
      
      <button className="btn btn-warning btn-outline px-8 text-white">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Assignment;
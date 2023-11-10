

const MyAssignment = ({myAssignment}) => {
    // console.log(MyAssignment)
    return (
        <>
            
           < tr className="text-lg">
        
        <td >{myAssignment.title}</td>
        <td className="text-green-700 font-semibold">{myAssignment?.status}</td>
        <td>{myAssignment.marks}</td>
        <td  className="text-red-500 font-semibold">{myAssignment?.obtainedMarks}</td>
        <td className="text-yellow-500 " >{myAssignment?.feedback}</td>
        </tr>
        </>




    );
};

export default MyAssignment;
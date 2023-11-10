import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="items-center justify-center flex flex-col ">
             <img className="w-[700px]" src="https://i.ibb.co/t8tnVWL/ilustracao-sobre-o-error-404-not-found.jpg" alt="" />
            <h1 className="text-sky-700  font-semibold text-lg">Oopsy!</h1>
            <p>This page cannot be displayed!</p>
            <Link to='/' className="text-sky-300 font-bold">Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;
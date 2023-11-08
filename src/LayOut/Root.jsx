import { Outlet } from "react-router-dom";
import MainLayOut from "./MainLayOut/MainLayOut";
import Footer from "../shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Root = () => {
    const{loading} = useContext(AuthContext)
    
    if(loading) {
        return <progress className="progress w-56 mx-auto my-20"></progress>
    }
    return (
        <div>
            <MainLayOut>
                <Outlet></Outlet>
                <Footer></Footer>
            </MainLayOut>
        </div>
    );
};

export default Root;
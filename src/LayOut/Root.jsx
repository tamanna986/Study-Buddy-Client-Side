import { Outlet } from "react-router-dom";
import MainLayOut from "./MainLayOut/MainLayOut";
import Footer from "../shared/Footer/Footer";


const Root = () => {
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
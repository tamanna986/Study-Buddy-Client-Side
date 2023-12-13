import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Faqs from "../../Components/Faqs/Faqs";
import Features from "../../Components/Features/Features";
import Support from "../../Components/Support/Support";
import { AuthContext } from "../../Providers/AuthProvider";
import Resources from "../../Components/Resources/Resources";



const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            {user && <Support></Support>}
            <Resources></Resources>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;
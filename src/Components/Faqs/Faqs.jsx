import { useEffect, useState } from "react";
import Faq from "../Faq/Faq";


const Faqs = () => {
    const [faqs, setFaqs] = useState([])

    useEffect(() =>{
        fetch('faq.json')
        .then(res => res.json())
        .then(data => setFaqs(data))
    },[])
    return (
    <div className="container mx-auto my-10 py-20">
        <h1 className="text-3xl text-center  text-sky-800 font-bold">Faqs</h1>
        <hr className="w-48 mx-auto mb-10" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                faqs.map(faq => 
                <Faq 
                key ={faq.id}
                
                faq = {faq}
                
                ></Faq>)
            }
        </div>
    </div>
    );
};

export default Faqs;
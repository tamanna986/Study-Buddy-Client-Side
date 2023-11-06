import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";


const Features = () => {

    const [features, setFeatures] = useState([])
    console.log('jhfgjhvjv',features)

   useEffect(() =>{
        fetch('features.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])

    return (
        <div className="container mx-auto my-10 bg-sky-900 ">
            <h1 className="text-3xl text-center text-yellow-500 pt-10 font-bold">Features</h1>
        <hr className="w-48 mx-auto mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 px-4 lg:px-16 pb-10  ">
            {features.map(feature =>
                <Feature
                key ={feature.id}
                feature = {feature}
                >

                </Feature>
                )}
        </div>
        </div>
    );
};

export default Features;
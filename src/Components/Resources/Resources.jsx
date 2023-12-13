import { useEffect, useState } from "react";


const Resources = () => {
    const [resourcs, setResources] = useState([]);

    useEffect(()=>{
        fetch('https://study-buddy-server-ruby.vercel.app/resources')
        .then(res => res.json())
            .then(data => setResources(data))
    },[])
    return (
        <div className="px-10 md:px-48 lg:px-12 mt-20">
            <h1 className="text-3xl font-bold text-sky-900 text-center mb-10" >Resources May Help</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 ">
            {
                resourcs.map(resource =>
             <div key = {resource.index} className="p-0 md:p-10  bg-blue-50 rounded-xl flex flex-col justify-center shadow-2xl border-0 border-b-4 border-blue-900">
            <div className=" mb-5">
            <h1 className="font-bold text-blue-900 text-lg">Topic: {resource.title} </h1>
            <h1 className="text-blue-900 text-l">Shared By: <span className="text-yellow-600">{resource.email}</span> </h1>
            </div>
           <div className="w-[300px]">
           <iframe width="300" height="245" src={resource.link}>
         </iframe>
           </div>
        </div>)
            }
            </div>
        </div>
    );
};

export default Resources;
import { useEffect, useState } from "react";



const Support = () => {
    
    const [support, setSupport] = useState([]);

    useEffect(() => {
        fetch('https://study-buddy-server-ruby.vercel.app/support')
            .then(res => res.json())
            .then(data => setSupport(data))
    }, [])
    return (
        <div className="mt-24">
            <h1 className="text-3xl text-center  text-sky-800 font-bold">Support</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 px-8 md:px-16 lg:px-8">
            {
                support.map(singleSupport =>
                    <div key={singleSupport.index}>
                       <div className="">
                       <div className="card h-96  bg-blue-50 shadow-2xl border-0 border-t-4 border-yellow-500 rounded-t-2xl  ">
                            <figure><img src="https://i.ibb.co/wB6kv5z/Google-Meet-1658753432705-1673871389605-1673871389605.jpg" alt="" /></figure>
                            <div >
                                <div className="h-32 ">
                                <h2 className="card-title">Topic: {singleSupport.title}</h2>
                                <p className="text-yellow-700 ">Link by {singleSupport.email}</p>
                                </div>
                                <div className="  w-full">
                                    <a href={singleSupport.link}><button className="btn bg-blue-900 mt-5 text-white w-full">Join Session</button></a>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Support;
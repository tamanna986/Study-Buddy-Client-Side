

const Feature = ({feature}) => {
    return (
        <div>
        
            <div className="card  shadow-2xl bg-yellow-100 text-sky-900 mb-5 rounded-full">
  <div className="card-body mb-5">
    <img className="w-24 mx-auto" src={feature.img} alt="" />
    <h2 className="card-title text-center font-semi-bold">{feature.title}</h2>
    <p className="text-start">{feature.description}</p>
  </div>
</div>
        </div>
    );
};

export default Feature;
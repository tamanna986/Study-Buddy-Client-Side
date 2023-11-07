

const CreateAssignments = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = { photo, name, brandName, category, price, description, rating };
        console.log(newProduct)
    }
    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-sky-900 text-center mt-10">Create Assignment</h1>
            <form onSubmit={handleFormSubmit}>
                <div className=" w-[300px] md:w-[500px] lg:w-[600px] mx-auto">

                    <div className="card-body ">
                        <div className="flex justify-center items-center">

                            <label className="label">
                                <span className="label-text t text-lg py-3 px-10 bg-yellow-100  text-sky-700 rounded-lg font-semibold">Thumbnail
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Thumbnail Photo Url"
                                name="photo"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-16  bg-yellow-100  text-sky-700 font-semibold rounded-lg">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Assignment Title"
                                name="name"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-9 bg-yellow-100  text-sky-700 font-semibold rounded-lg">Description</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Description"
                                name="Description"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>
                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-14 bg-yellow-100  text-sky-700 font-semibold rounded-lg">Marks</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Marks"
                                name="Marks"

                                required
                                className="input input-bordered input-warning w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-[60px] bg-yellow-100  text-sky-700 font-semibold rounded-lg">Level </span>
                            </label>

                            <select name="category" className="select select-bordered w-full ">
                                <option value="">Select a category</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>

                            </select>
                        </div>

                        
                        

                        <div className="form-control ">
                            <button className="btn  bg-sky-900 text-white ">Create Assignment</button>
                        </div>
                    </div>







                </div>





            </form>
        </div>
    );
};

export default CreateAssignments;
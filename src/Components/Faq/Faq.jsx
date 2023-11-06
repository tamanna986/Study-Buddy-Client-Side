

const Faq = ({ faq }) => {
    return (
        <div>
           
            <div className="collapse collapse-arrow bg-yellow-400 text-sky-900">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title text-xl font-medium">
                {faq.question}
                </div>
                <div className="collapse-content">
                    <p>{faq.answer}</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;
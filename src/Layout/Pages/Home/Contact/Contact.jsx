

const Contact = () => {
    return (
        <div className="mx-auto border-2 border-amber-500 rounded-xl my-7 py-5" id="skills">
            <p className="text-2xl mx-auto text-center my-5 ">Contact Me</p>
            <hr className="h-1 mx-5 my-5 text-amber-500" />
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card border-2 border-amber-500 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Full Name</label>
                                <input type="text" className="border-2 border-amber-200 p-2" placeholder="Full Name" />
                                <label className="label">Email</label>
                                <input type="email" className="border-2 border-amber-200 p-2" placeholder="Email" />
                                <label className="label">Phone</label>
                                <input type="number" className="border-2 border-amber-200 p-2" placeholder="Phone" />
                                <label className="label">Massage</label>
                                <textarea className="border-2 border-amber-200 p-2 w-full h-32 resize-none" placeholder="Your Message"></textarea>
                                <button className="btn btn-neutral mt-4">Submit</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
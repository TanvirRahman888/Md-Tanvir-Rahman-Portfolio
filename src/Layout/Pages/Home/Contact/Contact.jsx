import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import facebook from "../../../../assets/facebook.png";
import whatsapp from "../../../../assets/whatsapp.png";
import instagram from "../../../../assets/instagram.png";
import gmail from "../../../../assets/gmail.png";
import linkedin from "../../../../assets/linkedin.png";
import github from "../../../../assets/github-sign.png";
import x from "../../../../assets/x-icon.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const { name, email, phone, message } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !phone || !message) {
            toast.error("All fields are required.");
            return false;
        }

        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email.");
            return false;
        }

        if (phone.length < 10) {
            toast.error("Phone number must be at least 10 digits.");
            return false;
        }

        return true;
    };

    const handleSubmit = () => {
        if (validate()) {
            toast.success("Thanks for your interest. Please contact via Email.");
            setFormData({ name: "", email: "", phone: "", message: "" });
        }
    };

    return (
        <div className="mx-auto border-2 border-amber-500 rounded-xl my-7 py-5 bg-gradient-to-r from-[#4e1d78] to-[#c30b7d] opacity-80" id="contact">
            <p className="text-2xl mx-auto text-center my-5 font-bold text-white">Contact Me</p>
            <hr className="h-1 mx-5 my-5 text-amber-500" />
            <div className="flex flex-col md:flex-row-reverse justify-around gap-5 w-full p-5">
                <div className="text-center flex flex-col gap-5 justify-center">
                    <h1 className="text-5xl font-bold text-white">Connect with me</h1>
                    <div className="flex flex-row justify-center flex-wrap gap-4">
                        <a href="https://www.facebook.com/tanvirrahman888/" target="_blank" rel="noopener noreferrer"><img src={facebook} className="w-20" alt="Facebook" /></a>
                        <a href="https://wa.me/8801770888106" target="_blank" rel="noopener noreferrer"><img src={whatsapp} className="w-20" alt="WhatsApp" /></a>
                        <a href="https://x.com/TanvirRahman888" target="_blank" rel="noopener noreferrer"><img src={x} className="w-20" alt="Twitter/X" /></a>
                        <a href="https://www.linkedin.com/in/tanvirrahman888/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="w-20" alt="LinkedIn" /></a>
                        <a href="https://www.instagram.com/tanvirrahman888/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="w-20" alt="Instagram" /></a>
                        <a href="mailto:tanvirrahman8888@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} className="w-20" alt="Email" /></a>
                        <a href="https://github.com/TanvirRahman888" target="_blank" rel="noopener noreferrer"><img src={github} className="w-20" alt="GitHub" /></a>
                    </div>
                </div>

                <hr className="border border-amber-500 w-full md:hidden" />

                <div className="card border-2 border-amber-500 w-full max-w-sm shadow-2xl">
                    <div className="card-body w-full">
                        <fieldset className="fieldset">
                            <label className="label font-bold text-xl text-white">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border-2 border-amber-200 p-2 rounded-xl"
                                placeholder="Full Name"
                            />
                            <label className="label font-bold text-xl text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-2 border-amber-200 p-2 rounded-xl"
                                placeholder="Email"
                            />
                            <label className="label font-bold text-xl text-white">Phone</label>
                            <input
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border-2 border-amber-200 p-2 rounded-xl"
                                placeholder="Phone"
                            />
                            <label className="label font-bold text-xl text-white">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border-2 border-amber-200 p-2 w-full h-32 resize-none rounded-xl"
                                placeholder="Your Message"
                            ></textarea>
                            <button onClick={handleSubmit} className="btn btn-neutral mt-4">
                                Submit
                            </button>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    );
};

export default Contact;
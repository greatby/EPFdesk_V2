import { useEffect, useRef, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from "axios";
import Modal from "./modal";

const LinkButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    employees: "",
    message: "",
    findUs: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required.";
    }

    if (!formData.employees || formData.employees === "Number of employees") {
      newErrors.employees = "Please select company size.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const API = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // try {
    //   const res = await axios.post(
    //     "http://localhost:5000/api/contact",
    //     formData
    //   );
    //   alert("✅ Form submitted successfully!");
    //   setFormData({
    //     fullName: "",
    //     email: "",
    //     company: "",
    //     employees: "",
    //     message: "",
    //     findUs: "",
    //   });
    //   setErrors({});
    // } catch (err) {
    //   alert("❌ Something went wrong.");
    // }
    try {
      const res = await axios.post(`/api/contact`, formData);
      alert("✅ Your message was sent successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
    setFormData({});
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  

  return (
    <>
      <div className="my-5 flex flex-row lg:items-center justify-center gap-2 md:flex-row">
        {/* <button
          onClick={() => {
            const phone = "919591773588";
            const text = encodeURIComponent("Hi, I need help with EPFdesk.");
            window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
          }}
          className="flex h-[50px] w-[155px] cursor-pointer items-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
        >
          <IoLogoWhatsapp className="size-6" /> WhatsApp
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="flex h-[50px] w-[155px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-3 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
        >
          <FaRegEnvelope size={22} /> Contact Sales
        </button> */}

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            className="relative bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-full uppercase text-sm hover:translate-y-[-3px] hover:bg-white/30 transition duration-300"
            onClick={() => {
              const phone = "919591773588";
              const text = encodeURIComponent("Hi, I need help with EPFdesk.");
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}
          >
            📱 WhatsApp Now
          </button>
          <button
            className="border-2 border-white/40 text-white font-medium px-8 py-3 rounded-full uppercase text-sm hover:bg-white/10 transition"
            onClick={() => setIsOpen(true)}
          >
            📧 Contact Sales
          </button>
        </div>
      </div>
      {/* <div className="my-2 text-center text-[20px] font-bold text-black">
        <p>Get started in 24 hours</p>
      </div> */}
      {isOpen && (
        // <div className="animate-fadeIn fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 backdrop-blur-sm ">
        //   <div
        //     ref={modalRef}
        //     className="animate-slideUp relative mx-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl transition-all duration-300 max-h-[90vh] overflow-y-auto"
        //   >
        //     <button
        //       onClick={() => setIsOpen(false)}
        //       className="absolute top-0 right-4 cursor-pointer text-[40px] text-gray-500 hover:text-gray-800"
        //     >
        //       &times;
        //     </button>

        //     <form className="space-y-6 py-2" onSubmit={handleSubmit}>
        //       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        //         <div>
        //           <label className="mb-1 text-left block text-sm font-medium">
        //             Full name
        //           </label>
        //           <input
        //             type="text"
        //             name="fullName"
        //             value={formData.fullName}
        //             onChange={handleChange}
        //             placeholder="First and last name"
        //             className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
        //           />
        //           {errors.fullName && (
        //             <p className="text-sm text-red-600 mt-1">
        //               {errors.fullName}
        //             </p>
        //           )}
        //         </div>
        //         <div>
        //           <label className="mb-1 text-left block text-sm font-medium">
        //             Work email
        //           </label>
        //           <input
        //             type="email"
        //             name="email"
        //             value={formData.email}
        //             onChange={handleChange}
        //             placeholder="name@company.com"
        //             className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
        //           />
        //           {errors.email && (
        //             <p className="text-sm text-red-600 mt-1">{errors.email}</p>
        //           )}
        //         </div>
        //         <div>
        //           <label className="mb-1 text-left block text-sm font-medium">
        //             Company
        //           </label>
        //           <input
        //             type="text"
        //             name="company"
        //             value={formData.company}
        //             onChange={handleChange}
        //             placeholder="Company name"
        //             className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
        //           />
        //           {errors.company && (
        //             <p className="text-sm text-red-600 mt-1">
        //               {errors.company}
        //             </p>
        //           )}
        //         </div>
        //         <div>
        //           <label className="mb-1 text-left block text-sm font-medium">
        //             Company size
        //           </label>
        //           <select
        //             className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
        //             name="employees"
        //             value={formData.employees}
        //             onChange={handleChange}
        //           >
        //             <option>Number of employees</option>
        //             <option>1-10</option>
        //             <option>11-50</option>
        //             <option>51-200</option>
        //             <option>201-500</option>
        //             <option>500+</option>
        //           </select>
        //           {errors.employees && (
        //             <p className="text-sm text-red-600 mt-1">
        //               {errors.employees}
        //             </p>
        //           )}
        //         </div>
        //       </div>

        //       <div>
        //         <label className="mb-1 text-left block text-sm font-medium">
        //           Message <span className="text-gray-500">(optional)</span>
        //         </label>
        //         <textarea
        //           rows="4"
        //           name="message"
        //           value={formData.message}
        //           onChange={handleChange}
        //           placeholder="Tell us about your project, needs, and timeline."
        //           className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
        //         ></textarea>
        //       </div>

        //       <div>
        //         <label className="mb-1 text-left block text-sm font-medium">
        //           Where did you find us?{" "}
        //           <span className="text-gray-500">(optional)</span>
        //         </label>
        //         <input
        //           type="text"
        //           name="findUs"
        //           value={formData.findUs}
        //           onChange={handleChange}
        //           placeholder="How did you hear about us?"
        //           className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
        //         />
        //       </div>

        //       <button
        //         type="submit"
        //         className="w-full rounded cursor-pointer bg-black py-2 text-sm font-medium text-white hover:bg-gray-900"
        //       >
        //         Contact sales
        //       </button>

        //       <p className="mt-2 text-xs text-gray-500">
        //         By submitting this form, you confirm that you have read and
        //         understood Workforce&apos;s {""}
        //         <a href="#" className="underline">
        //           Privacy Policy
        //         </a>
        //         . This site is protected by {""}
        //         <a href="#" className="underline">
        //           Privacy Policy
        //         </a>{" "}
        //         and{" "}
        //         <a href="#" className="underline">
        //           Terms of Service
        //         </a>{" "}
        //         apply.
        //       </p>
        //     </form>
        //   </div>
        // </div>
        <Modal  isOpen={isOpen} onClose={() => setIsOpen(false)}>
           <form className="space-y-6 py-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="First and last name"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
                    Work email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                  {errors.company && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
                    Company size
                  </label>
                  <select
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                  >
                    <option>Number of employees</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                  {errors.employees && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.employees}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1 text-left block text-sm font-medium">
                  Message <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, needs, and timeline."
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                ></textarea>
              </div>

              <div>
                <label className="mb-1 text-left block text-sm font-medium">
                  Where did you find us?{" "}
                  <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="text"
                  name="findUs"
                  value={formData.findUs}
                  onChange={handleChange}
                  placeholder="How did you hear about us?"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded cursor-pointer bg-black py-2 text-sm font-medium text-white hover:bg-gray-900"
              >
                Contact sales
              </button>

              <p className="mt-2 text-xs text-gray-500">
                By submitting this form, you confirm that you have read and
                understood Workforce&apos;s {""}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                . This site is protected by {""}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </form>
        </Modal>
      )}
    </>
  );
};

export default LinkButtons;

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function FloatingFormToggle({ animate = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    employees: "",
    message: "",
    findUs: "",
  });

    const formDataWithType = {
  ...formData,
  formType: "contact",
};
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) || /@gmail\.com$/i.test(formData.email)
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

  //  const API_BASE =
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000"
  //   : "https://ep-fdesk-v2.vercel.app";

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   // try {
  //   //   const res = await axios.post(
  //   //     "http://localhost:5000/api/contact",
  //   //     formData
  //   //   );
  //   //   alert("✅ Form submitted successfully!");
  //   //   setFormData({
  //   //     fullName: "",
  //   //     email: "",
  //   //     company: "",
  //   //     employees: "",
  //   //     message: "",
  //   //     findUs: "",
  //   //   });
  //   //   setErrors({});
  //   // } catch (err) {
  //   //   alert("❌ Something went wrong.");
  //   // }
  //   // setFormData({})
  //   //   setIsOpen(false);
  //   try {
  //     const res = await axios.post(`${API_BASE}/api/contact`, formDataWithType);
  //     alert("✅ Your message was sent successfully!");
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setIsOpen(false);
  // };

const API_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost/epfdesk/server"
    : "https://epfdesk.com/server";

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch(`${API_BASE}/process_form.php`, {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData).toString(),
//     });

//     const result = await response.json();
//     console.log(result);
//     if (result.success) {
//       alert("✅ Message sent successfully!");
//     } else {
//       alert("❌ " + result.message);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("❌ Something went wrong.");
//   }
//   setIsOpen(false);
// };
 const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formPayload.append(key, value)
    );
    formPayload.append("access_key", "a9718221-b638-4ee6-bdc2-138fbe895a91");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          employees: "",
          message: "",
          findUs: "",
        });
        setErrors({});
        setIsOpen(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };
  return (
    <>
      <>
        <div
          className={`fixed right-6 bottom-6 z-50 flex flex-col gap-3 transition-all duration-500 ease-in-out sm:flex-row ${
            animate ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <button
            onClick={() => {
              const phone = "919243188888";
              const text = encodeURIComponent("Hi, I need help with EPFdesk.");
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}
            className="flex h-[50px] w-[50px] sm:w-[165px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-0 md:p-4 lg:p-4 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
          >
            <IoLogoWhatsapp className="size-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="flex h-[50px] w-[50px] sm:w-[165px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-0 md:p-4 lg:p-4 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
          >
            <EnvelopeIcon className="size-5" />
            <span className="hidden sm:inline">Contact Sales</span>
          </button>
        </div>
      </>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end bg-black/30"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="h-[80vh] w-full max-w-[500px] translate-y-0 overflow-y-auto bg-[#f5f5f5] p-6 shadow-lg transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-[-25px] mb-4 flex items-center justify-between border-b border-b-gray-200 px-[23px] pb-[23px]">
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-2xl leading-none text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>

            {/* <form className="space-y-6 py-2" onSubmit={handleSubmit}>
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
            </form> */}
            <form className="space-y-6 py-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="First and last name"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Work email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                  {errors.company && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Company size</label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  >
                    <option value="">Number of employees</option>
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
                <label className="block text-sm font-medium">
                  Message <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, needs, and timeline."
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Where did you find us?{" "}
                  <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="text"
                  name="findUs"
                  value={formData.findUs}
                  onChange={handleChange}
                  placeholder="How did you hear about us?"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded bg-black py-2 text-sm font-medium text-white hover:bg-gray-900"
              >
                Contact sales
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

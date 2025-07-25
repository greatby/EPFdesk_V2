import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    clientCode: "",
    uanNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (
      !emailRegex.test(formData.email) ||
      /@gmail\.com$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid work email (not Gmail)";
    }
    if (!/^[a-z0-9]+$/i.test(formData.clientCode)) {
      newErrors.clientCode = "Client code must be alphanumeric";
    }
    if (!/^\d+$/.test(formData.uanNumber)) {
      newErrors.uanNumber = "UAN number must be numeric";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ep-fdesk-v2.vercel.app";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "signup",
          email: formData.email,
          fullName: formData.fullName,
          clientCode: formData.clientCode,
          uanNumber: formData.uanNumber,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("Ticket submitted successfully.");
        setFormData({
          fullName: "",
          email: "",
          clientCode: "",
          uanNumber: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        toast.error("Failed to submit ticket.");
      }
    } catch (err) {
      toast.error("An error occurred.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (checkingAuth) return null;

  return (
    <>
      <div>
        <form
          className="space-y-6 w-full p-4 md:w-[50%] lg:w-[50%] mx-auto py-28"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-medium mb-1">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="First and last name"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
              />
              {errors.fullName && (
                <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-lg font-medium mb-1">
                Work email
              </label>
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

            {/* Client Code */}
            <div>
              <label className="block text-lg font-medium mb-1">
                Client Code
              </label>
              <input
                type="text"
                name="clientCode"
                value={formData.clientCode}
                onChange={handleChange}
                placeholder="Alphanumeric only"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
              />
              {errors.clientCode && (
                <p className="text-sm text-red-600 mt-1">{errors.clientCode}</p>
              )}
            </div>

            {/* UAN Number */}
            <div>
              <label className="block text-lg font-medium mb-1">
                UAN Number
              </label>
              <input
                type="text"
                name="uanNumber"
                value={formData.uanNumber}
                onChange={handleChange}
                placeholder="Numeric only"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
              />
              {errors.uanNumber && (
                <p className="text-sm text-red-600 mt-1">{errors.uanNumber}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-lg font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ticket subject"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            />
            {errors.subject && (
              <p className="text-sm text-red-600 mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-medium mb-1">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your issue or request"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 text-lg font-medium"
          >
            Submit
          </button>

          {/* Status */}
          {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}

          {/* Footer */}
          <p className="mt-2 text-xs text-gray-500">
            By submitting this form, you confirm that you have read and
            understood our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            . This site is protected by{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>
            .
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;

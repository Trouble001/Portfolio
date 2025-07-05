import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";


const ContactForm = () => {
  const { themeColors, color } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'success' or 'error'
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xdkzvazn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again later.");
      console.log(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full h-auto py-8 px-6 lg:px-8 flex flex-col items-start justify-center">
      <h4 className="mb-4 text-lg md:text-xl lg:text-xl font-medium text-black/80 dark:text-white/70">How i can help you? Send a message to me!</h4>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 text-black/90 dark:text-white/80 outline outline-black/20 dark:outline-white/20 mb-4 rounded shadow"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 text-black/90 dark:text-white/80 outline outline-black/20 dark:outline-white/20 mb-4 rounded shadow"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Write your message here..."
        className="w-full px-4 py-2 text-black/90 dark:text-white/80 outline outline-black/20 dark:outline-white/20 mb-4 rounded shadow"></textarea>
      <button
        type="submit"
        className={`text-white/100 px-8 py-1.5 shadow-md rounded mb-2 ${themeColors[color].bg} transition-colors duration-500`}>Send</button>
        {status === "success" && (
          <p className="text-green-600 text-sm">{message}</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">{message}</p>
        )}
    </form>
  )
}

export default ContactForm;
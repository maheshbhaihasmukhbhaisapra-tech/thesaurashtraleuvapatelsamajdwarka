import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Phone, ArrowUp } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../../store/MyContext";

const BookingEnquiry = () => {
  const { phoneNo } = useContext(MyContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    requirements: "",
  });

  // Handle field updates
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // On submit → send to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual WhatsApp number (with country code)
    const whatsappNumber = phoneNo;

    // Build formatted message
    const message =
      `*New Room Booking Enquiry*\n\n` +
      ` *Full Name:* ${formData.name || "N/A"}\n` +
      ` *Phone Number:* ${formData.phone || "N/A"}\n` +
      ` *Check-in Date:* ${formData.date || "N/A"}\n` +
      ` *Guests:* ${formData.guests || "N/A"}\n` +
      ` *Additional Requirements:* ${formData.requirements || "None"}\n\n` +
      `Please confirm availability and rates.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#fdfaf7]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden mt-8 mb-16 bg-white">
        {/* LEFT: Contact Info */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-[#7d5227] to-[#5f3e1e] text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            Get in Touch
          </h2>
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-5">
              <span className="bg-white/20 backdrop-blur-md p-4 rounded-full flex items-center justify-center text-2xl">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                <p className="text-gray-100 text-base leading-relaxed">
                  Saurashtra Leuva Patel Samaj Bhavan,
                  <br />
                  Dwarka, Gujarat 361335
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <span className="bg-white/20 backdrop-blur-md p-4 rounded-full flex items-center justify-center text-2xl">
                <FaPhoneAlt />
              </span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone No.</h3>
                <a href={`tel:${phoneNo}`} className="text-gray-100 text-base hover:underline">
                  <p>{phoneNo}</p>
                </a>
              </div>
            </div>

            {/* Email */}
            // <div className="flex items-start gap-5">
            //   <span className="bg-white/20 backdrop-blur-md p-4 rounded-full flex items-center justify-center text-2xl">
            //     <FaEnvelope />
            //   </span>
            //   <div>
            //     <h3 className="font-semibold text-lg mb-1">Message Us</h3>
            //     <a href="mailto:support@saurashtrapatelsamajbhawandwarka.space" className="text-gray-100 text-base break-all hover:underline">
            //       support@saurashtrapatelsamajbhawandwarka.space
            //     </a>
            //   </div>
            // </div>
          </div>
        </div>

        {/* RIGHT: Booking Form */}
        <div className="w-full md:w-2/3 bg-[#f6f3ed] py-10 px-6 sm:px-10 flex flex-col justify-center">
          <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10 text-[#4b2e09]">
            Check Room Booking Enquiry
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-5 py-3 w-full focus:outline-none focus:border-[#7d5227] placeholder-gray-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-5 py-3 w-full focus:outline-none focus:border-[#7d5227] placeholder-gray-500"
              />
            </div>

            {/* Date + Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="date"
                placeholder="Check-in Date (dd/mm/yyyy)"
                value={formData.date}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-5 py-3 w-full focus:outline-none focus:border-[#7d5227] placeholder-gray-500"
              />
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-5 py-3 w-full focus:outline-none focus:border-[#7d5227] placeholder-gray-500"
              />
            </div>

            {/* Additional Requirements */}
            <textarea
              name="requirements"
              placeholder="Additional Requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              className="border border-gray-300 rounded-md px-5 py-3 w-full focus:outline-none focus:border-[#7d5227] placeholder-gray-500"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#7d5227] text-white font-semibold text-lg py-4 rounded-md hover:bg-[#a86b35] transition duration-200 shadow-md"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="w-full mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3692.835430738334!2d68.956612!3d22.246322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569d00124570c5%3A0xb1c6c7ced59bc019!2sSaurastra%20Leuva%20Patel%20Samaj%20Bhavan!5e0!3m2!1sen!2sin!4v1760011412687!5m2!1sen!2sin"
          className="w-full h-72 md:h-[450px] border-none"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingEnquiry;

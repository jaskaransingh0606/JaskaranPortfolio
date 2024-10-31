import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  emailjs.init('gxYSs3pzwJA6HQRgO');

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send('service_kzhqtgl','template_gan0xum', {
        from_name: form.name,
        to_name: "jaskaran singh",
        from_email: form.email,
        to_email: "devjaskaransingh12@gmail.com",
        message: form.message,
      } , 'gxYSs3pzwJA6HQRgO').then(()=>{
        setLoading(false);
        alert("Message sent succesfully");
        setForm({
          name:'',
          email:'',
          message:''
        })
    });
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong");
    }
  };
  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          className="absolute inset-0 min-h-screen"
        ></img>
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3"> </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                required
                onChange={handleChange}
                className="field-input"
                placeholder="Jakaran Singh"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
                className="field-input"
                placeholder="xyz@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                required
                rows={5}
                onChange={handleChange}
                className="field-input"
                placeholder="I want to work with you.."
              />
            </label>

            <button className="field-btn" type="sybmit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
              <img src="/assets/arrow-up.png" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState , ChangeEvent, FormEvent } from "react";
import style from "./Homecontact.module.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";
export default function Homecontact() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

   const handleSubmit = (e: FormEvent) => {
     e.preventDefault();

    // EmailJS parameters
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      to_email: "cognitex.ai@gmail.com", // Your email
    };

    emailjs
      .send(
        "cognitex", // Replace with your EmailJS Service ID
        "cognitex_temp", // Replace with your EmailJS Template ID
        emailParams,
        "8UzoUHRai9VYjEtX7" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Your message has been sent!");
          setFormData({ name: "", email: "", subject: "", phone: "" });
          setShowPopup(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className={style.homecontact_main}>
        {showPopup && <div className={style.backdrop}></div>}
        <div className={style.homecontact_in}>
          <div className={style.homecontact_textDiv}>
            <h1 className={style.homecontact_heading}>Discuss Your Use Case</h1>
            <p className={style.homecontact_pra}>
              Consult with us, get a situational analysis, and receive a tailored demo.
            </p>
            <button className={style.homecontact_btn} onClick={handleCardClick}>
              Contact us
            </button>
          </div>
          <div className={style.homecontact_iconDiv}>
            <Image width={1000} height={1000} src="/images/audio_line.svg" alt="" />
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={style.popup}>
          <button className={style.closeButton} onClick={handleClosePopup}>
            X
          </button>
          <form onSubmit={handleSubmit} className={style.form}>
            <h2 className={style.title}>Request a Call Back</h2>

            <label className={style.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={style.input}
              required
            />

            <label className={style.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={style.input}
              required
            />

            <label className={style.label}>Phone no:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={style.input}
              required
            />

            <label className={style.label}>Subject:</label>
            <textarea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className={style.textarea}
              required
            ></textarea>

            <button type="submit" className={style.button}>
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

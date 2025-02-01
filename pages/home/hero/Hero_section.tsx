import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import style from "./Hero.module.css";
import Brand from "./brand/Brand";
import Link from 'next/link';
import emailjs from "@emailjs/browser";

export default function HeroSection() {
  const phrases: string[] = ["cold calling", "customer support", "real estate"];

  const [currentPhrase, setCurrentPhrase] = useState<string>("");
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [typing, setTyping] = useState<boolean>(true);
  const [pause, setPause] = useState<boolean>(false);
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

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      to_email: "cognitex.ai@gmail.com",
    };

    emailjs
      .send(
        "cognitex",
        "cognitex_temp",
        emailParams,
        "8UzoUHRai9VYjEtX7"
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

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (pause) {
      timeout = setTimeout(() => {
        setPause(false);
        setTyping(false);
      }, 2000);
    } else if (typing) {
      if (charIndex < phrases[phraseIndex].length) {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => prev + phrases[phraseIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 200);
      } else {
        setPause(true);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 100);
      } else {
        setTyping(true);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, pause, phraseIndex, phrases]);

  return (
    <>
      <main className={style.hero_mainDiv}>
        {showPopup && <div className={style.backdrop}></div>}
        <div className={style.hero_elementDivOne}></div>
        <div className={style.hero_elementDivTwo}></div>
        <img className={style.hero_animation} src="./images/herogif.gif" alt="" />
        <div className={style.hero_inDiv}>
          <div className={style.hero_textDiv}>
            <h1 className={style.hero_heading}>AI voice agents for</h1>
            <h1 className={style.hero_typeText}>{currentPhrase}</h1>
            <p className={style.hero_discription}>
              Create no-code AI phone call systems with our AI voice agents: never miss a call again and convert more leads
            </p>
            <div className={style.hero_btnDiv}>
              <Link className={style.nav_btnLink} href="/demo">
                <button className={style.hero_fillBtn}>Try it now</button>
              </Link>
              <button className={style.hero_transBtn} onClick={handleCardClick}>Contact Us</button>
            </div>
          </div>
          <div className={style.hero_brandDiv}>
            <Brand />
          </div>
        </div>
      </main>
      {showPopup && (
        <div className={style.popup}>
          <button className={style.closeButton} onClick={handleClosePopup}>X</button>
          <form onSubmit={handleSubmit} className={style.form}>
            <h2 className={style.title}>Request a Call Back</h2>
            <label className={style.label}>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className={style.input} required />
            <label className={style.label}>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className={style.input} required />
            <label className={style.label}>Phone no:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className={style.input} required />
            <label className={style.label}>Subject:</label>
            <textarea name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" className={style.textarea} required></textarea>
            <button type="submit" className={style.button}>Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

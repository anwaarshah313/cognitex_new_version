import { useState, useEffect } from "react";
import style from "./Hero.module.css";
import Brand from "./brand/Brand";
import Link from 'next/link';

export default function HeroSection() {
  // Define the type for the phrases array
  const phrases: string[] = ["cold calling", "customer support", "real estate"]; // Phrases to display

  const [currentPhrase, setCurrentPhrase] = useState<string>(""); // Current visible text
  const [phraseIndex, setPhraseIndex] = useState<number>(0); // Tracks the phrase index
  const [charIndex, setCharIndex] = useState<number>(0); // Tracks the character index
  const [typing, setTyping] = useState<boolean>(true); // Determines typing or deleting
  const [pause, setPause] = useState<boolean>(false); // Pauses after fully typing

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (pause) {
      // Pause after fully typing a word
      timeout = setTimeout(() => {
        setPause(false); // Resume deleting
        setTyping(false); // Start deleting after the pause
      }, 2000); // Pause duration
    } else if (typing) {
      // Typing logic
      if (charIndex < phrases[phraseIndex].length) {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => prev + phrases[phraseIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 200); // Typing speed
      } else {
        setPause(true); // Pause when typing completes
      }
    } else {
      // Deleting logic
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 100); // Deleting speed
      } else {
        // Move to the next phrase
        setTyping(true); // Switch back to typing mode
        setPhraseIndex((prev) => (prev + 1) % phrases.length); // Go to the next phrase
      }
    }

    return () => clearTimeout(timeout); // Clean up timeouts
  }, [charIndex, typing, pause, phraseIndex, phrases]);

  return (
    <>
      <main className={style.hero_mainDiv}>
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
              <button className={style.hero_fillBtn}>Try demo</button> </Link>
              <button className={style.hero_transBtn}>Get Started</button>
            </div>
          </div>
          <div className={style.hero_brandDiv}>
            <Brand />
          </div>
        </div>
      </main>
    </>
  );
}

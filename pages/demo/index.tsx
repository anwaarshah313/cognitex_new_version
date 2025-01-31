import React, { useState } from 'react';
import style from './demo.module.css';
import Link from 'next/link';

export default function DemoPage() {
    const [showPopup, setShowPopup] = useState(false);
    const [iframeSrc, setIframeSrc] = useState('');

    const handleCardClick = (src) => {
        setIframeSrc(src);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className={`${style.demo_container} ${showPopup && style.blur}`}>
                {showPopup && <div className={style.backdrop} onClick={handleClosePopup}></div>}

                <img className={style.demo_radialImage} src="./images/radial.svg" alt="" />

                <nav className={style.demo_nav_main}>
                    <div className={style.demo_nav_in}>
                        <Link href="/">
                            <img className={style.demo_nav_logo} src="./images/logo.png" alt="Logo" />
                        </Link>
                        <Link href="/">
                            <button className={style.demo_nav_btn}>Back to Home</button>
                        </Link>
                    </div>
                </nav>

                <main className={style.demo_mainContent}>
                    <p className={style.demo_pra}>Get a free demo</p>
                    <h1 className={style.demo_title}>Experience with these Agents</h1>
                    <img className={style.demoONe} src="./images/demo_wave_1.GIF" alt="" />

                    <div className={style.demo_agentCards}>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://goag.vercel.app/')}>
                            <img src="./images/cognitex.png" alt="Cognitex" />
                            <p>Cognitex</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://goag.vercel.app/')}>
                            <img src="./images/food_order.png" alt="Food Ordering" />
                            <p>Food Ordering</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://goag.vercel.app/')}>
                            <img src="./images/order_track.png" alt="Order Tracking" />
                            <p>Order Tracking</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://goag.vercel.app/')}>
                            <img src="./images/appointment.png" alt="Appointment" />
                            <p>Appointment</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://goag.vercel.app/')}>
                            <img src="./images/ride_book.png" alt="Ride Booking" />
                            <p>Ride Booking</p>
                        </div>

                    </div>
                </main>

            </div>
            {showPopup && (
                <div className={style.popup}>
                    <button className={style.closeButton} onClick={handleClosePopup}>X</button>
                    <iframe src={iframeSrc} allow="microphone" className={style.iframeStyle}></iframe>
                </div>
            )}
        </>
    );
}




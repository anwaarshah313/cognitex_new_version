import React, { useState } from 'react';
import style from './demo.module.css';
import Link from 'next/link';
import Image from "next/image";

export default function DemoPage() {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [iframeSrc, setIframeSrc] = useState<string>('');

    const handleCardClick = (src: string) => {
        setIframeSrc(src);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className={`${style.demo_container} ${showPopup ? style.blur : ''}`}>
                {showPopup && <div className={style.backdrop} onClick={handleClosePopup}></div>}

                <Image width={1000} height={1000}  className={style.demo_radialImage} src="/images/radial.svg" alt="" />

                <nav className={style.demo_nav_main}>
                    <div className={style.demo_nav_in}>
                        <Link href="/">
                            <Image width={800} height={100}  className={style.demo_nav_logo} src="/images/logo.png" alt="Logo" />
                        </Link>
                        <Link href="/">
                            <button className={style.demo_nav_btn}>Back to Home</button>
                        </Link>
                    </div>
                </nav>

                <main className={style.demo_mainContent}>
                    <p className={style.demo_pra}>Get a free demo</p>
                    <h1 className={style.demo_title}>Experience with these Agents</h1>
                    <Image  width={1000} height={1000}  className={style.demoONe} src="/images/demo_wave_1.gif" alt="" />

                    <div className={style.demo_agentCards}>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://goag.vercel.app/')}>
                            <Image width={100} height={100}  src="/images/cognitex.png" alt="Cognitex" />
                            <p>Receptionist</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://telepizza-ochre.vercel.app/')}>
                            <Image width={100} height={100}   src="/images/food_order.png" alt="Food Ordering" />
                            <p>Food Ordering</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://customersupport-eta.vercel.app/')}>
                            <Image  width={100} height={100}  src="/images/order_track.png" alt="Order Tracking" />
                            <p>Help Desk</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://healwell-ten.vercel.app/')}>
                            <Image width={100} height={100}   src="/images/appointment.png" alt="Appointment" />
                            <p>Appointment</p>
                        </div>
                        <div className={style.demo_card} onClick={() => handleCardClick('https://ridebooking.vercel.app/')}>
                            <Image width={100} height={100}  src="/images/ride_book.png" alt="Ride Booking" />
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

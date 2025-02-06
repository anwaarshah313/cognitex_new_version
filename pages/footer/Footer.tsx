import React from 'react'
import style from "./Footer.module.css"
import { FaLinkedin, 
    // FaInstagram,
     FaEnvelope } from "react-icons/fa";
     import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className={style.footer_main}>
                <div className={style.footer_in}>

                    <div className={style.footer_topDiv}>
                        <Image width={800} height={100} className={style.footer_logo} src="/images/logo.png" alt="" />
                        <div className={style.footer_iconDiv}>
                        <a href="https://www.linkedin.com/company/cognitexai" target="_blank" rel="noopener noreferrer" className={style.footer_iconA}>
                            <FaLinkedin className={style.footer_icon} />
                        </a>
                        {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={style.footer_iconA}>
                            <FaInstagram className={style.footer_icon} />
                        </a> */}
                        <a href="mailto:cognitex.ai@gmail.com" target="_blank" rel="noopener noreferrer" className={style.footer_iconA}>
                            <FaEnvelope className={style.footer_icon} />
                        </a>
                        </div>
                    </div>

                    <div className={style.footer_bottomDiv}>
                        <p className={style.footer_leftPra}>Privacy Policy   GDPR  System Status    </p>
                        <p className={style.footer_rightPra}> Copyright 2025  | Cognitex AI. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

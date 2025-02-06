import React from 'react'
import style from "./Features.module.css"
import Image from "next/image";

export default function Features() {
    return (
        <>
            <div className={style.feature_main}>
                <div className={style.feature_in}>

                    <Image width={2000} height={2000}  className={style.feature_img} src="/images/feature.png" alt="" />

                    <div className={style.feature_textDiv}>
                        <h1 className={style.feature_heading}> What make us  <span className={style.feature_headingSpan}> unique </span></h1>
                        <p className={style.feature_discription}>Discover the powerful tools and capabilities designed to elevate your experience.
                        </p>
                    </div>

                    <div className={style.feature_cardDiv}>


                        <div className={style.feature_card}>
                            <div className={style.feature_cardIconDiv}> <div className={style.feature_cardIcon}><Image width={60} height={60} src="/images/dollar.svg" alt="" /></div></div>
                            <h2 className={style.feature_cardHeading}>Create New Agent</h2>
                            <p className={style.feature_cardDiscription}>Expand your reach, streamline operations, and reduce costs for sustainable growth.</p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_cardIconDiv}> <div className={style.feature_cardIcon}><Image width={60} height={60}  src="/images/Scalable.svg" alt="" /></div></div>
                            <h2 className={style.feature_cardHeading}>Scalable</h2>
                            <p className={style.feature_cardDiscription}>Easily scale your calling as your business grows.</p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_cardIconDiv}> <div className={style.feature_cardIcon}><Image width={60} height={60}  src="/images/Real_time_Stats.svg" alt="" /></div></div>
                            <h2 className={style.feature_cardHeading}>Real-time Stats</h2>
                            <p className={style.feature_cardDiscription}>Get instant insights to optimize performance.</p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_cardIconDiv}> <div className={style.feature_cardIcon}><Image width={60} height={60}  src="/images/Customer_Support.svg" alt="" /></div></div>
                            <h2 className={style.feature_cardHeading}>Customer Support</h2>
                            <p className={style.feature_cardDiscription}>24/7 support for uninterrupted customer service.</p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_cardIconDiv}> <div className={style.feature_cardIcon}><Image width={60} height={60}  src="/images/Tailored_Response.svg" alt="" /></div></div>
                            <h2 className={style.feature_cardHeading}>Tailored Response</h2>
                            <p className={style.feature_cardDiscription}>Personalized interactions that boost engagement.</p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_cardIconDiv}> <div className={style.feature_cardIcon}><Image width={60} height={60}  src="/images/Multilingual.svg" alt="" /></div></div>
                            <h2 className={style.feature_cardHeading}>Multilingual</h2>
                            <p className={style.feature_cardDiscription}>Personalized interactions that boost engagement.</p>
                        </div>





                    </div>

                </div>
            </div>

        </>
    )
}

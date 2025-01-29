import React, { useState } from 'react';
import style from "./Customers.module.css";

// Defining types for your review objects
interface Review {
    name: string;
    username: string;
    body: string;
    img: string;
}

// Define the component as a functional component
const Customers: React.FC = () => {
    const reviews: Review[] = [
        {
            name: "Avi Shetty",
            username: "Tech Manager",
            body: "Experience was awesome. Understood the requirements, delivered it on time. Also helped us deploy his module into our own code base. It was a breeze working with him.",
            img: "./images/dummy_image.png",
        },
        {
            name: "Charlie Brooker",
            username: "CEO Digimax Dental",
            body: "The Team developed Website audit tool for us. They are very professional and delivered the project on time. I highly recommend them.",
            img: "./images/dummy_image.png",
        },
        {
            name: "Thomas Fotteler",
            username: "Freelance Trader",
            body: "The Team is an expert in C#. They can solve problems and can think by themself. I highly recommend him and will hire him again. Thank you for you help. Great work! ",
            img: "./images/dummy_image.png",
        },
        {
            name: "Amr Aboeleneen",
            username: "Research at Qatar University",
            body: "Smart and Excellent freelancer. Finished My task fast !",
            img: "./images/dummy_image.png",
        },
        {
            name: "Ryan Stewart",
            username: "Consultant Physician | MBBS Doctor",
            body: "We are developing Exam Prep Bot with Cognitex. The work is still under progress. They are passionate to work.",
            img: "./images/dummy_image.png",
        },
    ];

    const [visibleStartIndex, setVisibleStartIndex] = useState<number>(0);

    const selectDiv = (index: number) => {
        setVisibleStartIndex(index);
    };

    return (
        <>
            <div className={`${style.customers_main} ${style.desktop}`}>
                <div className={style.customers_in}>
                    <div className={style.customers_textDiv}>
                        <h1 className={style.customers_heading}>What Our <span className={style.customers_headingSpan}>Customers Say</span></h1>
                        <p className={style.customers_pra}>Discover what our users say about the transformative impact of our tool.</p>
                    </div>

                    <div className={style.customers_carousel}>
                        {reviews.slice(visibleStartIndex, visibleStartIndex + 3).map((review, index) => (
                            <div key={index} className={`${style.customers_divContent} ${index === 0 ? style.customers_firstDiv : index === 2 ? style.customers_lastDiv : style.customers_middleDiv}`}>
                                <div className={style.customers_imgOut}>
                                    <img src="./images/quote.svg" alt="" />
                                    <img src={review.img} alt={`${review.name}'s testimonial`} className={style.customersImage} />
                                </div>
                                <p className={style.customerBody}>{review.body}</p>
                                <div className={style.customerName}>{review.name}</div>
                                <div className={style.customerUsername}>{review.username}</div>
                            </div>
                        ))}
                    </div>

                    <div className={style.customers_dotDiv}>
                        {Array.from({ length: reviews.length - 2 }).map((_, index) => (
                            <span key={index} className={`${style.customers_dot} ${index === visibleStartIndex ? style.customers_activeDot : ''}`} onClick={() => selectDiv(index)}></span>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`${style.customersMobile_main} ${style.customersMobile}`}>
                <div className={style.customersMobile_in}>
                    <div className={style.customers_textDiv}>
                        <h1 className={style.customers_heading}>What Our <span className={style.customers_headingSpan}>Customers Say</span></h1>
                        <p className={style.customers_pra}>Discover what our users say about the transformative impact of our tool.</p>
                    </div>

                    <div className={style.customersMobile_carousel}>
                        {reviews.slice(visibleStartIndex, visibleStartIndex + 1).map((review, index) => (
                            <div key={index} className={style.customersMobile_divContent}>
                                <div className={style.customersMobile_imgOut}>
                                    <img src="./images/quote.svg" alt="" />
                                    <img src={review.img} alt={`${review.name}'s testimonial`} className={style.customersMobileImage} />
                                </div>
                                <p className={style.customerBody}>{review.body}</p>
                                <div className={style.customerName}>{review.name}</div>
                                <div className={style.customerUsername}>{review.username}</div>
                            </div>
                        ))}
                    </div>

                    <div className={style.customersMobile_dotDiv}>
                        {Array.from({ length: reviews.length }).map((_, index) => (
                            <span key={index} className={`${style.customersMobile_dot} ${index === visibleStartIndex ? style.customersMobile_activeDot : ''}`} onClick={() => selectDiv(index)}></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customers;

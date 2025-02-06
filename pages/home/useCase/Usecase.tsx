import React, { useState } from "react";
import {
    // FaDollarSign, FaExpand, FaChartBar,  FaCommentDots, FaFlask,
    FaHeadset, FaPizzaSlice, FaCalendarCheck, FaTaxi, FaBox, FaInfoCircle,
    FaPhone, FaClipboardList, FaRegMoneyBillAlt, FaTags, FaUsers, FaComments,
    FaHeart,
    FaRobot,
    FaUsersCog,
    FaUserTie
} from 'react-icons/fa';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,

} from "@/components/ui/tabs"
import Image from "next/image";
import style from "./Usecase.module.css"

export default function Usecase() {

    const [selectedTab, setSelectedTab] = useState("Inbound");

    return (
        <>
            <div className={style.usecase_main}>
                <div className={style.usecase_in}>



                    <div className={style.usecase_textDiv}>
                        <h1 className={style.usecase_heading}>Diverse  <span className={style.usecase_headingSpan}> Use Cases </span></h1>
                        <p className={style.usecase_discription}>See how CogniVoice transforms customer interactions through intelligent call automation.
                        </p>
                    </div>

                    <Tabs defaultValue="Inbound" className={style.usecase_tabMain}>

                        <TabsList className={style.usecase_tabList}>
                            <div className={style.usecase_tabListIn}>
                                <TabsTrigger
                                    className={`${style.usecase_tabBtn} ${selectedTab === "Inbound" ? style.activeTab : ""
                                        }`}
                                    value="Inbound"
                                    onClick={() => setSelectedTab("Inbound")}
                                >
                                    Inbound
                                </TabsTrigger>
                                <div></div>
                                <TabsTrigger
                                    className={`${style.usecase_tabBtn} ${selectedTab === "Outbound" ? style.activeTab : ""
                                        }`}
                                    value="Outbound"
                                    onClick={() => setSelectedTab("Outbound")}
                                >
                                    Outbound
                                </TabsTrigger>
                                <div></div>
                                <TabsTrigger
                                    className={`${style.usecase_tabBtn} ${selectedTab === "Voice" ? style.activeTab : ""
                                        }`}
                                    value="Voice"
                                    onClick={() => setSelectedTab("Voice")}
                                >
                                    Converse
                                </TabsTrigger>
                            </div>
                        </TabsList>

                        <TabsContent value="Inbound">
                            <div className={style.usecase_bannerDiv}>

                                {inboundBanner.map((card, index) => (
                                    <div key={index} className={style.usecase_banner}>
                                        
                                        <Image width={800} height={100} className={style.usecase_bannerImg} src="/images/inbound.png" alt="banner" />
                                        <h1 className={style.usecase_bannerHeading}>

                                        {card.banner_title}
                                        </h1>
                                        <p className={style.usecase_bannerPra}>

                                        {card.banner_discription}
                                        </p>
                                    </div>
                                ))}

                                <div className={style.usecase_tabContentDiv}>
                                    {inbound.map((card, index) => (
                                        <div key={index} className={style.usecase_tabContentCard}>
                                            <div className={style.usecase_tabIconDiv}>
                                                <h3 className={style.usecase_tabCardHeading}>{card.title}</h3>
                                                <div className={style.usecase_tabCardIcon}>{card.icon}</div>
                                            </div>
                                            <p className={style.usecase_tabCardPra}>{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </TabsContent>
                        <TabsContent value="Outbound">

                            <div className={style.usecase_bannerDiv}>


                                {outboundBanner.map((card, index) => (
                                    <div key={index} className={style.usecase_banner}>
                                       
                                       <Image width={800} height={100} className={style.usecase_bannerImg} src="/images/outbound.png" alt="banner" />
                                        <h1 className={style.usecase_bannerHeading}>

                                        {card.banner_title}
                                        </h1>
                                        <p className={style.usecase_bannerPra}>

                                        {card.banner_discription}
                                        </p>
                                    </div>
                                ))}

                                <div className={style.usecase_tabContentDiv}>
                                    {outbound.map((card, index) => (
                                        <div key={index} className={style.usecase_tabContentCard}>
                                            <div className={style.usecase_tabIconDiv}>
                                                <h3 className={style.usecase_tabCardHeading}>{card.title}</h3>
                                                <div className={style.usecase_tabCardIcon}>{card.icon}</div>
                                            </div>
                                            <p className={style.usecase_tabCardPra}>{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </TabsContent>
                        <TabsContent value="Voice">

                            <div className={style.usecase_bannerDiv}>

                                {voiceBanner.map((card, index) => (
                                    <div key={index} className={style.usecase_banner}>

                                        <Image width={800} height={100} className={style.usecase_bannerImg} src="/images/converse.png" alt="banner" />
                                        <h1 className={style.usecase_bannerHeading}>

                                        {card.banner_title}
                                        </h1>
                                        <p className={style.usecase_bannerPra}>

                                        {card.banner_discription}
                                        </p>
                                    </div>
                                ))}

                                <div className={style.usecase_tabContentDiv}>
                                    {voice.map((card, index) => (
                                        <div key={index} className={style.usecase_tabContentCard}>
                                            <div className={style.usecase_tabIconDiv}>
                                                <h3 className={style.usecase_tabCardHeading}>{card.title}</h3>
                                                <div className={style.usecase_tabCardIcon}>{card.icon}</div>
                                            </div>
                                            <p className={style.usecase_tabCardPra}>{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </TabsContent>
                    </Tabs>

                </div>
            </div>
        </>
    )
}


const inboundBanner =[
    {
        banner_title: 'Inbound Call',
        banner_discription: 'Automate the management of inbound calls to improve customer experience and increase operational efficiency.'
    },
]

const outboundBanner =[
    {
        banner_title: 'Outbound Call',
        banner_discription: 'Proactively engage customers and drive business growth through automated management of outbound calls.'
    },
]

const voiceBanner =[
    {
        banner_title: 'Voice Agents',
        banner_discription: 'Elevate user experience with AI-driven voice agents, enabling seamless voice interactions on your website.'
    },
]


const inbound = [
  
    {
        title: 'Food Ordering',
        description: 'CogniVoice simplifies food ordering with fast, accurate, and 24/7 automation.',
        icon: <FaPizzaSlice />,
    },
    {
        title: 'Appointment Booking',
        description: 'Easily book, modify, or cancel appointments through voice with zero wait time.',
        icon: <FaCalendarCheck />,
    },
    {
        title: 'Customer Support',
        description: 'Provide instant, round-the-clock support without the need for human agents.',
        icon: <FaHeadset />,
    },
    {
        title: 'Ride Booking',
        description: 'Automate ride bookings for immediate or scheduled pickups, reducing call handling time.',
        icon: <FaTaxi />,
    },
    {
        title: 'Order Tracking',
        description: 'Enable customers to track orders in real-time through a quick, conversational bot.',
        icon: <FaBox />,
    },
    {
        title: 'Info Asking',
        description: 'Answer customer queries instantly, providing quick access to relevant information.',
        icon: <FaInfoCircle />,
    },
];


const outbound = [
    {
        title: 'Medicare Telemarketing Calls',
        description: 'CogniVoice educates seniors about Medicare options with automated calls.',
        icon: <FaPhone />,
    },
    {
        title: 'Feedback Checking',
        description: 'Gather customer insights quickly through automated feedback surveys.',
        icon: <FaClipboardList />,
    },
    {
        title: 'Appointment Reminders',
        description: 'Send timely reminders to customers about their upcoming appointments.',
        icon: <FaRegMoneyBillAlt />,
    },
    {
        title: 'Promotional Offers',
        description: 'Inform customers about exclusive promotions to boost engagement.',
        icon: <FaTags />,
    },
    {
        title: 'Customer Win-back Campaigns',
        description: 'Re-engage former customers with targeted offers to encourage returns.',
        icon: <FaUsers />,
    },
    {
        title: 'Payment Reminders',
        description: 'Automate payment reminders to help customers stay on track with their bills.',
        icon: <FaComments />,
    },
];




const voice = [
    {
        title: 'Sales Roleplay Training',
        description: 'Simulate real-world sales calls to enhance team performance.',
        icon: <FaUserTie />,
    },
    {
        title: 'Conversation Practice',
        description: 'Improve communication skills with interactive simulations.',
        icon: <FaComments />,
    },
    {
        title: 'AI-powered Assistants',
        description: 'Automate routine tasks with intelligent digital employees.',
        icon: <FaRobot />,
    },
    {
        title: 'Interview Prep Sessions',
        description: 'Prepare for interviews with lifelike mock interview simulations.',
        icon: <FaUsersCog />,
    },
    {
        title: 'Virtual Counseling',
        description: 'Offer mental health support through empathetic AI conversations.',
        icon: <FaHeart />,
    },
    {
        title: 'AI Companions',
        description: 'Provide companionship and conversation through AI-driven interactions.',
        icon: <FaComments />,
    },
];
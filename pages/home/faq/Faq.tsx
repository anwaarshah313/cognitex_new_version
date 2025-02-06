import React from 'react'
import style from "./Faq.module.css"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Faq() {
    return (
        <>
            <div className={style.faq_main}>
                <div className={style.faq_in}>

                    <div className={style.faq_textDiv}>
                        <h1 className={style.faq_heading}>FAQ&apos;s</h1>
                        <p className={style.faq_pra}> Everything You Need to Know</p>
                    </div>

                    <div className={style.faq_outDiv}>

                        <Accordion type="single" collapsible defaultValue="item-1" className={style.acc_outDiv}>
                            <AccordionItem className={style.acc_item} value="item-1">
                                <AccordionTrigger className={style.acc_head}>How can AI calling benefit my business?</AccordionTrigger>
                                <AccordionContent className={style.acc_pra}>
                                    AI calling improves efficiency by automating tasks, enhances customer experience with instant responses, and reduces operational costs.
                                </AccordionContent>
                            </AccordionItem>
                           
                            <AccordionItem className={style.acc_item} value="item-2">
                                <AccordionTrigger className={style.acc_head}>Can I customize the Voice Calling Bots?</AccordionTrigger>
                                <AccordionContent className={style.acc_pra}>
                                    Yes, our bots are highly customizable to match your brand's voice, conversation flow, and specific operational requirements.
                                </AccordionContent>
                            </AccordionItem>
                           
                            <AccordionItem className={style.acc_item} value="item-3">
                                <AccordionTrigger className={style.acc_head}>How do I get started with your services?</AccordionTrigger>
                                <AccordionContent className={style.acc_pra}>
                                    Simply contact us to schedule a consultation, and we’ll guide you through the onboarding process tailored to your needs.
                                </AccordionContent>
                            </AccordionItem>
                           
                            <AccordionItem className={style.acc_item} value="item-4">
                                <AccordionTrigger className={style.acc_head}>Are your bots available in multiple languages?</AccordionTrigger>
                                <AccordionContent className={style.acc_pra}>
                                    Yes, our bots support multiple languages to cater to diverse customer bases and enhance accessibility.
                                </AccordionContent>
                            </AccordionItem>
                           
                            <AccordionItem className={style.acc_item} value="item-5">
                                <AccordionTrigger className={style.acc_head}> Can I integrate the bots with my existing CRM system?</AccordionTrigger>
                                <AccordionContent className={style.acc_pra}>
                                    Yes, our bots can be integrated with various CRM systems to streamline workflows and enhance customer relationship management.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>

                </div>
            </div>
        </>
    )
}

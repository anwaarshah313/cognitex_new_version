import React from 'react'
import style from "./Setupagent.module.css"

export default function Setupagent() {
    return (
        <>
            <div className={style.setupagent_main}>
                <div className={style.setupagent_in}>

                    <div className={style.setupagent_textDiv}>
                        <h1 className={style.setupagent_heading}> Setup your <span className={style.setupagent_headingSpan}> Voice Agent </span></h1>
                        <p className={style.setupagent_discription}>Easily tailor and deploy AI voice agents for your business</p>
                    </div>

<div className={style.setupagent_cardDiv}>

<div className={style.setupagent_card}>
<h3 className={style.setupagent_cardNum}>1</h3>
<h2 className={style.setupagent_cardHeading}>Create New Agent</h2>
<p className={style.setupagent_cardDiscription}>Choose integration type whether you want to attach with website widget, phone no or both</p>
<img className={style.setupagent_cardImg} src="" alt="" />
</div>

<div className={style.setupagent_card}>
<h3 className={style.setupagent_cardNum}>2</h3>
<h2 className={style.setupagent_cardHeading}>Data Collection</h2>
<p className={style.setupagent_cardDiscription}>Scan your website and will require some documents. Manual text editor or FAQ’s builder</p>
<img className={style.setupagent_cardImg} src="" alt="" />
</div>

<div className={style.setupagent_card}>
<h3 className={style.setupagent_cardNum}>3</h3>
<h2 className={style.setupagent_cardHeading}>Tailor to Your Needs</h2>
<p className={style.setupagent_cardDiscription}>Select your voice (male/female) , choose your language as well predefined replies for unknown inputs</p>
<img className={style.setupagent_cardImg} src="" alt="" />
</div>

<div className={style.setupagent_card}>
<h3 className={style.setupagent_cardNum}>4</h3>
<h2 className={style.setupagent_cardHeading}>Connect and Go Live</h2>
<p className={style.setupagent_cardDiscription}>Deploy your agent with your tech stack through our APIs.</p>
<img className={style.setupagent_cardImg} src="" alt="" />
</div>

</div>

                </div>
            </div>
        </>
    )
}

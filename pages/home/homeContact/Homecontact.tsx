import React from 'react'

import style from "./Homecontact.module.css"

export default function Homecontact() {
    return (
        <div className={style.homecontact_main}>
            <div className={style.homecontact_in}>

                <div className={style.homecontact_textDiv}>

                    <h1 className={style.homecontact_heading}>Discuss Your Use Case</h1>
                    <p className={style.homecontact_pra}>Consult with us, get a situational analysis, and receive a tailored demo.</p>
                    <button className={style.homecontact_btn}>Contact us</button>

                </div>
                <div className={style.homecontact_iconDiv}>
<img src="./images/audio_line.svg" alt="" />
                </div>

            </div>
        </div>

    )
}

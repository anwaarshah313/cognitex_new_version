import React from 'react'
import style from "./Demo.module.css"
import Image from "next/image";

export default function Democall() {
  return (
     <>
   
<div className={style.democall_main}>
  <div className={style.democall_in}>
    <Image width={100} height={100}  className={style.democall_animation} src="./images/wavegif.gif" alt="" />

  hello
  </div>
</div>

    </>
  )
}

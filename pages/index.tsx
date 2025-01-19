import React from "react";
import Hero_section from "./home/hero/Hero_section";
import Link from "next/link";
import Democall from "./home/demoCall/Democall";
import Setupagent from "./home/setupAgent/Setupagent";
import Features from "./home/features/Features";

export default function Home() {
  return (
   <div>
    {/* <Link href="/about">about</Link> */}
     <Hero_section/>
     {/* <Democall/> */}
     <Setupagent/>
     <Features/>
   </div>
  );
}

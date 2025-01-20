import React from "react";
import Hero_section from "./home/hero/Hero_section";
import Link from "next/link";
import Democall from "./home/demoCall/Democall";
import Setupagent from "./home/setupAgent/Setupagent";
import Features from "./home/features/Features";
import Usecase from "./home/useCase/Usecase";
import Homecontact from "./home/homeContact/Homecontact";
import Faq from "./home/faq/Faq";
import Customers from "./home/customersSay/Customers";

export default function Home() {
  return (
   <div>
    {/* <Link href="/about">about</Link> */}
     <Hero_section/>
     {/* <Democall/> */}
     <Setupagent/>
     <Features/>
     <Usecase/>
     <Customers/>
     <Faq/>
     <Homecontact/>
   </div>
  );
}

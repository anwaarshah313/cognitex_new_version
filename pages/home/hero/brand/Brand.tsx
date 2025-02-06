
import Marquee from "@/components/ui/marquee";
import style from "./Brand.module.css"
import Image from "next/image";
export default function Brand() {
  return (
    <>
      {/* <div className="brandmain">
        <div className="brandin"> */}
          {/* <h2 className="brandheading">Leading brands trust us</h2> */}

          <div className={style.brand_main}>
            <Marquee pauseOnHover className="[--duration:20s]">
              {brandLogos.map((logo, index) => (
                <Image width={280} height={200}
                  key={index}
                  src={logo}
                  alt={`Brand logo ${index}`}
                  className={style.hero_brandLogo}
               
                />
              ))}
            </Marquee>

            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0B0E0F]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0B0E0F]"></div> */}
          </div>
        {/* </div>
      </div> */}
    </>
  );
}

const brandLogos = [
  "/images/logo-one.png",
  "/images/logo-two.png",
    "/images/logo-three.png",
    // "/images/logo-four.png",
  
];

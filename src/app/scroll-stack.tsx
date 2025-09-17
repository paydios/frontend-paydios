"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Pricing from "@/components/Pricing";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStackPage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionWraps = gsap.utils.toArray<HTMLElement>(".sectionWrap");
      const spacer = 30;
      const minScale = 0.8;

      const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

      sectionWraps.forEach((sectionWrap, index) => {
        const scaleVal = distributor(index, sectionWraps[index], sectionWraps);

        gsap.to(sectionWrap, {
          scrollTrigger: {
            trigger: sectionWrap,
            start: "top 10%",
            scrub: true,
            invalidateOnRefresh: true,
          },
          ease: "none",
          scale: scaleVal,
        });

        ScrollTrigger.create({
          trigger: sectionWrap,
          start: `top-=${index * spacer} 10%`,
          endTrigger: ".sectionWraps",
          end: `bottom top+=${100 + sectionWraps.length * spacer}`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative">
      <div className="containerCustom max-w-full lg:max-w-[1100px] mx-auto pt-[30%] lg:pt-[14%] flex justify-center mb-[2600px] lg:mb-[1400px] ">
        <div className="sectionWraps relative">
          {/* Section 1 */}
          <div className="sectionWrap top-[40px] mb-[50px] rounded-lg relative p-[2px] bg-[linear-gradient(180deg,rgba(212,255,0,1)_0%,rgba(237,221,83,0.05)_100%)]">
            <div className="w-full p-3 lg:p-5 bg-neutral-900 rounded-lg">
              <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  <h3 className="text-2xl lg:text-4xl text-white/80 font-poppins font-bold">
                    Software & SaaS
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">
                    Software and SaaS solutions are the backbone of the digital economy, enabling businesses and individuals to access powerful tools instantly and seamlessly. From productivity platforms to advanced enterprise systems, these services deliver value the moment a subscription is activated, empowering users to innovate, scale, and succeed without waiting for physical delivery.                  </p>
                </div>

                <div className="p-2 lg:p-5 bg-neutral-800 rounded-lg border border-neutral-700">
                  <Image
                    src="/images/products/Software and sass solution.png"
                    alt="Dashboard"
                    width={500}
                    height={400}
                    className="flex-1 h-[300px] lg:h-[400px] object-cover object-center rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="sectionWrap top-[45px] mb-[50px] rounded-lg relative p-[2px] bg-[linear-gradient(180deg,rgba(212,255,0,1)_0%,rgba(237,221,83,0.05)_100%)]">
            <div className="w-full p-3 lg:p-5 bg-neutral-900 rounded-lg">
              <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  <h3 className="text-2xl lg:text-4xl text-white/80 font-poppins font-bold">
                    E-learning & Digital Content
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">
                    Education is the cornerstone of growth, and digital content has transformed the way knowledge is shared. Online courses, e-books, stock media, and creative templates allow learners and creators to access valuable resources anytime, anywhere. This industry thrives on instant access, giving people the ability to learn, create, and grow without barriers.                  </p>
                </div>

                <div className="p-2 lg:p-5 bg-neutral-800 rounded-lg border border-neutral-700">
                  <Image
                    src="/images/products/E-learning digital content.png"
                    alt="Dashboard"
                    width={500}
                    height={400}
                    className="flex-1 h-[300px] lg:h-[400px] object-cover object-center rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="sectionWrap top-[50px] mb-[50px] rounded-lg relative p-[2px] bg-[linear-gradient(180deg,rgba(212,255,0,1)_0%,rgba(237,221,83,0.05)_100%)]">
            <div className="w-full p-3 lg:p-5 bg-neutral-900 rounded-lg">
              <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  <h3 className="text-2xl lg:text-4xl text-white/80 font-poppins font-bold">
                    Gaming & Virtual Goods
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">
                    The gaming world is built on immediacy and immersion. Players expect instant access to downloadable games, in-app purchases, and virtual items that enhance their experience. This industry represents one of the fastest-growing digital ecosystems, where speed, reliability, and seamless transactions define the quality of user engagement.                  </p>
                </div>

                <div className="p-2 lg:p-5 bg-neutral-800 rounded-lg border border-neutral-700">
                  <Image
                    src="/images/products/Gaming and virtual goods.png"
                    alt="Dashboard"
                    width={500}
                    height={400}
                    className="flex-1 h-[300px] lg:h-[400px] object-cover object-center rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="sectionWrap top-[55px] mb-[50px] rounded-lg relative p-[2px] bg-[linear-gradient(180deg,rgba(212,255,0,1)_0%,rgba(237,221,83,0.05)_100%)]">
            <div className="w-full p-3 lg:p-5 bg-neutral-900 rounded-lg">
              <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  <h3 className="text-2xl lg:text-4xl text-white/80 font-poppins font-bold">
                    Subscriptions & Online Services
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">
                    From streaming platforms to hosting and domain management, subscription-based services shape the digital lifestyle. Customers demand instant activation and uninterrupted access to their chosen services, making fast, secure payments essential. This sector reflects the shift to a digital-first world, where convenience, automation, and immediacy drive long-term loyalty.                  </p>
                </div>

                <div className="p-2 lg:p-5 bg-neutral-800 rounded-lg border border-neutral-700">
                  <Image
                    src="/images/products/Subscription and online services.png"
                    alt="Dashboard"
                    width={500}
                    height={400}
                    className="flex-1 h-[300px] lg:h-[400px] object-cover object-center rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionTitle />
        
         {/* Pricing */}
      <Pricing></Pricing>
      </div>

    </div>
  );
}

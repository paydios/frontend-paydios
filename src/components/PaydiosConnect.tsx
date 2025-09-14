"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import Image from 'next/image'

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 lg:size-18 items-center justify-center p-3 rounded-full border-2 border-border transform-gpu bg-neutral-800 dark:backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
   
     <div
      className={cn("relative flex w-full items-center justify-start overflow-hidden ", className)}
      ref={containerRef}>
      <div className="flex size-full max-w-[776px] flex-row items-stretch justify-between gap-3">
        <div className="flex flex-col justify-between gap-2">
          <Circle ref={div1Ref}>
            <Icons.masterCard />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDocs />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.messenger />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.applepay />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 lg:size-18 ">
            <Icons.paydios />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
    </div>
  )
}

const Icons = {
  applepay: () => (
<Image src={'/images/icons/apple-pay.png'} alt="Apple Pay" width={100} height={100} 
   className="w-10 h-10" />
  ),
  paydios: () => (
   <Image src={'/paydios.svg'} alt="Paydios" width={100} height={100} 
   className="w-10 h-10" />
  ),
  masterCard: () => (
   <Image src={'/images/icons/card.svg'} alt="Paydios" width={100} height={100} 
   className="w-10 h-10" />
  ),
  whatsapp: () => (
  
  <Image src={'/images/icons/american-express.png'} alt="Paydios" width={100} height={100} 
   className="w-10 h-10" />
 
  ),
  googleDocs: () => (
        <Image src={'/images/icons/visa.svg'} alt="Paydios" width={100} height={100} 
   className="w-10 h-10" />
  ),
  zapier: () => (
       <Image src={'/images/icons/react.png'} alt="Paydios" width={100} height={100} 
   className="w-10 h-10" />
  ),
  messenger: () => (
   <Image src={'/images/icons/google_pay.svg'} alt="Paydios" width={100} height={100} 
   className="w-10 h-10" />
  ),
  user: () => (
    <Image src={'/images/icons/bank-building.svg'} alt="Paydios" width={100} height={100} 
   className="w-10 h-10" />
  ),
}

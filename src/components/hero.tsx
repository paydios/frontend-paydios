import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Image from 'next/image';
import { TextAnimate } from "@/components/magicui/text-animate";
import { BorderBeam } from "./magicui/border-beam";
export function Hero() {
  return (
    <main className="relative z-10 pt-32">
      <div className="max-w-4xl mx-auto px-0 lg:px-6 pt-24 pb-16">
        <div className="text-center space-y-8">
          <TextAnimate 
            animation="blurInUp" 
            by="character" 
            once
            as="h1"
            className="text-[32px] mb-3 md:text-6xl font-bold tracking-tight font-poppins">
            Transform payments
          </TextAnimate>
          <TextAnimate 
            animation="blurInUp" 
            by="character" 
            once
            as="h2"
            className="text-3xl lg:text-5xl font-bold tracking-tight text-primary mb-3">
            with confidence
          </TextAnimate>
   
            <TextAnimate animation="slideUp" by="word" delay={0.4} className="text-base mb-2 lg:mb-3  lg:text-xl font-body text-white/70 max-w-2xl mx-auto leading-relaxed">
Secure payment gateway solution designed for modern businesses.
            Scale with confidence through enterprise-grade infrastructure.
    </TextAnimate>

          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="relative">
              <ShimmerButton shimmerColor="var(--primary)" className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Apply for Merchant
                </span>
              </ShimmerButton>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="mt-16 flex justify-center rounded-lg">
            <div className="relative mx-auto rounded-lg">
              <Image
                src={'/images/products/paydios dashboard.png'}
                alt="Paydios Dashboard Interface"
                width={1000}
                height={450}
                
                className="rounded-lg shadow-2xl h-[450px] object-cover object-top border-2"
            
              />
              <BorderBeam
        duration={6}
        size={400}
         borderWidth={3}
        className="from-transparent via-primary to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={3}
        className="from-transparent via-blue-500 to-transparent"
      />
         
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
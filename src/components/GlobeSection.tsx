import React from 'react';
import { MagicCard } from './magicui/magic-card';
import { cn } from '@/lib/utils';
import { AnimatedGradientText } from './magicui/animated-gradient-text';
import { ChevronRight } from 'lucide-react';
import { AuroraText } from './ui/aurora-text';
import { Globe } from './ui/globe';


const GlobeSection = () => {
    return (
        <div className=' container mx-auto  mb-10 '>

            <MagicCard className='flex flex-col lg:flex-row  gap-5 p-4 min-h-[500px] rounded-lg justify-between'>
              <div className='  flex-1 flex flex-col items-start gap-5 justify-center'>
                  <div className="group relative max-w-[200px] flex items-center justify-center rounded-full px-4 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-primary/50 via-gray-400/50 to-primary/50 bg-[length:300%_100%] p-[1px]",
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />
                    🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        Why choose us
                    </AnimatedGradientText>
                    <ChevronRight
                        className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                </div>

                <h2 className="text-5xl font-poppins font-semibold py-3">
                     Elevate Your Payments<br></br> with <AuroraText>Paydios</AuroraText>
                </h2>

                <p>At Paydios, we combine speed, security, and flexibility to give your business a smarter way to accept payments. From real-time support to powerful APIs and automated workflows, we make sure every transaction is seamless and reliable.  
                    </p>
              </div>
              
                <Globe className='flex-1'/>
              
            </MagicCard>

        </div>
    );
};

export default GlobeSection;
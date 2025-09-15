'use client'
import React from 'react';
import { AnimatedShinyText } from './magicui/animated-shiny-text';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { TextAnimate } from './magicui/text-animate';
const SectionTitle = () => {
    return (
        <div className='absolute top-10 lg:top-40 left-0 right-0 mx-auto -z-10'>
            <div className={cn(
                "group mx-auto max-w-[200px] rounded-full border text-base text-white hover:text-black transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-white",
            )}>
                <AnimatedShinyText className="inline-flex items-center text-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>Payment Solution</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
            </div>

            <TextAnimate className='text-[25px] lg:text-5xl text-primary font-bold font-poppins text-center pt-2 lg:pt-6 pb-8' animation="blurIn" as="h2">
                Powering Every Industry.
            </TextAnimate>
        </div>


    );
};

export default SectionTitle;
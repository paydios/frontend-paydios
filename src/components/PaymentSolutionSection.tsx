import React from 'react';
import SectionTitle from './SectionTitle';
import rightImage from '../../public/transactions_card_image_2.webp'
import Image from 'next/image';
import iconGadget from '../../public/images/icons/icon_gadget.svg'
import iconBox from '../../public/images/icons/icon_box.svg'
import iconDevices from '../../public/images/icons/icon_devices.svg'
import iconGraduate from '../../public/images/icons/icon_graduation_cap.svg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import FadeContent from './FadeContent';
import { NeonGradientCard } from './magicui/neon-gradient-card';

const PaymentSolutionSection = () => {

    return (
        <div className='relative pt-10 pb-0 lg:py-10 '>


            {/* Industry Showcase - ScrollStack */}
            <SectionTitle />
    
                <FadeContent>
                    <div className='container  mx-auto flex flex-col justify-between lg:flex-row gap-5 mx-auto  p-0 lg:p-7 rounded-lg' >

                        <Accordion type="single" collapsible className='w-full lg:w-3xl flex flex-col justify-center'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='text-lg lg:text-2xl font-poppins '><div className='inline-flex justify-start gap-3'><Image src={iconGadget} alt='Paydios' /> Software & SaaS</div></AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-base'>
                                    Software and SaaS solutions are the backbone of the digital economy, enabling businesses and individuals to access powerful tools instantly and seamlessly. From productivity platforms to advanced enterprise systems, these services deliver value the moment a subscription is activated, empowering users to innovate, scale, and succeed without waiting for physical delivery.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className='text-lg lg:text-2xl font-poppins  '><div className='inline-flex justify-start gap-3'><Image src={iconGraduate} alt='Paydios' />E-learning & Digital Content</div> </AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-base'>
                                    Education is the cornerstone of growth, and digital content has transformed the way knowledge is shared. Online courses, e-books, stock media, and creative templates allow learners and creators to access valuable resources anytime, anywhere. This industry thrives on instant access, giving people the ability to learn, create, and grow without barriers.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className='text-lg lg:text-2xl font-poppins  '> <div className='inline-flex justify-start gap-3'><Image src={iconDevices} alt='Paydios' />Gaming & Virtual Goods</div></AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-base'>
                                    The gaming world is built on immediacy and immersion. Players expect instant access to downloadable games, in-app purchases, and virtual items that enhance their experience. This industry represents one of the fastest-growing digital ecosystems, where speed, reliability, and seamless transactions define the quality of user engagement.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className='text-lg lg:text-2xl font-poppins  '><div className='inline-flex justify-start gap-3'> <Image src={iconBox} alt='Paydios' />Subscriptions & Online Services</div></AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-base'>
                                    From streaming platforms to hosting and domain management, subscription-based services shape the digital lifestyle. Customers demand instant activation and uninterrupted access to their chosen services, making fast, secure payments essential. This sector reflects the shift to a digital-first world, where convenience, automation, and immediacy drive long-term loyalty.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <div className='max-w-lg flex flex-col items-center'>
                            <Image src={rightImage} alt='Paymnet Solution' />
                        </div>
                    </div>
                </FadeContent>

        </div>
    );
};

export default PaymentSolutionSection;
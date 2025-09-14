"use client";

import React, { useRef } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/PaydiosConnect";
import { PaymentTerminal } from "@/components/payment-terminal";

interface AnimatedCardProps {
  className?: string;
}

const AnimatedCard = ({ className }: AnimatedCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  // How to Connect Paydios steps
  const notifications = [

    {
      name: "Start Accepting Payments",
      description: "Go live and start accepting payments with Paydios",
      time: "Step 4",
      icon: "⚡",
      color: "#FFB800",
    },

    // {
    //   name: "Choose Integration",
    //   description: "Select the best integration method tailored for your business",
    //   time: "Step 3",
    //   icon: "⚡",
    //   color: "#0062FF",
    // },
        {
      name: "Get Approved Fast",
      description: "Get approved in just 1 hour with our fast onboarding process",
      time: "Step 2",
      icon: "⚡",
      color: "#00C9A7",
    },
            {
      name: "Sign Up with Paydios",
      description: "Create your secure merchant account with bank-level security",
      time: "Step 1",
      icon: "⚡",
      color: "#D4FF00",
    },

  ];

  return (

    <div className="relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <MagicCard className={cn("p-5 lg:p-8 rounded-xl", className)}>
        <div className="flex flex-col justify-between items-center h-full">
          {/* Animated List Section */}
          <div className="flex-1 w-full flex flex-col justify-start items-stretch">
            <h3 className="text-lg font-semibold mb-4"></h3>
            <div className="space-y-4">
              <AnimatedList delay={1000}>
                {notifications.map((item, idx) => (
                  <div
                    key={idx}
                    ref={idx === 0 ? fromRef : undefined}
                    className="flex items-start gap-4 p-4 rounded-lg transform-gpu bg-transparent dark:backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </AnimatedList>
            </div>
          </div>
        </div>
      </MagicCard>
      
      <MagicCard className={cn("p-5 lg:p-8 rounded-xl", className)}>
        <div className="flex flex-col justify-between items-center h-full">
          {/* Animated Beam Section */}
          <div className="flex-1 flex w-full flex-col">
            <h3 className="text-lg font-semibold mb-4"></h3>
            <AnimatedBeamMultipleOutputDemo />
          </div>
        </div>
      </MagicCard>

      <MagicCard className={cn("p-5 lg:p-8 rounded-xl", className)}>
        <div className="flex flex-col justify-between h-full">
              <h3 className="text-lg font-semibold mb-4"></h3>
          <PaymentTerminal />
        </div>
      </MagicCard>

      
    </div>
    </div>


  );
};

export default AnimatedCard;
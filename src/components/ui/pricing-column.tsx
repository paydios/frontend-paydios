import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const pricingColumnVariants = cva(
  // ✅ remove `max-w-container`, make it full width
  "relative flex flex-col gap-8 overflow-hidden rounded-2xl p-6 shadow-2xl w-full h-full",
  {
    variants: {
      variant: {
        default: "glass-1 to-transparent dark:glass-3",
        glow: "glass-3 from-card/100 to-card/100 glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-primary/70 after:blur-[72px]",
        "glow-primary":
         "glass-2 to-transparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-primary/0 after:blur-[72px]" ,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  icon?: ReactNode;
  description: string;
  price: string | number; // supports "1.9%"
  priceNote: string;
  cta: {
    variant: "glow" | "default" | "outline";
    label: string;
    href: string;
  };
  features: string[];
}

export function PricingColumn({
  name,
  icon,
  description,
  price,
  priceNote,
  cta,
  features,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  return (
    <div
      className={`${cn(pricingColumnVariants({ variant, className }))} border`}
      {...props}
    >
      {/* Top divider */}
      <hr
        className={cn(
          "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
          variant === "glow" && "via-primary",
        )}
      />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-2 font-semibold font-poppins text-2xl">
              {icon && <div className="text-muted-foreground">{icon}</div>}
              {name}
            </h2>
            <p className="text-muted-foreground text-base">{description}</p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-6xl  font-poppins font-bold">
              {typeof price === "number" ? `$${price}` : price}
            </span>
          </div>

          {priceNote && (
            <p className="text-muted-foreground text-sm">{priceNote}</p>
          )}

        <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-base">
                <CircleCheckBig className=" text-primary size-5 shrink-0 text-[14px]" />
                {feature}
              </li>
            ))}
          </ul>

          <Button variant={cta.variant} size="lg" asChild>
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
    </div>
  );
}

export { pricingColumnVariants };

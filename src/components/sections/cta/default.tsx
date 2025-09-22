import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "../../ui/button";
import Glow from "@/components/ui/glow";
import { TextAnimate } from "@/components/magicui/text-animate";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(
        "relative w-full overflow-hidden bg-background text-foreground mx-2 lg:mx-0 px-4 py-12 sm:py-24 md:py-32 pt-0 md:pt-0",
        className
      )}
    >
      {children}
    </section>
  );
}

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  description?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTA({
  title = "Ready to level up your payment process?",
  description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non possimus velit corporis dolores accusantium dicta necessitatibus animi reiciendis, neque accusamus.',
  buttons = [
    {
      href: "#",
      text: "Get Started",
      variant: "default",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("relative container mt-10 lg:mt-1  mx-auto overflow-hidden rounded-lg border-neutral-800 border", className)}>
      <div className="max-w-container relative  z-10 mx-auto flex flex-col min-h-[470px] lg:min-h-[350px] justify-center items-center gap-6 px-8 py-24 text-center sm:gap-8 ">
       
       <div className="absolute top-30 flex flex-col justify-center gap-5 items-center max-w-4xl ">
         {/* Content */}
        <TextAnimate animation="blurInUp" as="h2" className="text-3xl font-bold sm:text-5xl font-poppins">
  {title}
</TextAnimate>

        <TextAnimate as='p' animation="blurIn" by="character" className="text-muted-foreground">{description}</TextAnimate>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {buttons &&
            buttons.map((btn, i) => (
              <Button
                key={i}
                asChild
                variant={'default'}
                size={'lg'}
              >
                <a href={btn.href} className="flex items-center gap-2 text-lg font-bold ">
                  {btn.icon && <span>{btn.icon}</span>}
                  {btn.text}
                  {btn.iconRight && <span>{btn.iconRight}</span>}
                </a>
              </Button>
            ))}
        </div>
       </div>
       
      </div>
            <Glow variant={'bottom'}></Glow>
      {/* Glow layers */}
    </Section>
  );
}

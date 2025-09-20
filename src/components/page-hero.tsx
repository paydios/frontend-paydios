import { TextAnimate } from "@/components/magicui/text-animate";

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHero({ title, description, className = "" }: PageHeroProps) {
  return (
    <section className={`relative z-10 pt-32 pb-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6">
          <TextAnimate 
            animation="blurInUp" 
            by="character" 
            once
            as="h1"
            className="text-4xl md:text-5xl font-bold tracking-tight font-poppins text-white"
          >
            {title}
          </TextAnimate>
          
          <TextAnimate 
            animation="slideUp" 
            by="word" 
            delay={0.2} 
            className="text-lg md:text-xl font-body text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </TextAnimate>
        </div>
      </div>
    </section>
  );
}

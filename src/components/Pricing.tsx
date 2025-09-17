import { Building, Globe, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingColumn, PricingColumnProps } from "@/components/ui/pricing-column";
import { Section } from "../components/sections/pricing/default";
import { TextAnimate } from "./magicui/text-animate";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Clear Pricing for Transactions",
  description = "Our Commission Deducted, Your Money Deposited — Single Banking Day to Your Merchant Account.",
    plans = [
  {
    name: "Individual",
    icon: <User className="size-4 text-primary" />,
    description:
      "Apply or write to the Chat to reduce the tariff. Quick deposits optimized for fast transactions. No hidden fees. No setup fees",
    price: "6%",
    priceNote: "Charity",
    cta: { variant: "default", label: "Apply Now", href: "/contact" },
    features: [
      "Quick deposits for speedy transactions",
      "Tariff reductions via Chat",
      "No hidden or setup fees",
    ],
    variant: "default", // ✅ change to default
  },
  {
    name: "General",
    icon: <Globe className="size-4 text-primary" />,
    description:
      "Everything you need to manage payments with Finto. Mobile app always available. No monthly/hidden charges.",
    price: "5%",
    priceNote: "When the funds turnover reaches $300,000.",
    cta: { variant: "default", label: "Get Started", href: "/contact" },
    features: [
      "Single Banking Day to Your Merchant Account",
      "Funds turnover reaches $300,000",
      "Finto mobile app available",
    ],
    variant: "default", // ✅ keep default
  },
  {
    name: "Enterprise",
    icon: <Building className="size-4 text-primary" />,
    description:
      "Designed for housing, public utilities, and online processes. Transparent fees. Manage payments efficiently and easily.",
    price: "3%",
    priceNote: "Online landing Working Process",
    cta: { variant: "default", label: "Learn More", href: "/contact" },
    features: [
      "Housing and public utilities",
      "Condominium associations management",
      "Online landing workflow support",
    ],
    variant: "default", // ✅ change to default
  },
],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-3 px-4 text-center sm:gap-8">
            {title && (
              <TextAnimate
                as={"h2"}
                animation="blurInUp"
                by="character"
                className="text-4xl font-poppins leading-tight font-semibold sm:leading-tight"
              >
                {title}
              </TextAnimate>
            )}
            {description && (
              <TextAnimate
                as={"p"}
                animation="fadeIn"
                by="character"
                className="text-base text-muted-foreground mt-0 lg:-mt-4 max-w-[700px] font-normal"
              >
                {description}
              </TextAnimate>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                {...plan}
                // Apply glowing effect only to the middle column (General)
                variant={plan.name === "General" ? "glow" : plan.variant}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

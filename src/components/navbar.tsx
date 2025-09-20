"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BorderBeam } from "@/components/magicui/border-beam";

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Payment Processing",
    href: "/products/payment-processing",
    description: "Accept payments globally with our secure payment gateway.",
  },
  {
    title: "Subscriptions",
    href: "/products/subscriptions",
    description: "Recurring billing and subscription management made simple.",
  },
  {
    title: "Invoicing",
    href: "/products/invoicing",
    description: "Create and send professional invoices with automated reminders.",
  },
  {
    title: "Payouts",
    href: "/products/payouts",
    description: "Send money to vendors, contractors, and partners worldwide.",
  },
  {
    title: "Fraud Protection",
    href: "/products/fraud-protection",
    description: "Advanced machine learning to detect and prevent fraud.",
  },
  {
    title: "Checkout",
    href: "/products/checkout",
    description: "Customizable checkout experience with optimized conversion.",
  },
];

const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "E-commerce",
    href: "/solutions/ecommerce",
    description: "Complete payment solution for online stores and marketplaces.",
  },
  {
    title: "SaaS",
    href: "/solutions/saas",
    description: "Subscription billing and revenue automation for SaaS businesses.",
  },
  {
    title: "Platforms",
    href: "/solutions/platforms",
    description: "Custom payment flows for platforms and marketplaces.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto container px-3">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          {/* Simplified Logo Section */}
          <div className="flex items-center">
            <span
              className="text-xl font-body font-semibold tracking-tight text-[#D4FF00]"
              style={{ letterSpacing: '-0.02em' }}
            >
              paydios
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-body text-white/90 hover:text-white bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium font-heading">
                              Paydios Products
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Secure payment solutions designed for modern businesses.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {products.slice(0, 3).map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-body text-white/90 hover:text-white bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/integration" className="font-body text-white/90 hover:text-white bg-transparent px-4 py-2 rounded-md transition-colors">
                      Integration
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/pricing" className="font-body text-white/90 hover:text-white bg-transparent px-4 py-2 rounded-md transition-colors">
                      Pricing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="font-body text-white/90 hover:text-white bg-transparent px-4 py-2 rounded-md transition-colors">
                      Contact us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>


              </NavigationMenuList>
            </NavigationMenu>


          </div>
          <div className="relative invisible md:visible">
            <Button
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] text-black font-heading font-semibold hover:text-black hover:bg-transparent"
            >
              <Icons.logIn className="h-4 w-4" />
              Sign in

              <BorderBeam
                size={40}
                initialOffset={20}
                className="from-transparent via-[var(--primary)] to-transparent"
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
            </Button>




          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  {isOpen ? <Icons.x className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-[#0B0C0F] border-l border-white/10 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Simplified Mobile Logo */}
                  <div className="flex items-center p-4 border-b border-white/10">
                    <span
                      className="text-xl font-body font-semibold tracking-tight text-[#D4FF00]"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      paydios
                    </span>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="flex flex-col p-4 space-y-4 flex-1">
                    <div className="space-y-1">
                      <span className="font-heading text-lg font-semibold">Products</span>
                      <hr className="border-white/10" />
                      {products.map((product) => (
                        <div key={product.title}>
                          <Link
                            href={product.href}
                            className="block font-body text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-heading">{product.title}</span>
                            <div className="hidden text-sm text-white/70">{product.description}</div>
                          </Link>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <span className="font-heading text-lg">Solutions</span>
                      <hr className="border-white/10" />
                      {solutions.map((solution) => (
                        <div key={solution.title}>
                          <Link
                            href={solution.href}
                            className="block font-body text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-heading">{solution.title}</span>
                            <span className="text-sm hidden text-white/70">{solution.description}</span>
                          </Link>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/integration"
                      className="font-body text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Integration
                    </Link>

                    <Link
                      href="/pricing"
                      className="font-body text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Pricing
                    </Link>

                    <Link
                      href="/contact"
                      className="font-body text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact us
                    </Link>


                  </div>

                  {/* Mobile Sign In Button */}
                  <div className="p-4 border-t border-white/10">
                    <div className="relative">
                      <Button
                        className="inline-flex w-full gap-2 rounded-xl bg-[#494949a5] text-white font-heading font-semibold hover:text-black"
                      >
                        <Icons.logIn className="h-4 w-4" />
                        Sign in

                        <BorderBeam
                          size={40}
                          initialOffset={20}
                          className="from-transparent via-[var(--primary)] to-transparent"
                          transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 20,
                          }}
                        />
                      </Button>


                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-white focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-heading">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70 font-body">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
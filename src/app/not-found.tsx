"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { motion } from "motion/react";
import Link from "next/link";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative mx-auto flex flex-col px-3">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Animated 404 Number */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-8"
          >
            <AnimatedGradientText>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4FF00] via-[#B8E600] to-[#9CCC00] bg-clip-text text-transparent text-9xl font-black">
                4
                <motion.span
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-[#D4FF00]"
                >
                  0
                </motion.span>
                4
              </span>
            </AnimatedGradientText>
          </motion.div>

          {/* Floating Error Icon */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full border border-red-500/30"
            >
              <AlertCircle className="w-10 h-10 text-red-400" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
              The page you&apos;re looking for seems to have vanished into the digital void. 
              Don&apos;t worry, even the best payment gateways sometimes take a wrong turn!
            </p>
          </motion.div>

          {/* Animated Search Bar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative max-w-md mx-auto">
              <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-white/50 mr-3" />
                <input
                  type="text"
                  placeholder="Search for pages..."
                  className="flex-1 bg-transparent text-white placeholder-white/50 outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-3 p-2 bg-[#D4FF00] text-black rounded-lg hover:bg-[#B8E600] transition-colors"
                >
                  <Search className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4FF00] text-black font-heading font-semibold hover:bg-[#B8E600] transition-colors duration-200 px-8 py-3"
              >
                <Link href="/">
                  <Home className="w-5 h-5" />
                  Go Home
                  <BorderBeam
                    size={40}
                    initialOffset={20}
                    className="from-transparent via-[#D4FF00] to-transparent"
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 20,
                    }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 text-white font-heading font-semibold hover:bg-white/10 transition-colors duration-200 px-8 py-3"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-lg font-heading font-semibold text-white mb-6">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Pricing", href: "/pricing" },
                { name: "Integration", href: "/integration" },
                { name: "Contact", href: "/contact" },
                { name: "Security", href: "/security" }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Link
                    href={link.href}
                    className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const positions = [
            { left: 8.3, top: 37.8 },
            { left: 69.9, top: 63.5 },
            { left: 50.8, top: 54.2 },
            { left: 67.1, top: 74.9 },
            { left: 35.2, top: 65.6 },
            { left: 50.6, top: 71.6 },
            { left: 23.3, top: 99.7 },
            { left: 21.6, top: 33.5 },
            { left: 46.0, top: 95.3 },
            { left: 10.3, top: 18.9 },
            { left: 64.7, top: 3.9 },
            { left: 50.9, top: 75.8 },
            { left: 79.5, top: 41.7 },
            { left: 27.5, top: 69.0 },
            { left: 7.6, top: 82.5 },
            { left: 82.1, top: 82.8 },
            { left: 94.7, top: 57.9 },
            { left: 39.6, top: 40.2 },
            { left: 3.1, top: 14.5 },
            { left: 12.4, top: 51.6 },
          ];
          
          const pos = positions[i] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4FF00]/30 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3) * 0.5, // Use index-based duration instead of random
                repeat: Infinity,
                delay: (i % 5) * 0.4, // Use index-based delay instead of random
              }}
            />
          );
        })}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

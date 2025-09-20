"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
      // You can add your form submission logic here
    }
  };

  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">
          Send us a message
        </CardTitle>
        <p className="text-gray-300">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">
                First Name *
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm">{errors.firstName}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last Name *
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">
              Company
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project, goals, or how we can help..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary min-h-[120px]"
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="agreeToTerms" className="text-sm text-gray-300 leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 text-black "
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

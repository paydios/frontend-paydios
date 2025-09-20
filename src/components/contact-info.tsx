import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get a response within 24 hours",
      contact: "hello@paydios.com",
      href: "mailto:hello@paydios.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support available now",
      contact: "Start chatting",
      href: "#",
      isAction: true
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Mon-Fri, 9AM-6PM EST",
      contact: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Schedule an in-person meeting",
      contact: "123 Innovation St, Tech City",
      href: "#"
    }
  ];

  return (
    <div className="space-y-6">
      {contactMethods.map((method, index) => {
        const IconComponent = method.icon;
        return (
          <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {method.description}
                  </p>
                  {method.isAction ? (
                    <button className="text-white hover:text-primary transition-colors text-sm font-medium">
                      {method.contact}
                    </button>
                  ) : (
                    <a 
                      href={method.href}
                      className="text-white hover:text-primary transition-colors text-sm font-medium"
                    >
                      {method.contact}
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

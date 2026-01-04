import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918180956831?text=Hi! I'm interested in booking a travel package.", "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+918180956831";
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border p-3 shadow-elevated">
      <div className="flex gap-3">
        <Button
          onClick={openWhatsApp}
          variant="hero"
          size="lg"
          className="flex-1"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp
        </Button>
        <Button
          onClick={callNow}
          variant="outline"
          size="lg"
          className="flex-1"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;

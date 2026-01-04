import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Percent, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="offers" className="section-padding bg-gradient-to-r from-primary via-terracotta-dark to-ocean relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-md border border-primary-foreground/30 rounded-full px-4 py-2 mb-6"
          >
            <Gift className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-medium">Limited Time Offer</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4"
          >
            Summer Sale
            <span className="block text-gold">Up to 40% OFF</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
          >
            Book your dream vacation now and save big! Use code{" "}
            <span className="bg-primary-foreground/20 px-2 py-1 rounded font-mono font-bold">
              SUMMER40
            </span>{" "}
            at checkout.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4 sm:gap-6 mb-10"
          >
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
              { value: timeLeft.seconds, label: "Secs" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[80px]"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/70">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Offer Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          >
            {[
              { icon: Percent, text: "40% OFF on International Packages" },
              { icon: Gift, text: "Free Airport Transfers" },
              { icon: Clock, text: "Flexible Cancellation" },
            ].map((offer, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-md rounded-xl p-4"
              >
                <offer.icon className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground">{offer.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              onClick={scrollToEnquiry}
              variant="hero"
              size="xl"
              className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Claim Your Offer
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offers;

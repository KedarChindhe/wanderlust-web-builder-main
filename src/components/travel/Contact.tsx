import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918180956831?text=Hi! I'd like to enquire about travel packages.", "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+918180956831";
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Let's Plan Your
              <span className="text-primary"> Adventure</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions? Our travel experts are here to help you plan your perfect trip. Reach out anytime!
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <a href="tel:+918180956831" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 81809 56831
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <a href="mailto:hello@wanderlust.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@wanderlust.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    123 Travel Street, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">Mon-Sat: 9AM - 8PM | Sun: 10AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-6 sm:p-8 shadow-elevated"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Quick Connect
            </h3>
            <p className="text-muted-foreground mb-8">
              Choose your preferred way to connect with us. We typically respond within minutes!
            </p>

            <div className="space-y-4">
              <Button
                onClick={openWhatsApp}
                variant="hero"
                size="lg"
                className="w-full justify-start"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Chat on WhatsApp
                <span className="ml-auto text-xs opacity-75">Instant Reply</span>
              </Button>

              <Button
                onClick={callNow}
                variant="outline"
                size="lg"
                className="w-full justify-start"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now
                <span className="ml-auto text-xs opacity-75">24/7 Support</span>
              </Button>

              <Button
                onClick={() => window.location.href = "mailto:hello@wanderlust.com"}
                variant="outline"
                size="lg"
                className="w-full justify-start"
              >
                <Mail className="w-5 h-5 mr-3" />
                Send Email
                <span className="ml-auto text-xs opacity-75">Reply within 24hrs</span>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">🔒 Your data is secure</span>
                <span className="text-muted-foreground">✅ IATA Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

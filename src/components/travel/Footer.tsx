import { MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-7 h-7 text-primary" />
              <span className="text-2xl font-serif font-bold">Global Hiking Travel</span>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Your trusted travel partner since 2010. Creating unforgettable journeys across the globe.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Destinations", "Packages", "Offers", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Top Destinations</h4>
            <ul className="space-y-3">
              {["Maldives", "Santorini", "Switzerland", "Bali", "Dubai", "Paris"].map((dest) => (
                <li key={dest}>
                  <a href="#destinations" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cancellation Policy", "Refund Policy", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 Global Hiking Travel. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Made with ksbcglobal❤️ 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

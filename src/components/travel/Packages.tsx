import { motion } from "framer-motion";
import { Plane, Heart, Users, Briefcase, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    name: "Domestic Getaways",
    description: "Explore the beauty of incredible India",
    icon: Plane,
    price: "₹19,999",
    originalPrice: "₹29,999",
    features: ["3N/4D Stay", "Meals Included", "Sightseeing", "Transport"],
    popular: false,
    discount: "33% OFF",
  },
  {
    name: "International Tours",
    description: "Dream destinations across the globe",
    icon: Sparkles,
    price: "₹79,999",
    originalPrice: "₹99,999",
    features: ["5N/6D Stay", "Visa Assistance", "Flight Tickets", "Tours"],
    popular: true,
    discount: "20% OFF",
  },
  {
    name: "Honeymoon Special",
    description: "Romantic escapes for newlyweds",
    icon: Heart,
    price: "₹89,999",
    originalPrice: "₹1,19,999",
    features: ["Luxury Resort", "Candlelight Dinner", "Spa Session", "Surprise Gift"],
    popular: false,
    discount: "25% OFF",
  },
  {
    name: "Group Tours",
    description: "Fun-filled adventures with friends",
    icon: Users,
    price: "₹14,999",
    originalPrice: "₹19,999",
    features: ["Group Discount", "Team Activities", "Photography", "Guide"],
    popular: false,
    discount: "25% OFF",
  },
  {
    name: "Corporate Retreats",
    description: "Team building & business trips",
    icon: Briefcase,
    price: "₹39,999",
    originalPrice: "₹49,999",
    features: ["Conference Hall", "Team Activities", "Premium Stay", "Catering"],
    popular: false,
    discount: "20% OFF",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Packages = () => {
  const openWhatsApp = (packageName: string) => {
    window.open(
      `https://wa.me/919876543210?text=Hi! I'm interested in the ${packageName} package.`,
      "_blank"
    );
  };

  return (
    <section id="packages" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean rounded-full text-sm font-medium mb-4">
            Our Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Choose Your Perfect Trip
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handcrafted packages for every type of traveler
          </p>

          {/* Limited Time Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3 rounded-full shadow-glow"
          >
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">Limited Time Offer: Extra 10% OFF on Early Bookings!</span>
          </motion.div>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={item}
              className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="popular">Most Popular</Badge>
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="discount">{pkg.discount}</Badge>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <pkg.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground line-through text-sm">
                  {pkg.originalPrice}
                </span>
                <span className="text-sm text-muted-foreground">/person</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => openWhatsApp(pkg.name)}
                variant={pkg.popular ? "default" : "outline"}
                className="w-full"
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;

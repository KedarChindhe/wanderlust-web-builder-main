import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import maldivesImg from "@/assets/destination-maldives.jpg";
import santoriniImg from "@/assets/destination-santorini.jpg";
import switzerlandImg from "@/assets/destination-switzerland.jpg";
import baliImg from "@/assets/destination-bali.jpg";
import parisImg from "@/assets/destination-paris.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";

const destinations = [
  {
    name: "Maldives",
    tagline: "Paradise on Earth",
    image: maldivesImg,
    price: "₹89,999",
  },
  {
    name: "Santorini",
    tagline: "Romantic Greek Escape",
    image: santoriniImg,
    price: "₹1,29,999",
  },
  {
    name: "Switzerland",
    tagline: "Alpine Adventure",
    image: switzerlandImg,
    price: "₹1,49,999",
  },
  {
    name: "Bali",
    tagline: "Tropical Serenity",
    image: baliImg,
    price: "₹69,999",
  },
  {
    name: "Paris",
    tagline: "City of Love",
    image: parisImg,
    price: "₹1,19,999",
  },
  {
    name: "Dubai",
    tagline: "Luxury & Adventure",
    image: dubaiImg,
    price: "₹79,999",
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Destinations = () => {
  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="destinations" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Popular Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Explore Dream Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover handpicked destinations curated for unforgettable experiences
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.name}
              variants={item}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer"
              onClick={scrollToEnquiry}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                From {destination.price}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.tagline}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
                  {destination.name}
                </h3>
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full group/btn opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Package
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;

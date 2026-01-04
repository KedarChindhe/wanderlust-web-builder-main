import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  preference: z.string().min(1, "Please select a travel preference"),
});

type FormData = z.infer<typeof formSchema>;

const preferences = [
  "Domestic Tours",
  "International Tours",
  "Honeymoon",
  "Family Vacation",
  "Adventure Trip",
  "Corporate Trip",
];

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preference: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      formSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Enquiry Submitted! 🎉",
      description: "Our travel expert will contact you within 24 hours.",
    });

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      const message = encodeURIComponent(
        `Hi! I'm ${formData.name}. I'm interested in ${formData.preference}. Please contact me at ${formData.phone} or ${formData.email}.`
      );
      window.open(`https://wa.me/918180956831?text=${message}`, "_blank");
    }, 2000);
  };

  return (
    <section id="enquiry" className="section-padding bg-gradient-to-br from-primary/5 via-background to-ocean/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold-foreground rounded-full text-sm font-medium mb-4">
              Get Free Quote
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Plan Your Dream Trip
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fill the form below and our travel experts will craft a personalized itinerary just for you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-elevated"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Thank You! 🎉
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your enquiry has been submitted. Redirecting to WhatsApp...
                </p>
                <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" />
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 8180956831"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Preference */}
                  <div>
                    <label htmlFor="preference" className="block text-sm font-medium text-foreground mb-2">
                      Travel Preference *
                    </label>
                    <select
                      id="preference"
                      name="preference"
                      value={formData.preference}
                      onChange={handleChange}
                      className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        errors.preference ? "border-destructive" : "border-input"
                      }`}
                    >
                      <option value="">Select preference</option>
                      {preferences.map((pref) => (
                        <option key={pref} value={pref}>
                          {pref}
                        </option>
                      ))}
                    </select>
                    {errors.preference && (
                      <p className="text-destructive text-sm mt-1">{errors.preference}</p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting, you agree to our terms & privacy policy
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;

import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast"; // Assuming this is your custom hook for shadcn/ui toast
import HeroSection from "@/components/ui/hero-section"; // Assuming this is your custom Hero component
import { 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Truck, 
  DollarSign, 
  Award,
  Phone,
  Mail,
  MessageSquare,
  UserPlus,
  Star,
  ArrowDown,
  Building,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils"; // Assumes you have a utility for classnames

const WholesallerPage = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    businessName: "", contactPerson: "", email: "", phone: "", address: "",
    gstNumber: "", businessType: "", monthlyVolume: "", productsOfInterest: [] as string[],
    comments: "", agreeToTerms: false
  });

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and be in touch within 48 hours.",
    });
    // Reset form state after successful submission
    setFormData({
      businessName: "", contactPerson: "", email: "", phone: "", address: "",
      gstNumber: "", businessType: "", monthlyVolume: "", productsOfInterest: [],
      comments: "", agreeToTerms: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProductInterestChange = (product: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      productsOfInterest: checked 
        ? [...prev.productsOfInterest, product]
        : prev.productsOfInterest.filter(p => p !== product)
    }));
  };

  // Data for sections
  const benefits = [
    { icon: DollarSign, title: "Exclusive Pricing", description: "Special wholesale rates with discounts up to 25%." },
    { icon: Users, title: "Priority Support", description: "Dedicated account manager and faster response times." },
    { icon: TrendingUp, title: "Flexible Payment Terms", description: "Extended credit periods and flexible payment options." },
    { icon: Truck, title: "Free & Fast Delivery", description: "Complimentary delivery for orders above the minimum quantity." },
    { icon: Award, title: "Marketing Support", description: "Promotional materials and co-branded marketing assistance." },
    { icon: Star, title: "Early Access", description: "Be the first to access new products and seasonal offers." }
  ];

  const pricingTiers = [
    { tier: "32-inch LED TV", range: "₹2,50,000/month", offer: "First plan" },
    { tier: "1.5-ton AC", range: "₹5,00,000/month", offer: "Second plan" },
    { tier: "Hero HF Deluxe Bike", range: "₹7,50,000/month", offer: "Third plan" },
    { tier: "Hero Splendor Bike", range: "₹10,00,000/month", offer: "Medium plan" },
    { tier: "Royal Enfield Bullet Bike", range: "₹15,00,000/month", offer: "Best plan" },
    { tier: "Alto 800 Car", range: "₹20,00,000/month", offer: "Premium Plan", featured: true }
  ];

  const productOptions = [
    "32-inch LED TV", "1.5-ton AC", "Hero HF Deluxe Bike", "Hero Splendor Bike", "Royal Enfield Bullet Bike", "Alto 800"
  ];

  const requirements = [
    "Valid business license and GST registration",
    "Commitment to a minimum monthly volume",
    "Adequate and proper storage facilities",
    "Compliance with all local business regulations",
    "A professional and operational business setup"
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <HeroSection
        title="Become a Wholesaler Partner"
        description="Join our exclusive network for special pricing, priority support, and powerful tools to grow your business."
        backgroundImage="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
        height="lg"
      >
        <Button size="lg" className="mt-8 text-lg px-8 py-6" onClick={handleScrollToForm}>
          Apply Now <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </HeroSection>

      {/* Offer Tiers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Offer Tiers</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">We reward our partners with better discounts for higher volumes. The more you partner with us, the more you save.</p>
            <p className="text-sm text-slate-500 mt-3 font-medium">Offers valid from 1 April 2025 to 31 March 2026</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingTiers.map(tier => (
              <motion.div key={tier.tier} variants={itemVariants} className="h-full">
                <Card className={cn(
                  "h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 group relative",
                  "hover:shadow-2xl hover:-translate-y-2",
                  tier.featured ? "bg-primary text-white" : "bg-white border-t-4 border-primary"
                )}>
                  {tier.featured && (
                    <div className="absolute top-0 right-0 py-1 px-4 bg-yellow-400 text-yellow-900 font-bold text-sm rounded-bl-lg tracking-wider">
                      FEATURED
                    </div>
                  )}
                  <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                    <div>
                      <h3 className={cn("text-xl font-bold", tier.featured ? "text-white" : "text-slate-900")}>
                        {tier.tier}
                      </h3>
                      <p className={cn("text-sm mt-1", tier.featured ? "text-primary-foreground/80" : "text-slate-600")}>
                        (Base Model)
                      </p>
                      <p className={cn("font-semibold mt-2", tier.featured ? "text-yellow-300" : "text-primary")}>
                        Volume: {tier.range}
                      </p>
                    </div>
                    <div className="my-8">
                      <span className={cn("text-6xl font-extrabold", tier.featured ? "text-white" : "text-primary")}>
                        {tier.offer}
                      </span>
                      <p className={cn("font-semibold mt-2", tier.featured ? "text-primary-foreground/90" : "text-slate-700")}>
                        Flat Discount on MRP
                      </p>
                    </div>
                     <Button variant={tier.featured ? "secondary" : "outline"} className="w-full" onClick={handleScrollToForm}>
                       Select Plan
                     </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Registration Form and Contact Section */}
      <section ref={formRef} className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Form Section */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl bg-white rounded-xl">
                <CardHeader className="p-8">
                  <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                    <UserPlus className="h-8 w-8 text-primary" />
                    Wholesaler Registration
                  </CardTitle>
                  <CardDescription>Complete the form to join our network. Fields marked with * are required.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Business Information */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4"><Building className="h-5 w-5"/>Business Information</h3>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="businessName">Business Name *</Label>
                                    <Input id="businessName" value={formData.businessName} onChange={(e) => handleInputChange("businessName", e.target.value)} required className="mt-1" />
                                </div>
                                <div>
                                    <Label htmlFor="contactPerson">Contact Person *</Label>
                                    <Input id="contactPerson" value={formData.contactPerson} onChange={(e) => handleInputChange("contactPerson", e.target.value)} required className="mt-1" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="address">Business Address *</Label>
                                <Textarea id="address" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} required className="mt-1" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="gstNumber">GST Number</Label>
                                    <Input id="gstNumber" value={formData.gstNumber} onChange={(e) => handleInputChange("gstNumber", e.target.value)} className="mt-1" />
                                </div>
                                <div>
                                    <Label htmlFor="businessType">Business Type *</Label>
                                    <Select onValueChange={(value) => handleInputChange("businessType", value)} required>
                                        <SelectTrigger className="mt-1"><SelectValue placeholder="Select type" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="retailer">Electronics & Vehicle Retailer</SelectItem>
                                            <SelectItem value="cooperative">Cooperative</SelectItem>
                                            <SelectItem value="distributor">Distributor</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-200" />
                    
                    {/* Contact & Interests */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4"><Info className="h-5 w-5"/>Contact & Interests</h3>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="mt-1" />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone Number *</Label>
                                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required className="mt-1" />
                                </div>
                            </div>
                            <div>
                                <Label>Primary Products of Interest</Label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                                    {productOptions.map((product) => (
                                    <div key={product} className="flex items-center space-x-2">
                                        <Checkbox id={product} checked={formData.productsOfInterest.includes(product)} onCheckedChange={(checked) => handleProductInterestChange(product, checked as boolean)} />
                                        <Label htmlFor={product} className="text-sm font-normal cursor-pointer">{product}</Label>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submission */}
                    <div className="pt-6 border-t border-slate-200">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="agreeToTerms" checked={formData.agreeToTerms} onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)} required/>
                        <Label htmlFor="agreeToTerms" className="text-sm font-normal -mt-1">
                            I agree to the <a href="#" className="underline text-primary hover:text-primary-dark">terms and conditions</a> and <a href="#" className="underline text-primary hover:text-primary-dark">privacy policy</a>. *
                        </Label>
                      </div>
                      <Button type="submit" size="lg" className="w-full mt-6 text-lg">Submit Registration</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact & Requirements Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800 text-white shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Need Help?</CardTitle>
                  <CardDescription className="text-slate-400">Our dedicated team is ready to assist you.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="tel:+917900400900" className="flex items-center space-x-3 group text-slate-300">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-white transition-colors">Wholesaler Hotline: +91 7900400900</span>
                  </a>
                  <a href="mailto:wholesale@jagatfertilizer.com" className="flex items-center space-x-3 group text-slate-300">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-white transition-colors">wholesale@jagatfertilizer.com</span>
                  </a>
                  <a href="https://wa.me/917900400900" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-slate-300">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-white transition-colors">Chat on WhatsApp</span>
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-xl rounded-xl">
                <CardHeader><CardTitle className="text-2xl">Partnership Requirements</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {requirements.map((req) => (
                    <div key={req} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{req}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wholesaler Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Exclusive Partner Benefits</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">Unlock powerful advantages designed to help you succeed when you join our program.</p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 bg-slate-50/50 rounded-xl border">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-primary/5">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WholesallerPage;
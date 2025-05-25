import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/ui/hero-section";
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
  Star
} from "lucide-react";

const WholesallerPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    gstNumber: "",
    businessType: "",
    monthlyVolume: "",
    productsOfInterest: [] as string[],
    comments: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to terms and conditions",
        description: "You must accept our terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and contact you within 48 hours.",
    });
    // Reset form
    setFormData({
      businessName: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      gstNumber: "",
      businessType: "",
      monthlyVolume: "",
      productsOfInterest: [],
      comments: "",
      agreeToTerms: false
    });
  };

  const handleInputChange = (field: string, value: string) => {
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

  const benefits = [
    {
      icon: <DollarSign />,
      title: "Exclusive Pricing",
      description: "Special wholesale rates with discounts up to 25%"
    },
    {
      icon: <Users />,
      title: "Priority Support",
      description: "Dedicated account manager and faster response times"
    },
    {
      icon: <TrendingUp />,
      title: "Flexible Payment Terms",
      description: "Extended credit periods and flexible payment options"
    },
    {
      icon: <Truck />,
      title: "Free Delivery",
      description: "Complimentary delivery for orders above minimum quantity"
    },
    {
      icon: <Award />,
      title: "Marketing Support",
      description: "Promotional materials and marketing assistance"
    },
    {
      icon: <Star />,
      title: "Early Access",
      description: "First access to new products and seasonal offers"
    }
  ];

  const pricingTiers = [
    {
      tier: "Bronze",
      range: "₹50,000 - ₹1,50,000/month",
      discount: "8% OFF",
      color: "bg-orange-100 text-orange-800"
    },
    {
      tier: "Silver",
      range: "₹1,50,000 - ₹3,00,000/month",
      discount: "12% OFF",
      color: "bg-gray-100 text-gray-800"
    },
    {
      tier: "Gold",
      range: "₹3,00,000 - ₹7,50,000/month",
      discount: "18% OFF",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      tier: "Platinum",
      range: "Above ₹7,50,000/month",
      discount: "25% OFF",
      color: "bg-primary text-white"
    }
  ];

  const productOptions = [
    "Organic Fertilizers",
    "Chemical Fertilizers",
    "Pesticides",
    "Seeds",
    "Soil Conditioners",
    "Farm Equipment"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Wholesaler Program"
        description="Join our exclusive wholesaler network and enjoy special pricing, priority support, and exclusive deals. Perfect for retailers, large farms, and agricultural cooperatives."
        backgroundImage="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Benefits Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wholesaler Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock exclusive advantages when you join our wholesale partnership program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary text-2xl">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form and Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <UserPlus className="mr-3 h-6 w-6 text-primary" />
                    Wholesaler Registration
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange("businessName", e.target.value)}
                          placeholder="Your business name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          type="text"
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                          placeholder="Full name"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="business@example.com"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Business Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Complete business address"
                        required
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="gstNumber">GST Number</Label>
                        <Input
                          id="gstNumber"
                          type="text"
                          value={formData.gstNumber}
                          onChange={(e) => handleInputChange("gstNumber", e.target.value)}
                          placeholder="GST registration number"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retailer">Agricultural Retailer</SelectItem>
                            <SelectItem value="cooperative">Farm Cooperative</SelectItem>
                            <SelectItem value="farm">Large Scale Farm</SelectItem>
                            <SelectItem value="distributor">Agricultural Distributor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="monthlyVolume">Estimated Monthly Purchase Volume *</Label>
                      <Select onValueChange={(value) => handleInputChange("monthlyVolume", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select volume range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="100k-250k">₹1,00,000 - ₹2,50,000</SelectItem>
                          <SelectItem value="250k-500k">₹2,50,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="500k-1000k">₹5,00,000 - ₹10,00,000</SelectItem>
                          <SelectItem value="1000k+">Above ₹10,00,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Primary Products of Interest</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {productOptions.map((product) => (
                          <div key={product} className="flex items-center space-x-2">
                            <Checkbox
                              id={product}
                              checked={formData.productsOfInterest.includes(product)}
                              onCheckedChange={(checked) => 
                                handleProductInterestChange(product, checked as boolean)
                              }
                            />
                            <Label htmlFor={product} className="text-sm">{product}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="comments">Additional Comments</Label>
                      <Textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => handleInputChange("comments", e.target.value)}
                        placeholder="Tell us more about your business needs..."
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                        }
                        required
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Submit Registration
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pricing and Additional Info */}
            <div className="space-y-8">
              {/* Pricing Tiers */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Discount Tiers</h3>
                    
                    <div className="space-y-4">
                      {pricingTiers.map((tier, index) => (
                        <motion.div
                          key={tier.tier}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`flex justify-between items-center p-4 rounded-lg ${
                            tier.tier === "Platinum" ? tier.color : "bg-gray-50"
                          }`}
                        >
                          <div>
                            <h4 className={`font-semibold ${
                              tier.tier === "Platinum" ? "text-white" : "text-gray-900"
                            }`}>
                              {tier.tier}
                            </h4>
                            <p className={`text-sm ${
                              tier.tier === "Platinum" ? "text-green-100" : "text-gray-600"
                            }`}>
                              {tier.range}
                            </p>
                          </div>
                          <div className={`font-bold text-lg ${
                            tier.tier === "Platinum" ? "text-white" : "text-primary"
                          }`}>
                            {tier.discount}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Requirements</h3>
                    
                    <div className="space-y-3">
                      {[
                        "Valid business license",
                        "Minimum monthly volume commitment",
                        "Proper storage facilities",
                        "Compliance with local regulations",
                        "Professional business operations"
                      ].map((requirement, index) => (
                        <div key={requirement} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                    <p className="text-gray-300 mb-6">
                      Our wholesaler team is ready to assist you with any questions about our program.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>Wholesaler Hotline: +91 98765 43212</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>wholesale@jagatfertilizer.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <span>WhatsApp: +91 98765 43212</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our wholesale partners have grown their businesses with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Green Valley Agro Store",
                growth: "150% increase in sales",
                quote: "The wholesale program transformed our business. Priority support and competitive pricing helped us expand to 3 new locations."
              },
              {
                name: "Farmers Cooperative Ltd",
                growth: "200+ satisfied members",
                quote: "Flexible payment terms and quality products made us the preferred choice for farmers in our district."
              },
              {
                name: "AgriSupply Network",
                growth: "300% business growth",
                quote: "Marketing support and training programs helped us become the leading agricultural supplier in the region."
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{story.quote}"</p>
                    <div>
                      <h4 className="font-semibold text-gray-900">{story.name}</h4>
                      <p className="text-primary text-sm font-medium">{story.growth}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WholesallerPage;

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";
import { Target, Eye, Users, Award, Briefcase, GraduationCap } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Happy Farmers" },
    { number: "200+", label: "Products" },
    { number: "50+", label: "Locations" }
  ];

  const team = [
    {
      name: "Priya Singh",
      position: "Founder & CEO",
      description: "Agricultural Science Graduate with 25+ years of industry experience.",
      image: "/O1.png"
    },
    {
      name: "Rahul Rajput",
      position: "Head of Operations",
      description: "MBA in Operations Management, expert in supply chain optimization.",
      image: "/O2.png"
    },
    {
      name: "Dr. Rajesh Kumar",
      position: "Chief Agronomist",
      description: "PhD in Soil Science, leading our research and development initiatives.",
      image: "/O3.png"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="About Jagat Fertilizer & Chemical"
        description="For over two decades, we have been at the forefront of agricultural innovation, providing farmers with high-quality fertilizers, chemicals, and expert guidance to maximize crop yields and promote sustainable farming practices."
        backgroundImage="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2001, Jagat Fertilizer & Chemical began as a small family business with a simple mission: 
                to help farmers achieve better harvests through quality products and expert knowledge. Today, we serve 
                thousands of farmers across the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey started when our founder, Mr. Jagat Singh, recognized the need for reliable agricultural 
                supplies in rural areas. With his background in agricultural science and passion for farming, he 
                established our company to bridge the gap between modern agricultural technology and traditional farming practices.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Agricultural warehouse" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving agricultural excellence through innovation and sustainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower farmers with innovative, sustainable, and high-quality agricultural solutions that enhance 
                    productivity while preserving environmental health for future generations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading provider of agricultural solutions in the region, known for our commitment to quality, 
                    innovation, and sustainable farming practices that benefit both farmers and the environment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award />,
                title: "Quality Excellence",
                description: "We never compromise on the quality of our products and services, ensuring the highest standards in everything we deliver."
              },
              {
                icon: <Users />,
                title: "Customer First",
                description: "Our customers' success is our success. We prioritize their needs and work tirelessly to exceed their expectations."
              },
              {
                icon: <Target />,
                title: "Innovation",
                description: "We continuously innovate and adapt to bring the latest agricultural technologies and solutions to our farmers."
              },
              {
                icon: <Eye />,
                title: "Sustainability",
                description: "We promote sustainable farming practices that protect the environment while maximizing agricultural productivity."
              },
              {
                icon: <Briefcase />,
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices in all our interactions."
              },
              {
                icon: <GraduationCap />,
                title: "Knowledge Sharing",
                description: "We believe in educating farmers and sharing knowledge to build a stronger agricultural community."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary text-2xl">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Awards
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Recognition of our commitment to quality and excellence
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "ISO 9001:2015 Certified",
                "FIDR Approved",
                "Agricultural Excellence Award 2023",
                "Best Agricultural Supplier 2022"
              ].map((certification, index) => (
                <motion.div
                  key={certification}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-50 rounded-lg"
                >
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-medium text-gray-900">{certification}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

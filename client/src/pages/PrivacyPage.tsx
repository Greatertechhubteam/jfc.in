import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";
import { Shield, Eye, Lock, UserCheck, Database, Globe } from "lucide-react";

const PrivacyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Database />,
      content: `We collect information you provide directly to us, such as when you create an account, make a purchase, request information, or contact us for support.`,
      subsection: "Personal Information includes:",
      list: [
        "Name, email address, and phone number",
        "Billing and shipping addresses",
        "Payment information (processed securely through third-party providers)",
        "Business information for wholesale accounts",
        "Communication preferences"
      ]
    },
    {
      title: "2. How We Use Your Information",
      icon: <UserCheck />,
      content: `We use the information we collect to:`,
      list: [
        "Process and fulfill your orders",
        "Provide customer service and support",
        "Send you updates about your orders and account",
        "Communicate with you about products, services, and promotions",
        "Improve our products and services",
        "Comply with legal obligations"
      ]
    },
    {
      title: "3. Information Sharing",
      icon: <Globe />,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.`,
      subsection: "We may share information with:",
      list: [
        "Service providers who assist in business operations",
        "Payment processors for transaction processing",
        "Delivery partners for order fulfillment",
        "Legal authorities when required by law"
      ]
    },
    {
      title: "4. Data Security",
      icon: <Lock />,
      content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
      list: [
        "SSL encryption for data transmission",
        "Secure servers and databases",
        "Regular security audits and updates",
        "Limited access to personal information by employees"
      ]
    },
    {
      title: "5. Cookies and Tracking",
      icon: <Eye />,
      content: `We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.`,
      subsection: "Types of cookies we use:",
      list: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior",
        "Preference cookies to remember your settings",
        "Marketing cookies for targeted advertising"
      ]
    },
    {
      title: "6. Your Rights",
      icon: <Shield />,
      content: `You have the right to:`,
      list: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your information",
        "Opt-out of marketing communications",
        "File a complaint with data protection authorities"
      ]
    }
  ];

  const additionalSections = [
    {
      title: "7. Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.`
    },
    {
      title: "8. Third-Party Links",
      content: `Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites.`
    },
    {
      title: "9. Children's Privacy",
      content: `Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.`
    },
    {
      title: "10. Contact Us",
      content: `If you have questions about this Privacy Policy, please contact us at:`,
      contact: {
        title: "Data Protection Officer",
        company: "Jagat Fertilizer and Chemical",
        email: "privacy@jagatfertilizer.com",
        phone: "+91 98765 43210",
        address: "123 Agricultural Plaza, Green Valley, Farming District, State 123456"
      }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Privacy Policy"
        subtitle="Last updated: January 2024"
        description="We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data."
        backgroundImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Privacy Overview */}
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
              Our Commitment to Your Privacy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trust is fundamental to our relationship. We handle your personal information with the highest standards of privacy and security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary text-xl">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{section.content}</p>
                    
                    {section.subsection && (
                      <p className="text-gray-900 font-medium text-sm mb-2">{section.subsection}</p>
                    )}
                    
                    {section.list && (
                      <ul className="text-gray-600 text-sm space-y-1">
                        {section.list.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                        {section.list.length > 3 && (
                          <li className="text-primary text-sm font-medium">
                            +{section.list.length - 3} more items
                          </li>
                        )}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  {/* Main sections with full details */}
                  {sections.map((section, index) => (
                    <motion.section
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>
                      
                      {section.subsection && (
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.subsection}</h3>
                      )}
                      
                      {section.list && (
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                          {section.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </motion.section>
                  ))}

                  {/* Additional sections */}
                  {additionalSections.map((section, index) => (
                    <motion.section
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (sections.length + index) * 0.1 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>
                      
                      {section.contact && (
                        <div className="bg-gray-50 p-6 rounded-lg mt-4">
                          <p className="text-gray-600 mb-2">
                            <strong>{section.contact.title}</strong>
                          </p>
                          <p className="text-gray-600 mb-1">{section.contact.company}</p>
                          <p className="text-gray-600">Email: {section.contact.email}</p>
                          <p className="text-gray-600">Phone: {section.contact.phone}</p>
                          <p className="text-gray-600">Address: {section.contact.address}</p>
                        </div>
                      )}
                    </motion.section>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* GDPR Compliance Notice */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">GDPR Compliant</h3>
            <p className="text-green-100 leading-relaxed max-w-2xl mx-auto">
              We are committed to compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. 
              You have full control over your personal data and can exercise your rights at any time by contacting our Data Protection Officer.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;

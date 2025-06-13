import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";

const TermsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using the services of Jagat Fertilizer and Chemical ("Company," "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: "2. Product Information and Availability",
      content: `We strive to provide accurate product information, including descriptions, specifications, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. Product availability is subject to change without notice.`,
      list: [
        "All fertilizers and chemicals are subject to quality testing",
        "Product specifications may vary based on manufacturing batches",
        "Availability depends on seasonal demand and supply conditions"
      ]
    },
    {
      title: "3. Orders and Payment",
      content: `All orders are subject to acceptance by us. We reserve the right to refuse or cancel any order at any time. Payment terms vary based on customer type and order volume.`,
      list: [
        "Retail customers: Payment required before delivery",
        "Wholesale customers: Credit terms available upon approval",
        "All prices are subject to change without prior notice",
        "Applicable taxes will be added to the final invoice"
      ]
    },
    {
      title: "4. Delivery and Risk of Loss",
      content: `Delivery dates are estimates only and cannot be guaranteed. Risk of loss and title to products pass to you upon delivery to the carrier.`
    },
    {
      title: "5. Returns and Exchanges",
      content: `Returns are accepted within 30 days of purchase for unused products in original packaging. Defective or damaged products will be replaced or refunded immediately.`
    },
    {
      title: "6. Limitation of Liability",
      content: `Our liability is limited to the purchase price of the products. We are not liable for any indirect, special, incidental, or consequential damages arising from the use of our products.`
    },
    {
      title: "7. Use of Products",
      content: `Customers are responsible for using products according to manufacturer instructions and applicable regulations. We recommend consulting with agricultural experts for proper application.`
    },
    {
      title: "8. Privacy Policy",
      content: `Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.`
    },
    {
      title: "9. Governing Law",
      content: `These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.`
    },
    {
      title: "10. Contact Information",
      content: `For questions about these Terms and Conditions, please contact us at:`,
      contact: {
        company: "Jagat Fertilizer and Chemical",
        email: "legal@jagatfertilizer.com",
        phone: "+91 98765 43210",
        address: "123 Agricultural Plaza, Green Valley, Farming District, State 123456"
      }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Terms and Conditions"
        subtitle="Last updated: January 2024"
        description="Please read these terms and conditions carefully before using our services. By using our services, you agree to comply with these terms."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Terms Content */}
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
                      
                      {section.list && (
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                          {section.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      
                      {section.contact && (
                        <div className="bg-gray-50 p-6 rounded-lg mt-4">
                          <p className="text-gray-600 mb-2">
                            <strong>{section.contact.company}</strong>
                          </p>
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

      {/* Important Notice */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  These terms and conditions are subject to change without prior notice. We recommend reviewing this page periodically to stay informed of any updates. Continued use of our services after any modifications constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/ui/hero-section";
import ProductCard from "@/components/ui/product-card";
import { Search, Filter } from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "fertilizers", name: "Fertilizers" },
    { id: "chemicals", name: "Chemicals" },
    { id: "seeds", name: "Seeds" },
    { id: "equipment", name: "Equipment" },
    { id: "organic", name: "Organic" }
  ];

  const products = [
    {
      name: "NPK 19:19:19 Complex",
      description: "Balanced nutrition fertilizer suitable for all types of crops with equal proportions of nitrogen, phosphorus, and potassium.",
      price: "₹1,200/bag",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "fertilizers",
      tags: ["NPK", "Balanced", "All Crops"]
    },
    {
      name: "Organic Vermicompost",
      description: "Premium quality vermicompost enriched with beneficial microorganisms for sustainable soil health improvement.",
      price: "₹800/bag",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "organic",
      tags: ["Organic", "Vermicompost", "Eco-friendly"]
    },
    {
      name: "Chlorpyrifos 20% EC",
      description: "Broad-spectrum insecticide effective against various pests in crops like cotton, sugarcane, and vegetables.",
      price: "₹450/bottle",
      image: "https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "chemicals",
      tags: ["Insecticide", "Broad Spectrum", "Crop Protection"]
    },
    {
      name: "Hybrid Tomato Seeds",
      description: "High-yielding, disease-resistant hybrid tomato seeds with excellent fruit quality and market value.",
      price: "₹350/packet",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "seeds",
      tags: ["Hybrid", "High Yield", "Disease Resistant"]
    },
    {
      name: "Urea 46% N",
      description: "High-grade urea fertilizer with 46% nitrogen content for rapid plant growth and green foliage development.",
      price: "₹650/bag",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "fertilizers",
      tags: ["Urea", "Nitrogen", "Fast Acting"]
    },
    {
      name: "Power Sprayer",
      description: "High-pressure battery-operated sprayer with adjustable nozzles for efficient pesticide and fertilizer application.",
      price: "₹12,500/unit",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "equipment",
      tags: ["Sprayer", "Battery", "Efficient"]
    },
    {
      name: "Glyphosate 41% SL",
      description: "Non-selective systemic herbicide for effective control of annual and perennial weeds in various crops.",
      price: "₹750/bottle",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "chemicals",
      tags: ["Herbicide", "Systemic", "Weed Control"]
    },
    {
      name: "DAP Fertilizer",
      description: "Diammonium phosphate fertilizer providing essential phosphorus and nitrogen for root development and plant growth.",
      price: "₹1,450/bag",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "fertilizers",
      tags: ["DAP", "Phosphorus", "Root Development"]
    },
    {
      name: "Organic Neem Cake",
      description: "Natural neem cake fertilizer with pest-repelling properties and slow-release nutrients for organic farming.",
      price: "₹600/bag",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "organic",
      tags: ["Neem", "Organic", "Pest Repellent"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Products"
        description="Discover our comprehensive range of premium fertilizers, chemicals, and agricultural solutions. All products are carefully selected and tested to ensure maximum effectiveness and crop yield."
        backgroundImage="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-primary text-white" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeCategory === "all" ? "All Products" : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </motion.div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  tags={product.tags}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
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
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of agricultural solutions organized by category
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fertilizers",
                description: "Complete range of fertilizers including NPK, Urea, DAP, and specialized blends for all crop types.",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                count: "50+ Products"
              },
              {
                title: "Crop Protection",
                description: "Effective pesticides, herbicides, and fungicides for comprehensive crop protection and pest management.",
                image: "https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                count: "40+ Products"
              },
              {
                title: "Seeds",
                description: "High-quality hybrid and traditional seeds for vegetables, grains, and cash crops with excellent germination rates.",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                count: "30+ Varieties"
              },
              {
                title: "Organic Products",
                description: "Natural and organic fertilizers, soil conditioners, and bio-pesticides for sustainable farming practices.",
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                count: "25+ Products"
              },
              {
                title: "Equipment",
                description: "Modern agricultural equipment, sprayers, and tools to enhance farming efficiency and productivity.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                count: "20+ Items"
              },
              {
                title: "Soil Care",
                description: "Soil conditioners, pH adjusters, and micronutrients to improve soil health and fertility.",
                image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                count: "15+ Solutions"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                onClick={() => setActiveCategory(category.title.toLowerCase().replace(" ", ""))}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">
                      {category.count}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Choosing Products?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Our agricultural experts are here to help you select the right products for your specific crop and soil conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Get Expert Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Download Product Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

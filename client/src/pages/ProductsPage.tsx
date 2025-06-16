import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/ui/hero-section";
import ProductCard from "@/components/ui/product-card";
import { Search, Filter } from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "chemicals", name: "Chemicals" },
    { id: "seeds", name: "Seeds" },
    { id: "equipment", name: "Equipment" },
    { id: "organic", name: "Organic" },
  ];

const products = [
  {
    name: "American Wonder",
    image: "/products/American.png",
    category: "fertilizers",
    tags: ["fertilizer", "npk", "complex"],
    description: "Premium NPK complex fertilizer for enhanced crop growth and yield.",
  },
  {
    name: "Cal-Star",
    image: "/products/Calstar2.png",
    category: "organic",
    price: "$15",
    tags: ["organic", "vermicompost"],
    description: "Nutrient-rich organic vermicompost to improve soil fertility and structure.",
  },
  {
    name: "Ferric Gold",
    image: "/products/Ferric.png",
    category: "chemicals",
    price: "$30",
    tags: ["pesticide", "chlorpyrifos"],
    description: "Highly effective chlorpyrifos-based pesticide for pest control.",
  },
  {
    name: "Ferrous Sulphate",
    image: "/products/Ferrous.png",
    category: "seeds",
    price: "$10",
    tags: ["seeds", "tomato", "hybrid"],
    description: "High-yield hybrid tomato seeds enriched with ferrous nutrients.",
  },
  {
    name: "Humic Fast",
    image: "/products/Humic.png",
    category: "fertilizers",
    price: "$25",
    tags: ["urea", "nitrogen", "fertilizer"],
    description: "Fast-acting humic acid fertilizer that boosts nutrient absorption.",
  },
  {
    name: "Mahabalwan",
    image: "/products/Maha.png",
    category: "equipment",
    price: "$120",
    tags: ["equipment", "sprayer"],
    description: "Durable and efficient agricultural sprayer ideal for field operations.",
  },
  {
    name: "Mahabalwan Aloo Special",
    image: "/products/MahaBalwan.png",
    category: "chemicals",
    price: "$35",
    tags: ["glyphosate", "herbicide"],
    description: "Glyphosate-based herbicide specially formulated for potato crops.",
  },
  {
    name: "Soil Power",
    image: "/products/Soil.png",
    category: "fertilizers",
    price: "$22",
    tags: ["dap", "fertilizer"],
    description: "Balanced DAP fertilizer that strengthens soil productivity.",
  },
  {
    name: "Start Up",
    image: "/products/Start.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Organic neem cake fertilizer ideal for boosting soil microbes.",
  },
  {
    name: "Sumo Gold",
    image: "/products/Sumo.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Powerful neem-based organic fertilizer to improve plant immunity.",
  },
  {
    name: "Super King",
    image: "/products/Super.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Neem-rich organic solution to support healthy plant development.",
  },
  {
    name: "Tejas Power",
    image: "/products/Tejas.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Organic nutrient booster designed to energize soil and roots.",
  },
  {
    name: "Vardan",
    image: "/products/Vardan.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Natural neem fertilizer that promotes strong plant growth organically.",
  },
  {
    name: "Zoom",
    image: "/products/Zoom.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Fast-acting neem-based organic cake to enhance soil nutrition.",
  },
  {
    name: "Ajooba",
    image: "/products/Ajooba.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Trusted organic neem fertilizer for eco-friendly agriculture.",
  },
  {
    name: "Re-Life",
    image: "/products/ReLife.png",
    category: "organic",
    price: "$18",
    tags: ["neem", "organic", "cake"],
    description: "Rejuvenating neem organic product to enrich soil health and vitality.",
  },
];


  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Products"
        description="Discover our comprehensive range of premium fertilizers, chemicals, and agricultural solutions."
        backgroundImage="/hero4.png"
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
              {activeCategory === "all"
                ? "All Products"
                : categories.find((c) => c.id === activeCategory)?.name}
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
                  image={product.image}
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
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
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
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get Expert Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white hover:text-primary"
              >
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

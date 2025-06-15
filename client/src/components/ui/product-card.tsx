import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags?: string[];
  index?: number;
}

const ProductCard = ({
  name,
  price,
  image,
  category,
  tags = [],
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-10 sm:h-10 md:h-[20rem]	 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            {/* <Badge variant="secondary" className="bg-primary text-white">
              {category}
            </Badge> */}
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>


          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

      <div className="flex items-center justify-between">
  <Button
    size="sm"
    className="bg-primary hover:bg-primary/90 text-white"
  >
    <a href="/contact">Contact</a>
  </Button>
  <span className="text-primary font-bold text-lg">{price}</span>
</div>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;

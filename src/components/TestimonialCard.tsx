import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    >
      <Quote className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
      <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {author}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
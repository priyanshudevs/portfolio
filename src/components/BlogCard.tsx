import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

export function BlogCard({ title, excerpt, date, image, url }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <a href={url} className="block">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
        </div>
      </a>
    </motion.article>
  );
}
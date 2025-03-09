import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface CodingProfileCardProps {
  platform: string;
  username: string;
  url: string;
  icon: string;
}

export function CodingProfileCard({
  platform,
  username,
  url,
  icon,
}: CodingProfileCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="block bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary-200 dark:hover:border-primary-800"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.img 
            src={icon} 
            alt={platform} 
            className="w-8 h-8"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {platform}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">@{username}</p>
          </div>
        </div>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </motion.div>
      </div>
    </motion.a>
  );
}
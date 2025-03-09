import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-16 relative", className)}
    >
      <div className="absolute inset-0 -z-10">
        <div className="glow w-full h-full" />
      </div>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white"
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
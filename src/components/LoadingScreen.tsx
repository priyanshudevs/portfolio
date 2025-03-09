import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          exit={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0, 0, 0, 0)' }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border-t-2 border-r-2 border-primary-400"
              />
              
              {/* Inner rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-16 h-16 rounded-full border-b-2 border-l-2 border-primary-600"
              />
              
              {/* Center logo */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-xl p-3"
              >
                <Code2 className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white text-sm font-medium tracking-wider"
              >
                LOADING
              </motion.div>
              <motion.div
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
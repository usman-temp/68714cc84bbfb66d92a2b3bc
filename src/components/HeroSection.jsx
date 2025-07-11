/* eslint-disable */
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-orange-100 to-red-200 flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
        >
          Welcome to Flavor Haven
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Discover delicious recipes, watch step-by-step videos, and share your culinary creations!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold transition">Explore Recipes</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold transition">Watch Video</button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition">Submit Your Recipe</button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
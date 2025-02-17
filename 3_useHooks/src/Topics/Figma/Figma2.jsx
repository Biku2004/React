
// // import React from "react";
// import PropTypes from 'prop-types';
// import { motion } from "framer-motion";

// const Figma2 = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-orange-300 via-white to-purple-300 flex justify-center items-center p-4">
//       <motion.div 
//         className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {/* Navbar */}
//         <nav className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800">DSM.</h1>
//           <div className="hidden md:flex space-x-6 text-gray-600">
//             <NavItem text="Course" />
//             <NavItem text="Resources" />
//             <NavItem text="News" />
//             <NavItem text="Jobs" />
//           </div>
//           <motion.button 
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get started
//           </motion.button>
//         </nav>

//         {/* Hero Section */}
//         <div className="flex flex-col md:flex-row items-center text-center md:text-left">
//           <motion.div 
//             className="flex-1"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             <h2 className="text-green-600 text-sm uppercase font-bold">Introducing a new design system</h2>
//             <h1 className="text-4xl font-bold text-gray-800 mt-2 leading-tight">
//               Build beautiful products, faster.
//             </h1>
//             <p className="text-gray-600 mt-4">
//               A professional design library for UI Designers
//             </p>

//             {/* Search Bar */}
//             <motion.div 
//               className="mt-6 flex items-center bg-gray-100 rounded-full p-2 w-full md:w-2/3"
//               whileHover={{ scale: 1.02 }}
//             >
//               <input
//                 type="text"
//                 placeholder="Find resources"
//                 className="bg-transparent flex-1 outline-none px-4"
//               />
//               <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
//                 🔍
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div 
//             className="flex-1 flex justify-center"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="relative">
//               <motion.img
//                 src="https://source.unsplash.com/300x300/?hFigma2y,woman"
//                 alt="Smiling Woman"
//                 className="rounded-full w-64 h-64 object-cover shadow-lg"
//                 animate={{ y: [0, -5, 0] }}
//                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//               />
//               <div className="absolute top-5 left-5 bg-yellow-400 p-2 rounded-full">💬</div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Features Section */}
//         <motion.div 
//           className="grid md:grid-cols-3 gap-8 mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//         >
//           <FeatureCard
//             title="Design Guideline"
//             description="We built the design guideline to help you understand the design system clearly."
//           />
//           <FeatureCard
//             title="UI Components"
//             description="Grab and mix your own design with our UI components, everything is fully customizable."
//           />
//           <FeatureCard
//             title="Developer Tutorial"
//             description="These libraries would help the developer understand and work correctly with the system."
//           />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// // Navbar Items with Hover Effect
// const NavItem = ({ text }) => (
//   <motion.a 
//     href="#"
//     className="hover:text-black transition"
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     {text}
//   </motion.a>
// );

// NavItem.propTypes = {
//   text: PropTypes.string.isRequired,
// };

// // Feature Card with Hover Effect
// const FeatureCard = ({ title, description }) => {
//   return (
//     <motion.div 
//       className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="flex items-center space-x-2">
//         <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
//         <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
//         <div className="w-4 h-4 bg-green-500 rounded-full"></div>
//       </div>
//       <h3 className="text-lg font-semibold mt-4">{title}</h3>
//       <p className="text-gray-600 mt-2">{description}</p>
//     </motion.div>
//   );
// };
// FeatureCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default Figma2;
// // export default Figma2;




// //////////////////////


import  { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
// import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const Figma2 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all ${darkMode ? "bg-gray-900" : "bg-gradient-to-tr from-orange-300 via-white to-purple-300"} flex justify-center items-center p-4`}>
      <motion.div 
        className="w-full max-w-5xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">DSM.</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
            <NavItem text="Course" />
            <NavItem text="Resources" />
            <NavItem text="News" />
            <NavItem text="Jobs" />
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-105 transition">
            {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-800" />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 text-gray-600 dark:text-gray-300 mt-4">
            <NavItem text="Course" />
            <NavItem text="Resources" />
            <NavItem text="News" />
            <NavItem text="Jobs" />
          </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-green-600 dark:text-green-400 text-sm uppercase font-bold">Introducing a new design system</h2>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-2 leading-tight">
              Build beautiful products, faster.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A professional design library for UI Designers
            </p>

            {/* Search Bar */}
            <motion.div 
              className="mt-6 flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-2 w-full md:w-2/3"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Find resources"
                className="bg-transparent flex-1 outline-none px-4 text-gray-800 dark:text-white"
              />
              <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                🔍
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.img
                src="https://source.unsplash.com/300x300/?hFigma2y,woman"
                alt="Smiling Woman"
                className="rounded-full w-64 h-64 object-cover shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <div className="absolute top-5 left-5 bg-yellow-400 p-2 rounded-full">💬</div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <FeatureCard title="Design Guideline" description="We built the design guideline to help you understand the design system clearly." />
          <FeatureCard title="UI Components" description="Grab and mix your own design with our UI components, everything is fully customizable." />
          <FeatureCard title="Developer Tutorial" description="These libraries would help the developer understand and work correctly with the system." />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Navbar Items with Hover Effect
const NavItem = ({ text }) => (
  <motion.a 
    href="#"
    className="hover:text-black dark:hover:text-white transition"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {text}
  </motion.a>
);

// Feature Card with Hover Effect
const FeatureCard = ({ title, description }) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
      <h3 className="text-lg font-semibold mt-4 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Figma2;

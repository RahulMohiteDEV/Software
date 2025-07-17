import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    title: 'About SBPL',
    content: `SBPL strives to deliver quality services through expertise in on-site testing supported by modern technology.

Led by a team of highly experienced professionals, we follow standards from ISO, BIS, FSSAI, and others. Our mission is fast, accurate, and globally-aligned results.`
  },
  {
    title: 'Established',
    content: `Founded on 13th March 2024. Recognized by Startup India on 20th December 2024.`
  },
  {
    title: 'Our Services',
    content: `
• Processed Food: Nutritional profiling, preservatives, sweeteners, vitamins, heavy metals, shelf life, etc.
• Water & Beverages: Chemical & microbiological testing, VOCs, PAHs, PCBs, disinfectants, virology.
• Herbal & Nutraceutical: Active ingredients, flavonoids, metabolites, shelf life, mass spectrometry.
• Agri-Products: Nutrient analysis, mycotoxins, fertilizers as per FCO 1985.
• Soil: pH, EC, macronutrients, micronutrients, nematodes, and fungi.
• Leaf Analysis: Nutrient levels in leaves and petioles.
• Residue & Persistence: Low-level pesticide & metal residue studies in lab & field.
    `
  },
  {
    title: 'Quality Management',
    content: `
• Electronic data security with validated software
• Qualified staff & equipment
• Internal audits & proficiency programs
• 2-level report verification
• Continuous improvement & method validation
    `
  },
  {
    title: 'Mission',
    content: `We aim to make a meaningful impact by helping customers enhance their products and services, providing a high level of analytical precision, quality, and accuracy with timely results for every client and every sample tested.`
  },
  {
    title: 'Vision',
    content: `To be an environment-friendly and reputable market leader in highly sophisticated testing, consulting, and certification in India.`
  },
  {
    title: 'Core Values',
    content: `Integrity • Quality • Transparency • Consistency • Teamwork`
  },
  {
    title: 'Why Choose Us',
    content: `Reliable and accurate results, one-stop testing services, and a customer-focused approach that adds value.`
  }
];

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 text-left pl-8 pr-6 hover:bg-gray-50 transition-colors duration-200"
      >
        <h4 className="text-xl font-semibold text-gray-900 tracking-wide">{title}</h4>
        {isOpen ? (
          <ChevronUp size={24} className="text-gray-700" />
        ) : (
          <ChevronDown size={24} className="text-gray-700" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          paddingLeft: isOpen ? '2rem' : '2rem',
          paddingRight: isOpen ? '2rem' : '2rem'
        }}
        className="overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
          className="pb-6"
        >
          <pre className="whitespace-pre-wrap font-sans text-gray-900 text-lg leading-relaxed tracking-wide">
            {content}
          </pre>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CompanyProfile = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 mr-35">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 pl-8"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          Company Profile
        </h2>
        <div className="w-24 h-1.5 bg-emerald-600 rounded-full"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
      >
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            content={section.content}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-right pr-8"
      >
        <p className="text-gray-900 italic text-lg">
          "Quality in every test, excellence in every result"
        </p>
      </motion.div>
    </section>
  );
};

export default CompanyProfile;
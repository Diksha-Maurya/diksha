import { motion } from 'framer-motion';
import { styles } from '../styles';
// textVariant is used, fadeIn was for the paragraph, we'll define new list variants
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Define animation variants for the list container and items
// You can move these to '../utils/motion.js' if you prefer
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjust delay between each list item animation
      delayChildren: 0.2,    // Optional delay before the first child starts
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below and faded out
  visible: {
    opacity: 1,
    y: 0, // Animate to original y-position
    transition: {
      duration: 0.4, // Duration of each item's animation
    },
  },
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Replace the motion.p with the animated bullet list */}
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible" // Use whileInView to trigger animation when it enters viewport
        viewport={{ once: true, amount: 0.1 }} // Configure when whileInView triggers
        className="mt-4 text-secondary text-[17px] leading-[30px] list-disc pl-6 space-y-3 w-full"
        // `pl-6` provides space for list-disc, `space-y-3` for spacing between main items
      >
        <motion.li variants={listItemVariants}>
          <strong>Role:</strong> Results-driven Software Engineer
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Experience:</strong> 4+ years of professional experience
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Education:</strong> Master’s in Computer Science from NC State University
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Specialization:</strong> Building intelligent, high-performance systems — from full-stack applications to AI-powered solutions and GPU-accelerated parallel algorithms.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Work at Siemens:</strong>
          {/* Nested list for Siemens details */}
          <motion.ul
            className="list-circle pl-5 mt-2 space-y-1" // Different bullet, adjusted padding/margin
            // These nested lists will inherit animation timing from the parent if not given own variants
            // or can have their own `initial` and `animate` if you want separate control.
            // For simplicity, they will be part of the parent's stagger.
          >
            <motion.li variants={listItemVariants}>
              Engineered enterprise-grade platforms using Angular and .NET.
            </motion.li>
            <motion.li variants={listItemVariants}>
              Delivered scalable features that impacted thousands of users.
            </motion.li>
          </motion.ul>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Research/Work at NC State:</strong>
          {/* Nested list for NC State details */}
          <motion.ul
            className="list-circle pl-5 mt-2 space-y-1"
          >
            <motion.li variants={listItemVariants}>
              Pushed boundaries in AI and systems research.
            </motion.li>
            <motion.li variants={listItemVariants}>
              Implemented CUDA and MPI algorithms.
            </motion.li>
            <motion.li variants={listItemVariants}>
              Optimized carbon emission models.
            </motion.li>
            <motion.li variants={listItemVariants}>
              Fine-tuned LLMs to fingerprint IoT devices with precision.
            </motion.li>
          </motion.ul>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Approach:</strong> Builds with clarity, purpose, and performance in mind, whether it's designing extensible frontend architectures, deploying efficient backend APIs, or parallelizing tensor computations across clusters.
        </motion.li>
      </motion.ul>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Add service cards here if needed */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
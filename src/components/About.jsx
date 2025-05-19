import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
I’m a results-driven Software Engineer with 4+ years of professional experience and a Master’s in Computer Science from NC State University. I specialize in building intelligent, high-performance systems — from full-stack applications to AI-powered solutions and GPU-accelerated parallel algorithms.

At Siemens, I engineered enterprise-grade platforms using Angular and .NET, delivering scalable features that impacted thousands of users. At NC State, I pushed boundaries in AI and systems research — implementing CUDA and MPI algorithms, optimizing carbon emission models, and fine-tuning LLMs to fingerprint IoT devices with precision.

I bring a rare blend of deep technical skills, product thinking, and execution speed. Whether it's designing extensible frontend architectures, deploying efficient backend APIs, or parallelizing tensor computations across clusters — I build with clarity, purpose, and performance in mind.

This isn’t just code. It’s craftsmanship — backed by curiosity, strategy, and relentless drive.
     </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Add service cards here if needed */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

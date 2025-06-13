import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 py-10 px-8 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between min-h-[320px]"
  >
    <p className="text-white font-black text-[48px] mb-4">"</p>
    <div className="flex-1 flex flex-col justify-between">
      <p className="text-white tracking-wider text-[18px] mb-6">
        {testimonial}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-12 h-12 rounded-full object-cover border-2 border-secondary bg-white"
        />
        <div className="flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");

import { motion } from "framer-motion";

function FadeInWhenVisible({ children, delay = 0, as = "div", className = "" }) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default FadeInWhenVisible;


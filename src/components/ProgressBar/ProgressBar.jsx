import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ProgressBar = ({ value, activeColor = "" , className = "", animationDuration = 1 }) => {
  const controls = useAnimation();

  // Whenever the progress prop changes, animate the progress bar
  useEffect(() => {
    const adjustedProgress = Math.min(value, 100); // Ensure progress doesn't exceed 100%
    controls.start({
      width: `${adjustedProgress}%`,
      transition: { duration: animationDuration } // Adjust animation duration as needed
    });
  }, [value, controls]);

  return (
    <div className={`w-full h-2 rounded-full overflow-hidden bg-[#18181b33] dark:bg-[black] ${className}`}
      role="progressbar" // Add role attribute
      aria-valuemin="0" // Minimum value
      aria-valuemax="100" // Maximum value
      aria-valuenow={value} // Current value (dynamic based on `value` prop)
    >
      <motion.div
        className={`h-full bg-black dark:bg-white`}
        style={{ width: "0%", backgroundColor: activeColor!="" && `${activeColor}` }} // Initial width before animation
        animate={controls}
      />
    </div>
  );
};

export default ProgressBar;

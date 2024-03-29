import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
    ImgUrl : string
}


const cardVariants: Variants = {
  offscreen: {
    y: 0
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function ImageDisplayer( { ImgUrl }: Props) {
  const background = `linear-gradient(306deg)`;

        return (
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="splash" style={{ background }} />
            <motion.img src={ImgUrl} className="card" variants={cardVariants}>
            </motion.img>
          </motion.div>
        );
    }

"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function SendMailIcon() {
  const [sendAnim, setSendAnim] = useState(false);

  return (
    <motion.span
      onClick={() => setSendAnim(true)}
      key={sendAnim ? "send" : "idle"} // force re-render state switch
      initial={{ x: 0, y: 0, opacity: 1 }} // reset when remounted
      animate={
        sendAnim
          ? { x: 120, y: -20, opacity: 0 } // send animation
          : { x: [0, 8, 0, -8, 0], y: [0, 0, 0, 0, 0], opacity: 1 } // idle float
      }
      transition={
        sendAnim
          ? { duration: 0.8, ease: "easeInOut" }
          : { repeat: Infinity, duration: 4, ease: "easeInOut" }
      }
      onAnimationComplete={() => {
        if (sendAnim) {
          setTimeout(() => {
            setSendAnim(false); // switch back after 2s
          }, 2000);
        }
      }}
      className="inline-block cursor-pointer"
    >
      <Mail strokeWidth={2.5} />
    </motion.span>
  );
}

"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  const [move, setMove] = useState<boolean>(false);
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.box}
        animate={{ x: move ? 200 : -200 }}
        transition={{ type: "tween" }}
        onClick={() => setMove(!move)}
      ></motion.div>
    </div>
  );
}

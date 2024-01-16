"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const SurveyContainer = dynamic(() => import("./components/SurveyContainer"), { ssr: false });

export default function SurveyPage() {
  return (
    <Fragment>
      <motion.section
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-white"
      />
      <motion.section
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 1, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-barley"
      />
      <motion.section
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-tango"
      />

      <SurveyContainer />
    </Fragment>
  );
}

"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[200]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full sm:h-auto sm:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 sm:h-80 object-cover object-top sm:object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 sm:h-auto pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-row justify-between items-center  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-14 w-14 rounded-lg "
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "DATA SCIENTIST INTERN",
    title: "Scoreme Solutions Pvt. Ltd.",
    src: "/SCOREME.png",
    ctaText: "Visit",
    ctaLink: "www.google.com",
    content: () => {
      return (
        <p>
          <h2>Technologies & Tools Worked With</h2>
          Python,Flask APIs,Predictive Modelling, Prediction Metrics
          ,Image Recognition Architectures (CNN,RNN)
          <h2>Achievements:</h2>
          Gained hands-on experience with advanced data analytics tools and techniques, including machine learning and predictive modeling.
          Solved real-world financial problems and Extracted actionable insights: Developed a captcha automation model, improving data quality and reducing processing time by 30\%.
        </p>
      );
    },
  },
  {
    description: "Backslash Computing Society",
    title: "TECH MEMBER",
    src: "/BCS.png",
    ctaText: "Visit",
    ctaLink: "www.google.com",
    content: () => {
      return (
        <p>
          <p>Designed, debugged, and monitored full stack websites integrating APIs, AI chatbots. Tackled challenges like website traffic handling, security breach, minimizing cost of development.</p>
          <p>Collaborated and networked with other professionals, peers. Interviewed and mentored juniors and enhanced skills like teamwork, time management, communication skills, leadership qualities. Improved the community.</p>
        </p>
      );
    },
  },
  {
    description: "THAPAR INSTIUTE OF ENGONEERING AND TECHNOLOGY",
    title: "U/G Degree in CSE",
    src: "/TIET.png",
    ctaText: "Visit",
    ctaLink: "www.google.com",
    content: () => {
      return (
        <p>
          <h2>CURRENTLY IN 3RD YEAR</h2>
          <h2>CGPA: 9.81</h2>
          <p>Relevant Coursework: Artificial Intelligence, Data Structures And Algorithms, Data Analysis and Algorithms, Database Management.</p>
        </p>
      );
    },
  },
  {
    description: "Modern Vidya Niketan",
    title: "SCHOOLING",
    src: "/MVN.png",
    ctaText: "Visit",
    ctaLink: "www.google.com",
    content: () => {
      return (
        <p>
          <h1>12th PERCENTAGE: 96%</h1>
          <h2>10th PERCENTAGE: 95.6%</h2>
          <p>Extracurricular: BASKETBALL, STUDENT COUNCIL MEMBER, DANCE</p>
        </p>
      );
    },
  },
];

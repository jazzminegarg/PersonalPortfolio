"use client";
import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from "framer-motion";

const timelineData = [
  {
    year: '2024 - Present',
    title: 'Training and Placement Representative (TPR)',
    description: 'Current role, managing placements and training initiatives.',
  },
  {
    year: '2023 - 2024',
    title: 'Data Science Intern',
    description: 'Worked on automation systems at Scoreme Solutions Pvt. Ltd.',
  },
  {
    year: '2022 - 2023',
    title: 'Student Council Member',
    description: 'Active member of the student council during school.',
  },
  // Add more timeline items as needed
];

const TimelineItem = ({ year, title, description, isLeft }: { year: string; title: string; description: string; isLeft: boolean }) => (
  <motion.div
    className={cn(
      "relative mb-12 w-full md:w-1/2 px-4",
      isLeft ? "md:pr-8 md:pl-4" : "md:pl-8 md:pr-4",
      "flex items-center"
    )}
    initial={{ opacity: 0, translateY: 40 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="p-5 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">{year}</h2>
      <h3 className="mb-1 text-base">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </motion.div>
);

const Timeline = () => (
  <div className="relative flex flex-col md:flex-row md:justify-center bg-gray-900">
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 top-0 bottom-0"></div>
    <div className="flex flex-col md:flex-row w-full">
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  </div>
);

export default Timeline;

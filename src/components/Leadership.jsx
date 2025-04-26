import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { leaderships } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const LeadershipCard = ({ leadership }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#4D2F51",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgb(45, 35, 49)" }}
      date={leadership.date}
      iconStyle={{ background: leadership.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={leadership.icon}
            alt={leadership.organization_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{leadership.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {leadership.organization_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {leadership.points.map((point, index) => (
          <li
            key={`leadership-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Things I do that aren't work, but are just as valuable
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Leadership Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
<VerticalTimeline lineColor="#4D2F51">
          {leaderships.map((leadership, index) => (
            <LeadershipCard
              key={`leadership-${index}`}
              leadership={leadership}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");

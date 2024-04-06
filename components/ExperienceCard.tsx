import { motion } from "framer-motion";
import React, { ReactElement } from "react";

type ExpCardProps = {
  iconURL: string;
  enterprise: string;
  department: string;
  title: string;
  time?: string;
  work?: string[];
};

export const ExperienceCard: React.FC<ExpCardProps> = (props) => {
  const { iconURL, enterprise, department, title, work, time } = props;
  return (
    <article
      className="mt-20 flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-[#292929] p-5 opacity-40 
    hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <div className="flex justify-center items-center p-4">
          <motion.img
            initial={{
              y: -50,
              x: -50,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            className="rounded-sm w-24 h-20 object-cover object-center"
            src={iconURL}
            alt="me"
          />
        </div>
        <div className="flex">
          <div>
            <h1 className="pr-2 font-bold text-2xl pb-2">{enterprise}</h1>
            <h2 className="text-medium font-light">
              <span className="pr-2 font-bold">{department}</span>
              {title}
            </h2>
          </div>
        </div>
        <p className="uppercase py-2 text-gray-300">{time}</p>
        <ul className="list-disc space-y-4 ml-5 text-md">
          {work?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

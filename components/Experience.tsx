import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="z-20 absolute top-20 left-auto uppercase tracking-[6px] text-pink-100  text-xl sm:text-2xl sm:tracking-[20px] ">
        Experience
      </h3>
      <div className="absolute top-5 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
        {/* card */}
        <ExperienceCard
          enterprise="ByteDance"
          department="AI-Lab"
          iconURL="images/bytedance.png"
          title="前端开发实习"
          time="2023.10 - 至今"
          work={[
            "在AI-Lab-NLP部门担任前端实习生，主要负责火山翻译组相关的线上项目",
            "主要参与了火山写作网站2.0版本的页面、火山翻译插件2.1版本项目的版本迭代的前端开发",
            "完成了部门的算法数据收集信息的新平台的前端搭建，同时协助部门其他有关web项目需求",
          ]}
        />
        <ExperienceCard
          enterprise="Kanaries"
          department="研发"
          iconURL="images/kanaries.png"
          title="前端开发实习"
          time="2023.4 - 2023.8"
          work={[
            "优化改进线上的数据可视化开源项目Graphic-Walker，解决了相关的数个issues，增加产品的多样性",
            "实现PyGWalker官网的组织邀请新用户功能，并展示被邀请用户信息",
          ]}
        />
        <ExperienceCard
          enterprise="AliBaba"
          department="Fliggy QA"
          iconURL="images/Fliggy.jpeg"
          time="2022.8 - 2022.10"
          title="测试开发实习"
          work={[
            "负责飞猪客户端/服务端/小程序等产品质量保障和研发效能提升协助测试了当时的机票酒店促销活动的功能需求",
            "          用户体验改进工作，优化测试流程，建设测试工具",
          ]}
        />
      </div>
    </motion.div>
  );
}

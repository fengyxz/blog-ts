import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 left-auto uppercase tracking-[6px] text-pink-100  text-xl sm:text-2xl ">
        About
      </h3>
      <div className="md:flex mt-32">
        <div className="flex-1 flex md:justify-end justify-center">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="/images/bj.jpg"
            className="object-cover rounded-full h-40 w-40 md:h-96 md:w-80 md:rounded-xl "
          />
        </div>
        <div className="flex-1 space-y-5 px-0 md:px-10 sm:space-y-10">
          <h2 className="text-2xl md:text-2xl font-semibold py-4">关于我</h2>
          <div className="text-base flex flex-col gap-2 max-w-96">
            <p>我叫吕丹瑜，01年，一个前端爱好者。</p>
            <p>
              目前在
              <span className=" text-pink-700 font-bold">华东师范大学</span>
              就读<span className=" text-pink-700 font-bold">软件工程</span>
              专业，基于一些个人的选择，即将在24年9月入读
              <span className=" text-pink-700 font-bold">香港城市大学 </span>
              （CityU）的Computer Science(MSC项目)
              <br />
              预计25.6毕业
            </p>
            <p>
              本科在<span className=" text-pink-700 font-bold">浙江大学</span>
              农学院就读，<span className=" text-pink-700 font-bold">茶学</span>
              专业～在校期间有修读一些有关计算机的课程，算是转码选手一枚。
            </p>
            <p>
              对前端比较感兴趣，熟悉HTML、CSS、JavaScript、TypeScript，技术栈主要是
              <span className=" text-pink-700 font-bold">React+Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

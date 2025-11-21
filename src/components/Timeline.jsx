"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-white border border-orange-100 shadow-sm">
                <div className="w-4 h-4 p-2 border rounded-full bg-white border-orange-200" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-semibold md:flex md:pl-20 md:text-3xl text-slate-900">
                <h3>{item.date}</h3>
                <h3 className="text-2xl text-slate-600">{item.title}</h3>
                <h3 className="text-2xl text-slate-800">{item.job}</h3>
                {item.location && (
                  <h3 className="text-lg text-slate-500">{item.location}</h3>
                )}
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-semibold text-left text-slate-900 md:hidden ">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
                {item.location && (
                  <h3 className="text-lg text-slate-500">{item.location}</h3>
                )}
              </div>
              {item.contents.map((content, index) => (
                <p className="mb-3 font-normal text-slate-600" key={index}>
                  {content}
                </p>
              ))}
              {item.technologies && (
                <div className="mt-4 pt-4 border-t border-orange-100">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 border border-orange-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-orange-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-orange-400 via-white to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

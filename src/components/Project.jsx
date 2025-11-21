import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title = "",
  href = "",
  image = "",
  tags = [],
  setPreview = () => {},
  discription: description = "",
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col p-6 bg-white rounded-xl border border-orange-100 shadow-md hover:shadow-lg transition-shadow h-full"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex-1">
          <p className="text-xl font-semibold text-slate-900 mb-2">{title}</p>
          <p className="mb-4 font-normal text-slate-600 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {Array.isArray(tags) && tags.map((tag) => (
              <span key={tag.id} className="px-2 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer text-orange-500 hover:text-orange-600 transition-colors mt-auto"
        >
         Read More
         <img src="assets/arrow-right.svg" className="w-5" />
       </a>
      </div>
      {/* <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )} */}
    </>
  );
};

export default Project;

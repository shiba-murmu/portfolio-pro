import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";
import { FaAmazon } from "react-icons/fa";

function IconsPart({ TemplateName, TemplateIconColor }) {
  return (
    <>
      {/* Container structe implement here.. */}
      <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <TemplateName color={TemplateIconColor} size={50} />
      </span>
    </>
  );
}


function BelowIconPart({IconName , IconColor}) {
  return (
    <>
      <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
        <IconName color={IconColor} size={50} />
        <span className="text-white">
          <h2 className="leading-tight">Software Engineer , Google</h2>
          <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
          <ul className="text-sm p-2">
            <li>- Work as software developer</li>
            <li>- Senior SDF-developer</li>
          </ul>
        </span>
      </div>
    </>
  );
}



function Experience() {
  return (
    <>
      <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">
          Experience
        </h1>
        <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            <IconsPart TemplateName={FaHtml5} TemplateIconColor={"#E34F26"} />
            <IconsPart TemplateName={FaCss3} TemplateIconColor={"#1572B6"} />
            <IconsPart TemplateName={FaReact} TemplateIconColor={"#61DAFB"} />
            <IconsPart TemplateName={FaJs} TemplateIconColor={"#F7DF1E"} />
            <IconsPart TemplateName={FaFigma} TemplateIconColor={"#F24E1E"} />
            <IconsPart TemplateName={SiMongodb} TemplateIconColor={"#47A248"} />
            <IconsPart TemplateName={SiRedis} TemplateIconColor={"#FF4438"} />
          </div>
          <div>
           {/* Here similiar type components are used here.... */}
            <BelowIconPart IconName={FaGoogle} IconColor={'#4285F4'} />
            <BelowIconPart IconName={RiNetflixFill} IconColor={'#E50914'} />
            <BelowIconPart IconName={FaAmazon} IconColor={'#FF9900'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;

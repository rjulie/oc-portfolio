import React from "react";
import { useState } from "react";
import Image from 'next/image';
import Tags from "../Tags";

const WorkCard = ({ img, name, description, content = null, issue = null, skills = null, urlGithub = null }) => {

  const [open, setOpen] = useState(false)

  const toggle = () => {
    if (open) {
      return setOpen(false)
    }
    setOpen(true)
  }

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 media-workcard"
        style={{ maxHeight: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mt-5 text-3xl font-medium">
            {name ? name : "Project Name"}
          </h2>
          <h3 className="text-xl opacity-50">
            {description ? description : "Description"}
          </h3>
        </div>
        <span>
          {open ? (
            <div onClick={() => toggle()} className="text-5xl">-</div>
          ) : (
            <div onClick={() => toggle()} className="text-5xl">+</div>
          )}
        </span>
      </div>
      <div>
        <div className={open ? 'h-auto max-h-max ease-out' : 'h-0 max-h-0 overflow-hidden transition-all'}>
          {content ? (
            <p>{content}</p>
          ) : null}
          {issue ? (
            <p>{issue}</p>
          ) : null}

          <div className="flex items-center justify-between py-2">
            {skills ? (
              <div>
                <Tags tags={skills} className="flex flex-row"/>
              </div>
            ) : null}
            {urlGithub ? (
              <Image src="/images/github.svg" height={20} width={20} alt="logo Github" onClick={() => window.open(urlGithub)}/>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

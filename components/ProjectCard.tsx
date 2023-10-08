import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectCardProps = {
  project: Project;
};
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      // href={`/project/${project._id}`}
      href={"/"}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Image
        className="rounded-t-lg"
        src={project.backgroundImg}
        alt={project.title}
        width={400}
        height={200}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.tagLine}
        </p>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;

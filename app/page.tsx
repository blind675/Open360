"use client";
import ProjectCard from "@/components/ProjectCard";
import Searchbox from "@/components/Searchbox";
import { getAllProjects } from "@/lib/actions";
import { IProject } from "@/types";
import React from "react";

const Home = () => {
  const [projects, setProjects] = React.useState<IProject[]>([]);

  const allProjects = React.useRef<IProject[] | null>(null);

  React.useEffect(() => {
    getAllProjects().then((projects) => {
      allProjects.current = projects;

      if (!projects) return;
      setProjects(projects);
    });
  }, []);

  return (
    <>
      <section className="px-6 py-24 ">
        <Searchbox />
      </section>
      <section className="py-8 flex justify-center ">
        <div className="flex flex-wrap gap-x-8 gap-y-16 xl:w-[1221px] lg:w-[805px] w-[370px] ">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

"use client";
import React, { use, useEffect } from "react";
import { IProject } from "@/types";
import Searchbox from "./Searchbox";
import ProjectCard from "./ProjectCard";

type MainPageProps = {
  projects: IProject[];
};

function MainPage({ projects }: MainPageProps) {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    if (searchValue === "") {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects.filter((project) => {
      return project.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredProjects(filtered);
  }, [searchValue, projects]);

  return (
    <>
      <section className="px-6 py-24">
        <Searchbox onChange={setSearchValue} />
      </section>
      <section className="py-8 flex justify-center ">
        <div className="flex flex-wrap gap-x-8 gap-y-16 xl:w-[1221px] lg:w-[805px] w-[370px] ">
          {filteredProjects?.map((project) => (
            <ProjectCard id={project._id} key={project._id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainPage;

import ProjectCard from "@/components/ProjectCard";
import Searchbox from "@/components/Searchbox";
import { getAllProjects } from "@/lib/actions";
import React from "react";

const Home = async () => {
  const allProjects = await getAllProjects();

  return (
    <>
      <section className="px-6 py-24 ">
        <Searchbox />
      </section>
      <section className="py-8 flex justify-center ">
        <div className="flex flex-wrap gap-x-8 gap-y-16 xl:w-[1221px] lg:w-[805px] w-[370px] ">
          {allProjects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

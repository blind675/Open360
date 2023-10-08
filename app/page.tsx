import ProjectCard from "@/components/ProjectCard";
import Searchbox from "@/components/Searchbox";
import { getAllProjects } from "@/lib/actions";
import React from "react";

const Home = async () => {
  const allProjects = await getAllProjects();

  return (
    <>
      <section className="px-6 md:px-20 py-24 ">
        <Searchbox />
      </section>
      <section className="px-6 md:px-20 py-8">
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProjects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

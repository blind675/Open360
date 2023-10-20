import { getProjectById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectById(params.projectId);

  async function handleFollowProject(formData: FormData) {
    "use server";

    console.log("TODO: Follow project");
  }

  return (
    <>
      <div className="p-4 pt-24 h-[300px] md:h-[500px] w-full relative z-0">
        <Image
          src={project?.backgroundImg || ""}
          alt={project?.title || ""}
          layout="fill"
          objectFit="cover"
        />
        <Image
          src={project?.iconImg || ""}
          alt={project?.title + "icon"}
          width={80}
          height={80}
          className="absolute top-[120px] md:top-[280px] left-0 right-0 mx-auto rounded"
        />
        <h1
          className="absolute top-[230px] md:top-[380px] left-0 right-0 mx-auto z-10 
                     text-[40px] md:text-[60px] font-bold text-center text-white
                     bg-slate-500/50"
        >
          {project?.title}
        </h1>
      </div>
      <p className="p-10 text-black text-center text-lg">
        {project?.description}
      </p>
      <form className="flex flex-col items-center" action={handleFollowProject}>
        <button
          type="submit"
          className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 
                           border border-primary hover:border-transparent rounded active:text-blue-500 active:border-blue-500 "
        >
          Follow Project
        </button>
      </form>
    </>
  );
}

export default ProjectPage;

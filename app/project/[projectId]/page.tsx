import { userWithEmailFollowProject, getProjectById } from "@/lib/actions";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectById(params.projectId);
  const session = await getServerSession(authConfig);
  const user = session?.user;

  async function handleFollowProject() {
    "use server";

    if (user && project) {
      await userWithEmailFollowProject(user?.email, project);
      redirect("/");
    } else {
      redirect("/api/auth/signin");
    }
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
      {project?.followersEmails?.includes(user?.email || "") ? (
        <p className=" text-primary font-semibold text-center">
          You are already following this project
        </p>
      ) : (
        <form
          className="flex flex-col items-center"
          action={handleFollowProject}
        >
          <button
            type="submit"
            className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 
                           border border-primary hover:border-transparent rounded active:text-blue-500 active:border-blue-500 "
          >
            {user ? "Follow Project" : "Sign In To Follow Project"}
          </button>
        </form>
      )}
    </>
  );
}

export default ProjectPage;

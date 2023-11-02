"use client";

import React from "react";
import Image from "next/image";
import {
  getProjectsByIDsList,
  userWithEmailUnFollowProject,
} from "@/lib/actions";
import { IProject, IUser } from "@/types";
import { useRouter } from "next/navigation";

type FollowingListProps = {
  user?: IUser;
};

function FollowingList({ user }: FollowingListProps) {
  const [followingProjects, setFollowingProjects] = React.useState<IProject[]>(
    []
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (!user?.followingProjectIDs) {
      return;
    }

    setIsLoading(true);

    getProjectsByIDsList(user?.followingProjectIDs)
      .then((projects) => {
        setFollowingProjects(projects);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [user]);

  async function handleUnFollowProject(project: IProject) {
    await userWithEmailUnFollowProject(user?.email, project);

    router.refresh();
  }

  if (!user?.followingProjectIDs) {
    return (
      <div className=" bg-white border border-gray-400 p-8  h-24 ">
        <p className="text-lg">You are not following any projects yet. </p>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className=" bg-white border border-gray-400 p-8 h-24">
        <p className="text-lg">Loading... </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2">
      {followingProjects.map((project) => (
        <div
          key={project._id}
          className=" bg-white border border-gray-400 h-24 flex items-center"
        >
          <p className="text-lg px-4 w-60 truncate ">{project.title}</p>
          <Image
            src={project.backgroundImg}
            alt={project.title}
            width={300}
            height={90}
            objectFit="cover"
            className=" h-[90px]"
          />
          <p className="text-sm truncate whitespace-pre px-4 flex-grow">
            {project.tagLine}
          </p>
          <button
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 outline-none"
            onClick={() => handleUnFollowProject(project)}
          >
            Un-follow Project
          </button>
        </div>
      ))}
    </div>
  );
}

export default FollowingList;

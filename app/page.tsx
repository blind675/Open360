import MainPage from "@/components/MainPage";
import { getAllProjects } from "@/lib/actions";
import React from "react";

export const revalidate = 60 * 120; // 2 hours

const Home = async () => {
  const allProjects = await getAllProjects();

  return <MainPage projects={allProjects} />;
};

export default Home;

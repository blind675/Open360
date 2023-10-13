"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";
import Project from "../db/models/project.model";
import { connectToDatabase } from "../db/mongoose";

export async function scrapeAndStoreProject(projectURL?: string) {
  if (!projectURL) {
    return;
  }

  const response = await axios.post(process.env.API_BASE_URL + "/scraper", {
    url: projectURL,
  });
  console.log(response.data);

  revalidatePath("/");
  // await revalidatePath(`/projects/${newOrUpdatedProject._id}`);
}

export async function getAllProjects() {
  try {
    await connectToDatabase();

    console.log("Getting all projects...");
    const projects = await Project.find();
    return projects;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

export async function getProjectById(id?: string) {
  if (!id) {
    return null;
  }

  try {
    await connectToDatabase();

    console.log("Getting project by id");
    const project = await Project.findById(id);
    return project;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

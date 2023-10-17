"use server";

import axios from "axios";
import Project from "../db/models/project.model";
import { connectToDatabase } from "../db/mongoose";
import { IProject } from "@/types";

export async function scrapeAndStoreProject(projectURL?: string) {
  if (!projectURL) {
    return;
  }

  const response = await axios.post(process.env.API_BASE_URL + "/scraper", {
    url: projectURL,
  });
  console.log(response.data);

  // await revalidatePath(`/projects/${newOrUpdatedProject._id}`);
}

export async function getAllProjects() {
  try {
    await connectToDatabase();

    console.log("Getting all projects...");
    const projects = await Project.find().sort({ createdAt: -1 });

    return projects.map((project: IProject) => ({
      ...project._doc,
      _id: project._id.toString(),
    }));
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

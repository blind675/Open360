"use server";

import { revalidatePath } from "next/cache";
import Project from "../db/models/project.model";
import { connectToDatabase } from "../db/mongoose";
import { scrapeProject } from "../scraper";

export async function scrapeAndStoreProject(projectURL?: string) {
  if (!projectURL) {
    return;
  }

  const scrapedProject = await scrapeProject(projectURL);

  console.log("Connecting to database...");
  await connectToDatabase();

  console.log("Saving or updating project...");
  const newOrUpdatedProject = await Project.findOneAndUpdate(
    { url: scrapedProject.url },
    scrapedProject,
    {
      upsert: true,
      new: true,
    }
  );

  await revalidatePath(`/projects/${newOrUpdatedProject._id}`);
}

export async function getAllProjects() {
  try {
    await connectToDatabase();

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

    const project = await Project.findById(id);
    return project;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

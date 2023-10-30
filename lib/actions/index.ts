"use server";

import axios from "axios";
import Project from "../db/models/project.model";
import { connectToDatabase } from "../db/mongoose";
import { IProject, IUser } from "@/types";
import User from "../db/models/user.model";

export async function scrapeAndStoreProject(projectURL?: string) {
  if (!projectURL) {
    return;
  }

  await axios.post(process.env.API_BASE_URL + "/scraper", {
    url: projectURL,
  });
}

export async function getAllProjects(limit: number = 10) {
  try {
    await connectToDatabase();

    console.log("Getting all projects...");
    const projects = await Project.find().sort({ createdAt: -1 }).limit(limit);

    return projects.map((project: IProject) => ({
      ...project._doc,
      _id: project._id.toString(),
    })) as IProject[];
  } catch (error: any) {
    console.log(error);

    return [];
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
    return project as IProject;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

export async function createUser(
  email: string,
  name: string,
  imageURL?: string
) {
  try {
    await connectToDatabase();

    console.log("Creating user...");
    const newUser = await User.create({
      email,
      name,
      imageURL,
    });

    return newUser as IUser;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

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

    return projects.map((project: IProject) => {
      return {
        ...project._doc,
        _id: project._id.toString(),
      } as IProject;
    });
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

    return {
      ...project._doc,
      _id: project._id.toString(),
    } as IProject;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

export async function getProjectsByIDsList(ids: string[] = []) {
  if (!ids.length) {
    return [];
  }

  try {
    await connectToDatabase();

    console.log("Getting projects by ids");
    const projects = await Project.find({
      _id: { $in: ids },
    });

    return projects.map((project: IProject) => {
      return {
        ...project._doc,
        _id: project._id.toString(),
      } as IProject;
    });
  } catch (error: any) {
    console.log(error);

    return [];
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
      followingProjectIDs: [],
    });

    return newUser as IUser;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

export async function getUserByEmail(email?: string) {
  if (!email) {
    return null;
  }

  try {
    await connectToDatabase();

    console.log("Getting user by email...");
    const user = await User.findOne({ email });

    return {
      ...user._doc,
      _id: user._id.toString(),
    } as IUser;
  } catch (error: any) {
    console.log(error);

    return null;
  }
}

export async function userWithEmailUnFollowProject(
  userEmail?: string | null,
  project?: IProject
) {
  if (!userEmail || !project) {
    return false;
  }

  try {
    await connectToDatabase();

    console.log("Un-follow project...");

    await Project.updateOne(
      { _id: project._id },
      {
        $pull: {
          followersEmails: userEmail,
        },
      }
    );

    await User.updateOne(
      { email: userEmail },
      {
        $pull: {
          followingProjectIDs: project._id,
        },
      }
    );

    return true;
  } catch (error: any) {
    console.log(error);

    return false;
  }
}

export async function userWithEmailFollowProject(
  userEmail?: string | null,
  project?: IProject
) {
  if (!userEmail || !project) {
    return false;
  }

  try {
    await connectToDatabase();

    console.log("Follow project...");

    await Project.updateOne(
      { _id: project._id },
      {
        $push: {
          followersEmails: userEmail,
        },
      }
    );

    await User.updateOne(
      { email: userEmail },
      {
        $push: {
          followingProjectIDs: project._id,
        },
      }
    );

    return true;
  } catch (error: any) {
    console.log(error);

    return false;
  }
}
